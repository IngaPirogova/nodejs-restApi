const {Conflict} = require("http-errors");
const bcrypt = require("bcryptjs");
const {nanoid} = require("nanoid");

const {sendEmail} = require("../../helpers");
const {User} = require("../../models");

const register = async(req, res) => {
    const {name, email, password, subscription} = req.body;
    const user = await User.findOne({email});
    if(user){
        throw new Conflict(`User with ${email} already exist`)
    }
    const verificationToken = nanoid();

    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    const result = await User.create({name, email, subscription, password: hashPassword}, verificationToken);
    console.log(result)

    await result.save();

    const mail = {
        to: email,
        subject: "Подтверждение email",
        html: `<a target="_blank" href="http://localhost:5000/api/users/verify/${verificationToken}">Подтвердить email</a>`
    }
await sendEmail(mail);

    res.status(201).json({
        status: "success",
        code: 201,
        data: {
            user: {
                email,
                name,
                subscription,
                verificationToken,
            }
            
        }
        
    })

}

module.exports = register;