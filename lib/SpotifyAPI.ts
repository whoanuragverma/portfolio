export default function SpotifyAPI(): Promise<SpotifyAPIData> {
    return new Promise(async (r) => {
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
        let apiData: SpotifyAPIData = {};
        if (response.status === 200) apiData = await response.json();
        r(apiData);
    });
}
