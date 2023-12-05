module.exports = app =>{
    const categories = require("../controller/category.controller.js");

    var router = require("express").Router();

    router.post("/", categories.create);

    router.get("/", categories.findAll);

    router.get("/show", categories.findAllPublished);

    router.get("/:id", categories.findOne);

    router.put("/:id", categories.update);

    router.delete("/:id", categories.delete);

    app.use('/api/categories', router)
}