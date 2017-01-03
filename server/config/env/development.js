module.exports = {
//development configuration options
    sessionSecret: 'xHEW53mmS',
    db: 'mongodb://localhost:27017/DashboardAnalytics',
    api: '/api/v1',
    port: 4000,
    facebook: {
        clientID: '1445047232458858',
        clientSecret: 'd84aeec1f8f5bc3fb6d0da4c03ec3224',
        callbackURL: 'http://localhost:4000/oauth/facebook/callback'
    },
    androidClientID : '954209047151-k2itmgrcphucvb497mbgv106ab9sddlf.apps.googleusercontent.com',
    iOSClientID:'569089068597-8v8l8mhttkfm60gv2obtp2k3ts9b0u5a.apps.googleusercontent.com',
    clientID:'',
    google: {
        clientID: '954209047151-k2itmgrcphucvb497mbgv106ab9sddlf.apps.googleusercontent.com',
        clientSecret: '0rC_kr4pGosF7tAyU6GLKOtA',
        callbackURL: 'http://localhost:4000/oauth/google/callback'
    }
};
