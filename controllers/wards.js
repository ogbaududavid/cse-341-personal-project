const mongodb = require("../db/connect")
const ObjectId = require("mongodb").ObjectId

const getAll = async (req, res, next) => {
    const result = await mongodb
        .getDb()
        .db()
        .collection("wards")
        .find();
    result.toArray().then((lists) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(lists)
    });
};

const getSingle = async (req, res, next) => {
    const wardId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db()
      .collection("wards")
      .find({ _id: wardId });
    result.toArray().then((lists) => {
      res.status(200).json(lists);
    });
  };

const createWard = async (req, res) => {
  const ward = {
    wardName: req.body.wardName,
    address: req.body.address,
    bishopName: req.body.bishopName,
    stake: req.body.stake
  };

  const response = await mongodb
  .getDb()
  .db()
  .collection("wards")
  .insertOne(ward);

  if (response.acknowledged) {
    res.status(201).json(response)
  } else {
    res.status(500).json(response.error || 'Some error occured while entering the ward details.')
  }
};

const updateWard = async (req, res) => {
  const wardId = new ObjectId(req.params.id);

  const ward = {
    wardName: req.body.wardName,
    address: req.body.address,
    bishopName: req.body.bishopName,
    stake: req.body.stake
  };

  const response = await mongodb
  .getDb()
  .db()
  .collection('wards')
  .replaceOne({_id: wardId}, ward);
  if(response.modifiedCount > 0){
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occured while updating the ward.')
  }
};


const deleteWard = async(req, res) => {
  console.log('im here')
  const wardId = new ObjectId(req.params.id)
  const response = await mongodb
  .getDb()
  .db()
  .collection('wards')
  .deleteMany({_id: wardId}, true);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occured while deleting the ward.')
  }
};

module.exports = {getAll, getSingle, createWard, updateWard, deleteWard}