const { Router } = require('express');

const router = Router();

router.get('/sensor2', (req, res) => {
    res.send('Están consumiendo el endpoint sensor2');
}) 

router.post('/sensor2', (req, res) => {
    console.log(req.body)
    res.send('Están consumiendo el endpoint sensor2');
})

module.exports = router;