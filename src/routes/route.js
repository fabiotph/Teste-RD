const { Router }  = require('express');
const RouteController = require('../controllers/route')

const router = Router();

router.route('/')
    .get((req, res)=>{
        let { from, to } = req.query;
        let response = RouteController.getMinRoute(from, to)
        if (!response)
            return res.status(404).json();
        return res.json(response);
    })

    .post((req, res)=>{
        let {from, to, price} = req.body;
        try{
            RouteController.addRoute({from, to, price})
            res.status(204).json();
        }catch(err){
            res.status(400).json();
        }
    });


module.exports = router