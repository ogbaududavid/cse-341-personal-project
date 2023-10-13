const mongodb = require("../db/connect")
const ObjectId = require("mongodb").ObjectId

const getAll = async (req, res, next) => {
  const result = await mongodb
      .getDb()
      .db()
      .collection("temples")
      .find();
  result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists)
  console.log(result)
  });
};

const getSingle = async (req, res, next) => {
    const templeId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db()
      .collection("temples")
      .find({ _id: templeId });
    result.toArray().then((lists) => {
      res.status(200).json(lists);
    });
  };

const createTemple = async (req, res) => {
  const temple = {
    templeName: req.body.templeName,
    country: req.body.country,
    state_region_province: req.body.state_region_province,
    street: req.body.street,
    announced: req.body.announced,
    groundBreaking: req.body.groundBreaking,
    dedicated: req.body.dedicated,
    telephone: req.body.telephone
  };

  const response = await mongodb
  .getDb()
  .db()
  .collection("temples")
  .insertOne(temple);

  if (response.acknowledged) {
    res.status(201).json(response)
  } else {
    res.status(500).json(response.error || 'Some error occured while entering the temple details.')
  }
};

const updateTemple = async (req, res) => {
  const templeId = new ObjectId(req.params.id);

  const temple = {
    templeName: req.body.templeName,
    country: req.body.country,
    state_region_province: req.body.state_region_province,
    street: req.body.street,
    announced: req.body.announced,
    groundBreaking: req.body.groundBreaking,
    dedicated: req.body.dedicated,
    telephone: req.body.telephone
  };

  const response = await mongodb
  .getDb()
  .db()
  .collection('temples')
  .replaceOne({_id: templeId}, temple);
  if(response.modifiedCount > 0){
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occured while updating the contact.')
  }
};


const deleteTemple = async(req, res) => {
  const templeId = new ObjectId(req.params.id)
  const response = await mongodb
  .getDb()
  .db()
  .collection('temples')
  .deleteMany({_id: templeId}, true);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occured while deleting the temple.')
  }
};

module.exports = {getAll, getSingle, createTemple, updateTemple, deleteTemple}