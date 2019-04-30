import axios from 'axios';

module.exports = function (app) {
  app.post("/searchBooks", (req, res) => {
    axios.get(`https://googleapis.com/books/v1/volumes?q=the+notebook`)
      .then(
        (response) => {
          console.log(response.data.items);
          req.json(response.data.items)
        }
      ).catch(
        (error) => {
          res.json({ error: error })
        }
      );
  });
};