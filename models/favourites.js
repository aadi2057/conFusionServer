const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favouriteSchema = new Schema({
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
    },
    dishes: [{
        type: Schema.Types.ObjectId,
        ref: 'dish'
    }]
}, {
    timestamps: true
});

var Favourites = mongoose.model('Favourite', favouriteSchema);

module.exports = Favourites;