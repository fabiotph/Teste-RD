const { Router }  = require('express');
const RouteController = require('../controllers/route')

const router = Router();
router.route('/')

    .get((req, res)=>{
        let from = req.query.from;
        let to = req.query.to;

        res.json({msg: `GET route from ${from} to ${to}`})
    })

    .post((req, res)=>{
        let body = req.body;
        res.json({msg: `POST route`, body: body})
    });


module.exports = router