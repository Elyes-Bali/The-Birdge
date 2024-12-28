const express = require("express");
const router = express.Router();
const coursesSchema = require("../models/coursesSchema");

router.post("/create", async (req, res) => {
  try {
    // Get body or Data
    const { title,price,pic } = req.body;


    const createcoursesSchema = new coursesSchema({
        title,price,pic 
    });

    const created = await createcoursesSchema.save();

    res.send({ msg: "Saved succefully" });

    console.log(created);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/allcourses", async (req, res) => {
  try {
    const result = await coursesSchema.find();
    res.status(200).send({ courses: result });
  } catch (error) {
    console.log(error);
  }
});

router.put("/edite/:id", async (req, res) => {
  // console.log(req.body);
  try {
    const result = await coursesSchema.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send("course updated");
  } catch (error) {
    res.status(400).send({ message: "No course with this id" });
  }
});
router.get('/getone/:id', async(req,res)=>{
  // console.log(req.params.id)
  try {
  const result = await coursesSchema.findOne({_id:req.params.id});
  // console.log(result);
  res.status(200).send({ofer : result});
  }catch (error) {
    res.status(400).send({ message: "No course with this id" });
  
}
})

router.delete("/delcourse/:id", async(req,res)=>{
  try {
      const result =await coursesSchema.deleteOne({_id:req.params.id});
   res.status(200).send({msg:"course deleted successfuly"})
  } catch (error) {
     console.log(error);
  }
})
module.exports = router;