const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  // because of passport
  // req.user
  const queryText = `SELECT annual_reviews.*, user.username, user.id as user_id FROM "annual_reviews"
    JOIN "user" ON annual_reviews.employee_id = user.id;`

  pool.query(queryText)
    .then((dbResp) => {
      res.send(dbResp.rows);
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(500);
    })
});

module.exports = router;