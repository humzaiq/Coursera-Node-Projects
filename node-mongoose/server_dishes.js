var mongoose = require('mongoose'),
    assert = require('assert');

var Dishes = require('./models/dishes-3');

// Connection URL
var url = 'mongodb://localhost:27017/conFusion';mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");

    // create a new dish
    Dishes.create({
        name: 'Uthapizza',
        image: 'images/uthapizza.png',
        category: 'mains',
        label: 'Hot',
        price: 4.99,
        description: 'Test',
        comments: [
        {
          rating: 5,
          comment: 'Imagine all the eatables, living in conFusion!',
          author: 'John Lemon'
        },
        {
          rating: 4,
          comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
          author: 'Paul McVites'
        }
      ]
    }, function (err, dish) {
        if (err) throw err;
        console.log('Dish created!');
        console.log(dish);

    });
    Leaderships.create({
          "name": "Peter Pan",
          "image": "images/alberto.png",
          "designation": "Chief Epicurious Officer",
          "abbr": "CEO",
          "description": "Our CEO, Peter, . . ."
    }, function (err, leadership) {
        if (err) throw err;
        console.log('Leadership created!');
        console.log(leadership);

    });
    Promotions.create({
          "name": "Weekend Grand Buffet",
          "image": "images/buffet.png",
          "label": "New",
          "price": "19.99",
          "description": "Featuring . . ."
    }, function (err, dish) {
        if (err) throw err;
        console.log('Promotion created!');
        console.log(promotion);

    });
});