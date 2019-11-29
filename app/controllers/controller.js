const tenants = new Object();

var business = require('../models/model');

tenants.create = (req, res) => {
    var name = req.body.name;
    var address = req.body.address;
    var pan = req.body.pan;
    var aadhar = req.body.aadhar;
    var mobile = req.body.mobile;
    console.log("req.body",req.body);

    const pg = new business ({
        name : name,
        address : address,
        pan : pan,
        aadhar : aadhar,
        mobile : mobile
    }) 

    pg.save()
    .then(data => {
        return res.send({
            status:true,
            messsage:"success",
            data:data
        })
    }).catch(err => {
            return res.send({
                status:false,
                messsage:err.messsage || "Invalid request"
            })
        })
}

tenants.find = (req, res) => {
    business.find()
   .then(data => {
       return res.send({
           status:true,
           messsage:"success",
           data:data
       })
    }).catch(err => {
           return res.send({
               status:false,
               messsage:err.messsage || "invalid request"
           })
       })
}


tenants.update = (req, res) => {
    console.log("shfhiok");
    business.findOneAndUpdate({_id:req.query.id}, {
        name: req.body.name,
        address: req.body.address,
        pan: req.body.pan,
        aadhar: req.body.aadhar,
        mobile: req.body.mobile,
    }).then(data => {
            if (!data) {
                return res.status(404).send({
                    status:false,
                    message: "not found with id"
                });
            }
            res.send({
                status:true,
                data:data
            });
        }).catch(err => {
            return res.send({
                status:false,
                message:err.message || "invaild request"
            })
        });
}

tenants.delete = (req, res) => {
    business.deleteOne({_id:req.query.id})
    .then((data) =>{
        return res.send({
            status:true,
            message:"success"
        })
    }).catch(err => {
        return res.send({
            status:false,
            message:err.message || "invalid request"
        })
    })
}

module.exports = tenants;
