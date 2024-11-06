import User from  "../model/UserModel.js"

export const create =  async (req, res) => {
    try{

        const newUser = new User(req.body);
        const  {email} =  newUser;

        const userExist = await User.findOne({email})
        if (userExist){
            res.status(400).json({message: 'User Already Exist.'});
        }

        const savedData = await  newUser.save();
        return res.status(200).json(savedData);

    } catch (error){
        return res.status(500).json({errorMessage:  error.message});
    }
}


export const getAllUsers = async (req, res)=>{
    try{
         const userData = await  User.find();
         if(!userData || userData.length === 0){
            return res.status(404).json({message: 'User not  Found.'});
         }
          res.status(200).json(userData);

    } catch (error){
        res.status(500).json({ errorMessage : error.message});

    }
}


export const getUserById = async (req, res) => {

    try{
         const id  = req.params.id;
         const UserExist =  await User.findById(id);
         if(!UserExist){
            return res.status(404).json({message: 'User not  Found.'});
         }

         res.status(200).json(UserExist);

    } catch (errror){
        res.status(500).json({error: "Internal Server Error"});
    }
}


export const updateUserbyId = async (req, res)=>{
    try{
         const id  = req.params.id;
         const UserExist =  await User.findById(id);
         if(!UserExist){
            return res.status(404).json({message: 'User not  Found.'});
         }

         const updateUser = await  User.findByIdAndUpdate(id, req.body, {new: true});
         res.status(201).json(updateUser);
       
         

    } catch (errror){
        res.status(500).json({error: "Internal Server Error"});
    }
}


export const deleteUserbyId = async (req, res)=>{
    try{
         const id  = req.params.id;
         const UserExist =  await User.findById(id);
         if(!UserExist){
            return res.status(404).json({message: 'User not  Found.'});
         }

         await User.findByIdAndDelete(id);
         res.status(200).json({message: "User Deleted Successfully"});
         

    } catch (errror){
        res.status(500).json({error: "Internal Server Error"});
    }
}
