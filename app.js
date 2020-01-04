const express = require('express');
const bodyParser = require('body-parser');

var app = express();

// Setting ejs view engine
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('public'));

app.get('/', (req, res) => {

var date = new Date();
var weekday = date.getDay();

var options = { weekday: "long" };
var currentDay = new Intl.DateTimeFormat("en-US", options).format(date);

for(let i = 0; i < 7; i++){
     
     if(weekday === i){
        res.render("list", { kindOfDay: currentDay });
        break;
     }
}

 res.sendFile(__dirname + '/index.html');
});


// Create server port 
app.listen(process.env.PORT || 4000, () => {
 console.log("Server running on port : 4000 ");
})