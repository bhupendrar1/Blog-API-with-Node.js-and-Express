const express = require('express');
const router = express.Router();


router.get('', (req, res) => {
const locals = {
    title: "NodeJs Blog",
    description: "simple Blog created with NodeJs, Express && Mongodb."
}



    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});



module.exports = router;