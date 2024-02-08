const router = require("express").Router();
const Category = require("../models/Category");

router.post("/", async (req, res) => {
  try {
    const newCat = new Category(req.body);
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (err) {
    console.error("Error adding category:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:categoryId", async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.categoryId);
    if (!deletedCategory) {
      return res.status(404).json({ error: "Category not found" });
    }
    const updatedCategories = await Category.find();
    res.status(200).json(updatedCategories);
  } catch (err) {
    console.error("Error deleting category:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const cats = await Category.find();

    if (cats.length === 0) {
      // Handle the case where no categories are found
      return res.status(404).json({ error: "No categories found" });
    }

    res.status(200).json(cats);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
