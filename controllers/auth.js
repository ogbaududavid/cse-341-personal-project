const dotenv = require("dotenv");
dotenv.config();

const client_id = process.env.OUTH_CLIENT_ID
const client_secret = process.env.OUTH_CLIENT_SECRET


const Oauth = async (req, res, next) => {
    res.redirect(
        `https://github.com/login/oauth/authorize?client_id=${client_id}&client_secret=${client_secret}`
    )
};

// const handleCallback = ( req, res) => {
   
//     const code = req.query.code
//     const opts = {headers: {accept: "application/json"}}

//     // res.post(`https://github/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${code}`, opts)
//     // .then((_res) => access_token = _res.data.access_token)
//     //     console.log('My token: ', access_token)
//     //     res.redirect('/success')
// }

const handleSuccess = (req, res) => {
    const opts = {headers: {Authorization: 'token ' + access_token}}
    res.get(`https://api.github.com/user`, opts )
    console.log(response.data)
}

module.exports = {Oauth, handleCallback, handleSuccess}