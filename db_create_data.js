const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/db-mongoose", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);
// const apple = new Fruit({
//   name: "Apple",
//   rating: 8,
//   review: "Rasanya Manis",
// });

// apple.save(function (error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("berhasil simpan buah apple kedalam database");
//   }
// });

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "Buah yang terbaik",
});

const jeruk = new Fruit({
  name: "Jeruk",
  rating: 5,
  review: "Asam rasanya",
});

const pisang = new Fruit({
  name: "Pisang",
  rating: 6,
  review: "manis dan menyegarkan",
});

Fruit.insertMany([kiwi, jeruk, pisang], function (error) {
  if (error) {
    console.log(error);
  } else {
      mongoose.connection.close();
    console.log("buah kiwi, jeruk dan pisang telah ditambahkan");
  }
});
