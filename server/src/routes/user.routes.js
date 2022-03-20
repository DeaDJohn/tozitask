import express from 'express';
import User from '../models/user.model';
const userRouter = express.Router();
//const User = require('../models/User.model');

/* Get all Users */
userRouter.get('/', (req, res, next) => {
    User.find({} , function(err, result){
        if(err){
            res.status(400).send({
                'success': false,
                'error': err.message
            });
        }
        res.status(200).send({
            'success': true,
            'data': result
        });
    });
});

/* Get Single User */
userRouter.get("/:User_id", (req, res, next) => {
    User.findById(req.params.User_id, function (err, result) {
        if(err){
             res.status(400).send({
               success: false,
               error: err.message
             });
        }
        res.status(200).send({
            success: true,
            data: result
        });
     });
});


/* Add Single User */
userRouter.post("/", (req, res, next) => {
  let newUser = {
    nickname: req.body.nickname,
    email: req.body.email,
    password: req.body.password,
    created_at: req.body.created_at,
    avatar: req.body.avatar
  };
   User.create(newUser, function(err, result) {
    if(err){
        res.status(400).send({
          success: false,
          error: err.message
        });
    }
      res.status(201).send({
        success: true,
        data: result,
        message: "User created successfully"
      });
  });
});

/* Edit Single User */
userRouter.patch("/:User_id", (req, res, next) => {
  let fieldsToUpdate = req.body;
  User.findByIdAndUpdate(req.params.User_id,{ $set: fieldsToUpdate }, { new: true },  function (err, result) {
      if(err){
          res.status(400).send({
             success: false,
            error: err.message
            });
      }
      res.status(200).send({
        success: true,
        data: result,
        message: "User updated successfully"
        });
  });
});

/* Delete Single User */
userRouter.delete("/:User_id", (req, res, next) => {
  User.findByIdAndDelete(req.params.User_id, function(err, result){
      if(err){
        res.status(400).send({
          success: false,
          error: err.message
        });
      }
    res.status(200).send({
      success: true,
      data: result,
      message: "User deleted successfully"
    });
  });
});

export default userRouter;