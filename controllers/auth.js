const dotenv = require("dotenv");
dotenv.config();

const client_id = process.env.OUTH_CLIENT_ID
const client_secret = process.env.OUTH_CLIENT_SECRET


const Oauth = async (req, res, next) => {
    res.redirect(
        `https://github.com/login/oauth/authorize?client_id=${client_id}&client_secret=${client_secret}`
    )
};

const handleCallback = ( {query : {code}}, res) => {
    const body = {
        client_id: client_id,
        client_secret: client_secret,
        code: code
    }
    const opts = {headers: {accept: "application/json"}}

    res.post(`https://github/login/oauth/access_token?client_id=${body.client_id}&client_secret=${body.client_secret}&code=${body.code}`, opts)
    .then((_res) => access_token = _res.data.access_token)
        //eslint-disable-next-line no-console
        console.log('My token: ', access_token)
}

module.exports = {Oauth, handleCallback}