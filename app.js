const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Bonjour, monde depuis Node.js!');
});

app.get('/about', (req, res) => {
    res.send('Page À Propos');
});

app.listen(port, () => {
    console.log(`Application en cours d'exécution sur http://localhost:${port}`);
});
   