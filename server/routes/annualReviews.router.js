const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
  // because of passport
  // req.user
  // req.isAuthenticated()
  const queryText = `SELECT "annual_review".*, "user".username, "user".id as user_id FROM "annual_review"
    JOIN "user" ON "annual_review".employee_id = "user".id
    WHERE "annual_review".access_level < $1;`

  pool.query(queryText, [
    req.user.access_level
  ])
    .then((dbResp) => {
      res.send(dbResp.rows);
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(500);
    });
});

module.exports = router;