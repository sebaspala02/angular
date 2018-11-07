let moongoose = require('mongoose');
let Schema = moongoose.Schema;

let PlaceSchema = Schema({
name: {
    type: String,
    required: true
},
description: {
    type: String, 
    required: true
},
location: 
{
    type: String, 
    required: true
} 
},{
    versionKey: false
});

module.exports = moongoose.model('Place', PlaceSchema);
