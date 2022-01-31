const express = require('express');
const router = express.Router();


//MODELS
const { Datas } = require('./../models/user');
// define the route for getting Data
router.get('/todo', (req, res, next) => {
    Datas.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })

})

//Define the route for posting data
router.post('/todo', (req, res, next) => {
    Datas.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
})

//Define routes for update your data using id
router.get('/edit/:id', (req, res, next) => {
    Datas.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        }
        else {
            res.json(data)
        }
    })
})
router.put('/update/:id', (req, res, next) => {
    Datas.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);

        }
        else {
            res.json(data);
            console.log("Updated Successfully!")
        }
    })
})



//Define routes for delete your data using id

router.delete('/todo/:id', (req, res, next)=>{
    Datas.findByIdAndRemove(req.params.id, (error, data)=>{
if(error){
    return next(error)
}
else{
    res.status(200).json({
        msg:data
    })
}
    })
})







module.exports = router;