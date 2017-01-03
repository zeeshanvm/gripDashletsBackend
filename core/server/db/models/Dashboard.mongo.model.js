var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var permissions = [
    'Write',
    'Read'
];
var permissionLevel = {

    DashboardId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    role: {
        enum: permissions
    }

};


var dashboardSchema = mongoose.Schema({

    CreatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    dashboardName: {
        type: String
    },
    widgets: {
            type: Schema.Types.ObjectId,
            ref: 'Widgets'
    },
    preferences: {},
    permissions: [permissionLevel]
});

mongoose.model('Dashboard', dashboardSchema);

