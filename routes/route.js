const path = require('path');

const express = require('express');

const router = express.Router();

const prdctModel = require('../models/models')

//const routeController = require ('../controllers/controller');
const { JSON } = require('sequelize');
const { json } = require('body-parser');
const { resolve4 } = require('dns');

// router.post('/save', routeController.postData);

router.post('/add-user', async (req,res,next) => {

        //We Get these 3 as a part of post request done
    const userName = req.body.username;
    console.log(req.body.username);

    const phoneNumber = req.body.phonenumber;

    const emailId = req.body.emailid;
     try {

    if(!userName|| !phoneNumber||!emailId){
       console.log("Please Fill all the Fields");
    } else {
    const data =  
   await  prdctModel.create({
        username : userName,
        phonenumber : phoneNumber,
        email : emailId
    })
    res.json(data) 
}}

     catch(e){
        console.log(e);
     }
});



router.get('/get-users', async (req, res, next) => {

    try {
    const user = await prdctModel.findAll().then((result) => res.json(result)).catch((err)=> { if(err)throw err});
    } catch (e){
        console.log(e);
    }

    })


    router.delete('/del-user/:id', async (req, res, next) => {

        const uid =req.params.id;

        try{
            await prdctModel.destroy({where :{ id : uid}})
        } catch (e){
            console.log(e)
        }


        });


module.exports = router;   