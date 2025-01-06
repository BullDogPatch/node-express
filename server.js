import express from 'express';

const app = express();
app.use(express.json());

app.listen(8080, () => console.log('My server is up and running.'));

app.get('/', (request, response) => {
  response.send(
    '<h1 style="color: red; text-align: center;">This is from the server</h1>'
  );
});

app.get('/madagasca', (request, response) => {
  response.json({ message: 'Hi Mom, I am somewhere in Africa' });
});

app.get('/secret-post', (request, response) => {
  response.json({ message: 'This is super secret' });
});

app.post('/secret-post', (request, response) => {
  const data = request.body;
  response.json(data);
});

// app.post('/add-new-data', function (request, response) {
//   //The client request will contain the data body
//   const data = request.body;
//   //Some code to add this data body into the database
//   response.json(data);
// });
