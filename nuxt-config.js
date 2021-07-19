export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Vokanesia',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.png' },
            { rel: 'stylesheet', href: '/css/style.css' },
            { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
            { rel: 'stylesheet', href: '/css/animate.min.css' },
            { rel: 'stylesheet', href: '/css/owl.carousel.min.css' },
            { rel: 'stylesheet', href: '/css/boxicons.min.css' },
            { rel: 'stylesheet', href: '/css/meanmenu.min.css' },
            { rel: 'stylesheet', href: '/css/nice-select.min.css' },
            { rel: 'stylesheet', href: '/css/fancybox.min.css' },
            { rel: 'stylesheet', href: '/css/odometer.min.css' },
            { rel: 'stylesheet', href: '/css/magnific-popup.min.css' },
            { rel: 'stylesheet', href: '/css/responsive.css' },
        ],
    },
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
    ],
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.png' },
        { rel: 'stylesheet', href: '/css/style.css' },
        { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/css/animate.min.css' },
        { rel: 'stylesheet', href: '/css/owl.carousel.min.css' },
        { rel: 'stylesheet', href: '/css/boxicons.min.css' },
        { rel: 'stylesheet', href: '/css/meanmenu.min.css' },
        { rel: 'stylesheet', href: '/css/nice-select.min.css' },
        { rel: 'stylesheet', href: '/css/fancybox.min.css' },
        { rel: 'stylesheet', href: '/css/odometer.min.css' },
        { rel: 'stylesheet', href: '/css/magnific-popup.min.css' },
        { rel: 'stylesheet', href: '/css/responsive.css' },
    ],

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/stylelint
        '@nuxtjs/stylelint-module',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en',
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
}