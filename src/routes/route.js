const { Router }  = require('express');
const RouteController = require('../controllers/route')
const { cache } = require('../repository/cache/middleware')

const router = Router();

router.route('/')
    .get(cache, (req, res)=>{
        let { from, to } = req.query;
        try{
            let response = RouteController.getMinRoute(from, to)
            if (!response)
                return res.status(404).json();
            return res.json(response);
        }
        catch{
            res.status(400).json();
        }
    })

    .post((req, res)=>{
        let {from, to, price} = req.body;
        try{
            RouteController.addRoute({from, to, price})
            res.status(204).json();
        }catch{
            res.status(400).json();
        }
    });


module.exports = router