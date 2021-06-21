import { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(_: NextApiRequest, res: NextApiResponse) {
    const oAuth: OAuth = await (
        await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            body: `grant_type=refresh_token&refresh_token=${process.env.SPOTIFY_REFRESH_TOKEN}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${Buffer.from(
                    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
                ).toString('base64')}`,
            },
        })
    ).json();
    const response: Response = await fetch(
        'https://api.spotify.com/v1/me/player/currently-playing?market=IN',
        {
            headers: {
                Authorization: `${oAuth.token_type} ${oAuth.access_token}`,
            },
        }
    );
    if (response.status === 204) return res.status(200).json({});
    return res.status(200).json(await response.json());
}
