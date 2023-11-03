const dotenv = require("dotenv");
dotenv.config();
const express = require('express');
const routes = express.Router()

// const client_id = process.env.OUTH_CLIENT_ID
// const client_secret = process.env.OUTH_CLIENT_SECRET
const client_id = "e58be3ad5edbe4b89857"
const client_secret = "64461404b9d57c2f9c6bad2ad6b9d3cc7347d8a4"


const Oauth = async (req, res, next) => {
    res.redirect(
        `https://github.com/login/oauth/authorize?client_id=${client_id}&client_secret=${client_secret}`
    )
};

const handleCallback = async ( {query : {code}}, res) => {
    const body = {
        client_id: client_id,
        client_secret: client_secret,
        query
    }
    // routes.post('https://github/login/oauth/access_token', body, {headers: {accept: 'application/json'}})
    // .then((_res) => _res.data.access_token)
    // .then((token) => {
    //     //eslint-disable-next-line no-console
    //     console.log('My token: ', token)

    //     res.redirect(`/?token=${token}`)
    // })
    routes.post(`https://github/login/oauth/access_token?client_id=${body.client_id}&client_secret=${body.client_secret}&code=${body.query}`, {headers: {accept: 'application/json'}})
    .then((_res) => _res.access_token)
    .then((token) => {
        //eslint-disable-next-line no-console
        console.log('My token: ', token)

        res.redirect(`/?token=${token}`)
    })
}

module.exports = {Oauth, handleCallback}