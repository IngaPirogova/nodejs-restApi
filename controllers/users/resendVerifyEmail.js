const {NotFound} = require("http-errors")
const {User} = require("../../models");
const {sendEmail} = require("../../helpers");

const resendVerifyEmail = async(req, res) => {
    const {email} = req.body;
    const user = await User.findOne({email});
     if(!user){
         throw NotFound("Email not found");
     }
     if(user.verify){
         throw NotFound("Email already verify");
     }
     const mail = {
        to: email,
        subject: "Verify email",
        html: `<a target="_blank" href="http://localhost:5000/api/users/verify/${user.verificationToken}">Подтвердить email</a>`
    }
    await sendEmail(mail);

    res.json({
        message: "Verify email send success"
    })
    }


module.exports = resendVerifyEmail;


