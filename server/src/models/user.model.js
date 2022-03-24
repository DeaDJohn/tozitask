// User.model.js
import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
   nickname: {
       type: String,
       required: true
   },
   email: {
       type: String,
       required: true
   },
   password: {
       type: String,
       required: true
   },
   created_at: { 
       type: Date, 
       default: Date.now 
    },
   avatar: {
       type: String
   }
});

const User = mongoose.model("User", userSchema);
export default User;

// Ex json
// {
//     "nickname": "Acerbi",
//     "email": "Acerbi@tozitask.com",
//     "password": "AcerbiElPesao",
//     "created_at": "01/02/1990",
//     "avatar": "//img.uefa.com/imgml/TP/players/3/2020/324x324/250052957.jpg"
// }
