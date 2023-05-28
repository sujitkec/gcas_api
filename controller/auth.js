const User = require('../model/user')
const bcrypt = require('bcrypt')

module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        var existinguser = await User.findOne({ email })
        if (!existinguser) {
            console.log("User not found...");
            return res.status(404).json("User not found...")
        }
        const isPasswordCrt = await bcrypt.compare(password, existinguser.password)
        if (!isPasswordCrt) {
            return res.status(400).json("Password Incorrect")
        }
        res.status(200).json(existinguser)
    } catch (err) {
        console.log(err.message)
        res.status(500).json(err.message)
    }
}
