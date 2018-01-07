var express = require('express');
var router = express.Router();
const User = require('../model/user');
const Category = require('../model/category');

/*------------------------------------
* Author : Dang Minh Truong
* Email : mr.dangminhtruong@gmail.com
*-----------------------------------*/

router.get('/:lang', function(req, res, next) {
    res.cookie('lang', req.params.lang, { maxAge: 900000 });
    res.redirect('back');
});

module.exports = router;
