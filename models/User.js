const { Schema, model } = require ('mongoose');
const thoughtSchema = require('./thought');

const userSchema = new Schema(
    {
        username: {
            type: String, 
            Unique: true, 
            Required: true, 
            Trimmed: true
        }, 
        email: {
            type: String, 
            Required: true, 
            Unique: true, 
            Validate: {
                validator: () => Promise.resolve(false), 
                message: 'Email validation failed'
            }
        }, 
        thoughts: [
            {
                type: Schema.Types.ObjectId, 
                ref: 'Thought',
            },
        ], 
        friends: [
            {
                type: Schemat.Types.ObjectId, 
                ref: 'User', 
            }
        ]

        },
        {
            toJSON: {
                virtuals: true, 
            }, 
            id: false, 
        }

 
);



user.email = 'test@test.co';
user.name = 'test';
user.validate().catch(error => {
  assert.ok(error);
  assert.equal(error.errors['name'].message, 'Oops!');
  assert.equal(error.errors['email'].message, 'Email validation failed');
  
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return `${this.friends}`;
  })

});


const User = model('user', userSchema);
const user = new User();
module.exports = User;
