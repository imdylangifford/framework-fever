const express = require("express");
const mongoose = require("mongoose");
const Courses = require("./models/courses");

const app = express();
app.use(express.json());

mongoose
  .connect(
    "mongodb://dylan:dylan1@ds139480.mlab.com:39480/framework-fever",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(err => console.log(err));

app.get("/courses", (req, res) => {
  Courses.find((err, course) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(course);
  });
});

app.put("/courses/:id", (req, res) => {
  Courses.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, course) => {
      if (err) return res.status(500).send(err);
      return res.send(course);
    }
  );
});

app.post("/courses", (req, res) => {
  const newCourse = new Courses({
    framework: req.body.framework,
    title: req.body.title,
    url: req.body.url,
    price: req.body.price,
    stars: 1
  });

  newCourse.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newCourse);
  });
});

app.listen(5000, () => {
  console.log("Listening on Port 5000");
});
