const User = require("../model/userSchema");

const loginHandler = async (req, res) => {
    const { email, password } = req.body; //
    if (!email || !password) {
        return res.json({
            success: false,
            message: "missing fields"
        })
    }
    let user = await User.findOne({ email });
    if (!user) {
        return res.json({
            success: false,
            message: "user does not exist"
        })
    }

    let isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return res.json({
            success: false,
            message: "invalid credentials"
        })
    }


    // jwt generate
    let payload = { _id: user._id, role: user.role }
    let token = generateToken(payload);

    res.json({
        success: true,
        message: "user logged in successfully",
        token,
        data: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        }
    })

}
const registerHandler = async (req, res) => {
    try {
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
    } catch (err) {
        res.json({
            success: false,
            error: err.message
        });
    }
}

const logoutHandler = (req, res) => {

}

const meHandler = (req, res) => {

}
module.exports = { loginHandler, registerHandler, meHandler, logoutHandler }