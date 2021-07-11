import User from '../model/userSchema.js'

 export const usersignup = async (req, res) => {
     try {

        const exist = await User.findOne({ username: req.body.username })
        if(exist){
            return res.status(401).json("Username already exist")
        }
         const user = req.body;
         const newUser = new User(user);
         await newUser.save();

         res.status(200).json("User is successfully Register")
     } catch (error) {
         console.log("Error:",error.message)
     }
}

export const userLoginIn = async (req, res) => {
    try {
        let user = await User.findOne({ username: req.body.username, password: req.body.password })
        if(user) {
            return res.status(200).json(`${req.body.username} login successfully`);

        }else{
            return res.status(401).json('invalid login');
        }
        
    } catch (error) {
         console.log("Error:",error.message)

        
    }
}


