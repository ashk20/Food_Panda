const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



exports.signup = async (req, res) => {
  const{name, email, password, role} = req.body;
  try {
     const userExists = await User.findOne({email});
  if(userExists) {
      res.status(400).json({msg: "user already exist"});
  } 
  const user = new User({
      name,
      email,
      role,
      password,
  });
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);
  await user.save();
   
  const payload = {
      user: {
          id: user.id
      }
  }
  jwt.sign(payload, 'secret', { expiresIn: 360000 },
  (err,token) => {
      if(err) throw err
      res.json({token});
  });

  }catch(err) {
      res.status(500).send('server error');
  }
}



exports.login = async (req, res) => {
      
    try {
        let user = await User.findOne({ email: req.body.email});
        if(!user)
            return res.status(400).send("user not exist")

           const validPassword = await bcrypt.compare(req.body.password, user.password)
           if(!validPassword) 
            return res.status(400).send("invalid password");

            const payload = {
                user: {
                    name: user.name,
                    id: user._id
                }
            }
         
           const token = jwt.sign(payload, 'secret', {expiresIn: 36000} )
            res.send(token);

    } catch(err) {
          console.log(err);
    }
     
}


//get all employee data from db
exports.getAuthByName =  async (req, res) => {
	
    try {
	const users = await User.find({name: req.params.name});
     res.send(users);
  } catch(error) {
      res.status(500).send(" server error");
  }
}

exports.getAuthByRole = async (req, res) => {
   
    try {
       const users = User.find(req.params.body)
       
	  res.send(users);
        
    } catch (error) {
        res.send("server error")
    }
}





