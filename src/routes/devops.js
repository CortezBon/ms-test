const {Roter, Router} = require ('express');
const router = Router();

const devops = require('../sample.json');

router.get('/', (req, res) => {
    res.json(devops);
});


router.post('/', (req, res) => {
    const { message, to, from, timeToLifeSec } = req.body;
    if (message && to && from && timeToLifeSec) {
        const id = devops.length + 1;
        const newDevops = {...req.body, id};
        devops.push(newDevops);
        // res.json(devops);
        res.json({message: "Hello Juan Perez your message will be send"});
    } else {
        res.send('ERROR');
    }
});

module.exports = router;