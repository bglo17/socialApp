const { Schema, Model } = require('mongoose');

const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String, 
            Required: true, 
            minlength: 1, 
            maxlength: 240, 
        }, 
        createdAt: {
            type: Date, 
            default: Date.now

        }, 
        username: {
            type: String, 
            Required: true, 
        }, 
        reactions: [
            {
                type: Schema.Types.ObjectId, 
                ref: reaction, 
            }, 
        ], 

    }, 
{
    toJSON: {
        getters: true, 
    }, 
    id: false, 
}
);

module.exports = thoughtSchema; 