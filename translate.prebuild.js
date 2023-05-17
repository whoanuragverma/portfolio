const fs = require('fs');
const axios = require('axios');

const originalPath = ['i18n', 'en'];
const ls = fs.readdirSync(originalPath.join('/'));

const files = [];

ls.forEach((f) => {
    if (f.endsWith('.json')) files.push(f);
    else
        files.push(
            ...fs
                .readdirSync([...originalPath, f].join('/'))
                .map((t) => `${f}/${t}`)
        );
});

async function translate(language, text) {
    const URL = `https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=en&to=${language}`;
    const HEADERS = {
        'Ocp-Apim-Subscription-key': process.env.AZURE_KEY,
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Region': 'EastUS',
    };
    const data = [
        {
            text: text,
        },
    ];
    return await axios({
        url: URL,
        headers: HEADERS,
        method: 'POST',
        data: data,
    }).then((res) => res.data[0].translations[0].text);
}
async function parseJSON(l, json) {
    // console.log(json);
    if (typeof json === 'string') {
        return await translate(l, json);
    }
    if (Array.isArray(json)) {
        const translateJSON = [];

        for await (const val of json) {
            const translated = await parseJSON(l, val);
            translateJSON.push(translated);
        }

        return translateJSON;
    }
    const translateJSON = {};
    for await (const key of Object.keys(json)) {
        if (typeof json[key] === 'string' && !json[key].startsWith('/'))
            translateJSON[key] = await translate(l, json[key]);
        else if (typeof json[key] === 'object')
            translateJSON[key] = await parseJSON(l, json[key]);
        else translateJSON[key] = json[key];
    }
    return translateJSON;
}
function writeFile(path, contents) {
    const FOLDER_PATH = path
        .split('/')
        .slice(0, path.split('/').length - 1)
        .join('/');
    fs.mkdir(FOLDER_PATH, { recursive: true }, function (err) {
        if (err) throw err;

        fs.writeFile(path, contents, (err) => {
            if (err) throw err;
        });
    });
}
async function processFile(filePath, LANGUAGE) {
    const path = [...originalPath, filePath];
    const data = JSON.parse(fs.readFileSync(path.join('/'), 'utf-8'));

    const translated = await parseJSON(LANGUAGE, data);
    const newPath = [originalPath[0], LANGUAGE, filePath].join('/');
    writeFile(newPath, JSON.stringify(translated));
}
async function main() {
    const locales = JSON.parse(
        fs.readFileSync('i18n/availableLang.json', 'utf-8')
    )
        .langs.map((l) => l.locale)
        .filter((k) => k !== 'en');
    for await (const locale of locales) {
        for await (const file of files) {
            await processFile(file, locale);
            console.log(`Created: ${file} in ${locale}`);
        }
    }
}

main();
// processFile("footer.json", 'hi');
