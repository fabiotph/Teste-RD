const { Router }  = require('express');
const RouteController = require('../controllers/route')

const router = Router();
router.route('/')

    .get((req, res)=>{
        let { from, to } = req.query;
        let response = RouteController.getMinRoute(from, to)
        res.json(response);
    })

    .post((req, res)=>{
        let body = req.body;
        RouteController.addRoute(body)
        res.json({msg: `POST route`, body: body})
    });


module.exports = router