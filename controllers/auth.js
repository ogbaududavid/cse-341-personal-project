const dotenv = require("dotenv");
dotenv.config();

const client_id = process.env.OUTH_CLIENT_ID
const client_secret = process.env.OUTH_CLIENT_SECRET

const Oauth = async (req, res, next) => {
    res.redirect(
        `https://github.com/login/oauth/authorize?client_id=${client_id}&client_secret=${client_secret}`
    )
};

const handleCallback = async ( {query : {code}}, res) => {
    const body = {
        client_id: client_id,
        client_secret: client_secret,
        code
    }
    routes.post(`https://github/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}`, body, {headers: {accept: 'application/json'}})
    .then((_res) => _res.data.access.token)
    .then((token) => {
        console.log('My token: ', token)
        res.redirect(`/?token=${token}`)
    })
}

module.exports = {Oauth, handleCallback}