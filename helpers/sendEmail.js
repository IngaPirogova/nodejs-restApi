const nodemailer = require("nodemailer");
require("dotenv").config();

const {META_PASSWORD} = process.env;

const nodemailerConfig = {
    host: 'smtp.meta.ua',
    port: 465,
    secure: true,
  auth: {
    user: 'nodajs@meta.ua',
    pass: META_PASSWORD,
  },
}

const transporter = nodemailer.createTransport(nodemailerConfig);
const emailOptions = {
  from: 'nodajs@meta.ua',
  to: 'noresponse@gmail.com',
  subject: 'Новая заявка с сайта',
//   text: 'Привет. Мы тестируем отправку писем!',
html: "<p>С сайта пришла новая заявка</p>"
};

transporter
  .sendMail(emailOptions)
  .then(info => console.log("Email send success"))
  .catch(err => console.log(err.message));