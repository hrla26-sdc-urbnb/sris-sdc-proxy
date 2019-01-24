const router = require('express').Router();
const axios = require('axios');

router.route('/:link_id')
  .get((req, res) => {
    const { link_id } = req.params;
    // axios.get(`http://54.211.210.36:2100/api/${link_id}`) // microservice instance
    axios.get(`http://52.53.186.62:80/api/${link_id}`) // load balancer
      .then(({ data }) => {
        res.send(data);
      });
  });

module.exports = router;
