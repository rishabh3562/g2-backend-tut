const User = require("../model/userSchema");

const loginHandler = (req, res) => {

}
const registerHandler = async (req, res) => {
    // 1
    const { name, age, email, password, role } = req.body;

    //3
    let data = new User({
        name: name,
        age: age,
        email: email,
        password: password,
        role: role
    })
    let savedUser = await data.save();

    //4
    res.json({
        success: true,
        data: savedUser
    });

    //5
}

const logoutHandler = (req, res) => {

}

const meHandler = (req, res) => {

}
module.exports = { loginHandler, registerHandler, meHandler, logoutHandler }