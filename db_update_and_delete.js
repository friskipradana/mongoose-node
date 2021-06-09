const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/db-mongoose", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Data name tidak ada, please isi ya !!"],
  },
  rating: { type: Number, min: 1, max: 10 },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// Fruit.updateOne({_id:'60c02ce11c568f1451d46992'},{name:'strawberry'}, function(error){
//     if(error){
//         console.log(error);
//     }else {
//         console.log('berhasil update data mangga jadi strawberry ke dalam database')
//     }
// });

Fruit.deleteOne({_id:'60c02ce11c568f1451d46992'}, function(error){
    if(error){
        console.log(error);
    }else {
        console.log('berhasil delete data strawberry ke dalam database')
    }
});

Fruit.find(function (error, fruits) {
    if (error) {
      console.log(error);
    } else {
      mongoose.connection.close();
      console.log(fruits);
      fruits.forEach(function (fruit) {
        console.log(fruit.name);
      });
    }
  });
