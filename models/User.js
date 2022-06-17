const mongoose = require('mongoose');

const userModel = new mongoose.Schema(
    {
        username:{
            type: 'string',
            unique:true, 
            require: true,
            Trimmed: true,
        },

    email:{
        type: 'string',
        require: true,
        unique: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']



    },
    thoughts:[
        {
        type:Schema.types.ObjectId,


    },
],
friends: [
    {
    type: Schema.Types.ObjectId,
    ref: "Users",
    },
],

},
    
{
    
    toJSON: {
    virtuals: true,
    },
    id:false,
}
);


userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});


const User = model("user", userModel);

module.exports = User