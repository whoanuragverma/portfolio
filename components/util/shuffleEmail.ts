import Email from './Email';
import mongoDB from './mongoDB';
export async function randomizeEmail(email: string): Promise<string> {
    return new Promise(async (resolve) => {
        const db = (await mongoDB).db();
        const objectEmail = new Email(
            email,
            `${Math.random().toString(36).substring(2)}+${Math.random()
                .toString(36)
                .substring(2)}`
        );
        const doc = await db
            .collection<Email>('emails')
            .findOne({ email: email });
        if (!doc) {
            await db.collection<Email>('emails').insertOne(objectEmail);
        }
        resolve(doc?._id || objectEmail._id);
    });
}

export function unradomizeEmail(_id: string): Promise<string> {
    return new Promise(async (resolve, reject) => {
        const db = (await mongoDB).db();
        const doc = await db.collection<Email>('emails').findOne({ _id: _id });
        if (!doc) reject('No such random email!');
        resolve(doc?.email!);
    });
}
