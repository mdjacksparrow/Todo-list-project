const express = require('express');
const bodyParser = require('body-parser');

var app = express();

var items = ["Buy food", "Cook food", "Eat Food"];

// Setting ejs view engine
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('public'));

app.get('/', (req, res) => {

var date = new Date();
var weekday = date.getDay();

var options = { weekday: "long" };
var currentDay = new Intl.DateTimeFormat("en-US", options).format(date);

 res.render("list", { kindOfDay: currentDay, appendItems : items });
}); 

app.post('/', (req,res) => {
 var item = req.body.newItem;

 items.push(item);

 res.redirect('/');
});

// Create server port 
app.listen(process.env.PORT || 4000, () => {
 console.log("Server running on port : 4000 ");
})