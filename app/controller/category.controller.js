const db = require("../models");
const Category = db.categories;
const Op = db.Sequelize.Op;

exports.create = (req,res) =>{
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty"
        });
        return;
    }

    const category = {
        Id: req.body.Id,
        name: req.body.name,
        type: req.body.type
    };

    Category.create(category)
    .then(data =>{
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message:
            err.message || "Some error in this code"
        });
    });
};

exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${title}%` } } : null;
  
    Category.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "get data for occured error."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Category.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Categories with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving categories with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Category.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "category was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Categories with id=${id}. Maybe category was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating category with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Category.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Category was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Categories with id=${id}. Maybe Category was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Categories with id=" + id
        });
      });
  };