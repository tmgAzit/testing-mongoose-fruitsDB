const Mongoose = require('mongoose');
Mongoose.connect('mongodb://localhost:27017/fruitsDB');
console.log('it is running.');

const peopleSchema = new Mongoose.Schema({
  name: String,
  age: Number,
});

const People = Mongoose.model('People', peopleSchema);

const people = new People({
  name: 'Ajit',
  age: 24,
});

people.save();

const fruitSchema = new Mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = Mongoose.model('Fruit', fruitSchema);

// const apple = new Fruit({
//   name: 'Apple',
//   rating: 6,
//   review: 'Yummy',
// });
// const orange = new Fruit({
//   name: 'Orange',
//   rating: 5,
//   review: 'Yummy',
// });
// const mango = new Fruit({
//   name: 'Mango',
//   rating: 8,
//   review: 'Yummy',
// });

// Fruit.insertMany([apple, orange, mango], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('All the fruits are successfully saved.');
//   }
// });

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    // Mongoose.connection.close();
    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});

// Update the record in the collection/ Model
Fruit.updateOne(
  { _id: '61e405a917f32ce1634bfaf4' },
  { name: 'Kiwi' },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Successfully updated!');
    }
  }
);

// Delete the record in the model / collection
Fruit.deleteOne({ name: 'Apple' }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Delete is successfull.');
  }
});

// delete all the records in the model/ collection
Fruit.deleteMany({});
