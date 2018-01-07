var express = require('express');
var router = express.Router();
const async = require('async');
const Product = require('../model/product');
const Category = require('../model/category');

/*------------------------------------
* Author : Dang Minh Truong
* Email : mr.dangminhtruong@gmail.com
*-----------------------------------*/

router.get('/', function(req, res, next) {
    
    async.parallel([
        function(callback){
            Product.find().sort( { createdOn: -1 } ).limit(4)
            .exec((err, news) => {
                callback(null, news);
            })
        },
        function(callback){
            Product.find({ status : 2 }).limit(4)
            .exec((err, features) => {
                callback(null, features);
            })
        }
    ],
    // Call back
    function(err, results) {
        if(err){
            console.log(err);
        }

        res.render('index',{
             news : results[0],
             features : results[1]
        });
    });
});

module.exports = router;
