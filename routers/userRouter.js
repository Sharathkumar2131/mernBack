const express=require('express');

const router=new express.Router();
const userModel=require('../model/userModel');

// router.get('/test',(req,res)=>{
//     res.send("this is for testing ...")
// });


//post user details......
router.post('/users/add',async(req,res)=>{
    try{
        const addUser=new userModel(req.body);
        console.log(req.body);
        const userDetails= await addUser.save();
        res.send(userDetails);
    }catch(e){
        res.status(400).res.send(e);
    }
})

//get all users........
router.get('/users',async(req,res)=>{
   try{
    const getUsers=await userModel.find({}).sort({"userId":1});
    res.status(201).send(getUsers);
   }catch(e){
     res.status(400).send(e);
   }
});

//get particuler user details....

router.get('/users/:id',async(req,res)=>{
      try{
         const id=req.params.id;
         const getUser=await userModel.findById(id);
         res.send(getUser);
         
      }catch(e){
        res.status(400).res.send(e);
      }
});

//update particuler user information....

router.put('/users/update/:id',async(req,res)=>{
    try {
        
        const id=req.params.id;
        const updateUser=await userModel.findByIdAndUpdate(id,req.body,{
            new:true
        })
        res.send(updateUser);
        

    } catch (error) {
        res.status(400).res.send(error)
    }
});

//delete user ......

router.delete('/users/delete/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const deleteUser=await userModel.findByIdAndDelete(req.params.id);
        res.send(deleteUser);
        
    } catch (error) {
        res.status(400).res.send(error)
    }
})



module.exports=router;