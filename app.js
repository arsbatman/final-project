const express = require('express');
const { link } = require('fs');
const path = require('path')
const app = express();

app.set('port', 3000 || process.env.PORT)

app.use(express.static('home'))
app.use(express.static('aboutteam'))
app.get('/', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname + '/home/index.html'));
})

app.get('/about', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname + '/aboutteam/AboutUs.html'));
})
app.get('/photo', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname + '/aboutteam/team.png'));
})
app.get('/video', function (req, res) {
  res.statusCode = 302;
  res.setHeader("Location", "https://www.youtube.com/watch?v=yXS8iNKqsCM&ab_channel=RLFComps");
  res.end();
});
app.use((req, res) =>{
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
    });

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.type("text/plain");
    res.status(500);
    res.send("500 - Internal Error")
})

app.listen(app.get('port'), () => {
    console.log(`Express server on localhost${app.get('port')}; Press CTRL+C to terminate`)
})