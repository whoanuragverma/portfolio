const { withPlaiceholder } = require('@plaiceholder/next');

module.exports = withPlaiceholder({
    webpack5: true,
    i18n: {
        locales: ['en', 'hi'],
        defaultLocale: 'en',
    },
    images: {
        domains: ['i.scdn.co'],
        formats: ['image/avif', 'image/webp'],
    },
});
