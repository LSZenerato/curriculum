// const withPWA = require('next-pwa')
// const runtimeCaching = require('next-pwa/cache')

// module.exports = withPWA({
//   pwa: {
//     dest: 'public',
//     runtimeCaching,
//   },
// })

module.exports = {
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/home' },
            '/home': { page: '/home' },
            '/sobre': { page: '/sobre' },
            '/tecnicas': { page: '/tecnicas' },
            '/contato': { page: '/contato' },
        }
    }
}