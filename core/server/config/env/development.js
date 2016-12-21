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
    }
};
