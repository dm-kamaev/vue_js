'use strict';

const fs = require('fs');
const util = require('util');
fs.promise_read_file = util.promisify(fs.readFile);
fs.promise_write_file = util.promisify(fs.writeFile);

const router = require('express').Router();
module.exports = router;


router.get('/api/books/:u_id', async function(req, res) {
  const u_id = req.params.u_id;
  try {
    const books = JSON.parse(await fs.promise_read_file('./base_user_books/'+u_id+'.json', 'utf-8'));
    res.json({
      ok: true,
      data: books
    });
  } catch (err) {
    res.json({
      ok: true,
      data: []
    });
  }

});


router.post('/api/books/:u_id', async function(req, res) {
  const u_id = req.params.u_id;
  const books = req.body;
  try {
    await fs.promise_write_file('./base_user_books/'+u_id+'.json', JSON.stringify(books), 'utf-8');
    res.json({
      ok: true,
    });
  } catch (err) {
    console.error(err);
    res.json({
      ok: false,
    });
  }
});
