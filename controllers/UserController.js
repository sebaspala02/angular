let User = require('../models/User')

let UserController = {
    
    find (req, res){
        User.findById({
            _id: req.params.id
        })
        .then(doc => {
            res.json(doc)
        }).catch(err => {
            res.json(err)
        })
    },
    
    store(req, res){
        User.create({
            name: req.body.name,
            lastname: req.body.lastname,
            age: req.body.age
        }).then(doc => {
            res.json(doc)
        }).catch(err => {
            res.json(err)
        })
    }
}

module.exports = UserController;