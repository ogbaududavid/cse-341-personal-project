const mongodb = require("../db/connect")
const ObjectId = require("mongodb").ObjectId

const SignIn = async (req, res, next) => {
    const result = await mongodb
        .getDb()
        .db()
        .collection("temples")
        .find();
    result.toArray().then((lists) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(lists)
    });
  };

  const SignInWithOauth = async (req, res, next) => {
    const result = await mongodb
        .getDb()
        .db()
        .collection("temples")
        .find();
    result.toArray().then((lists) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(lists)
    });
  };

  module.exports = { SignIn, SignInWithOauth}