const { withPlaiceholder } = require('@plaiceholder/next');
const fs = require('fs');
const locales = JSON.parse(
    fs.readFileSync('i18n/availableLang.json', 'utf-8')
).langs.map((l) => l.locale);
module.exports = withPlaiceholder({
    webpack5: true,
    i18n: {
        locales: locales,
        defaultLocale: 'en',
    },
    images: {
        domains: ['i.scdn.co'],
        formats: ['image/avif', 'image/webp'],
    },
});
