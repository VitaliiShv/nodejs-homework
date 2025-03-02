const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD, EMAIL_FROM } = process.env;

const nodemaileConfig = {
    host: "smtp.meta.ua",
    port: 465,
    secure: true,
    auth: {
        user: EMAIL_FROM,
        pass: META_PASSWORD,
    },
};

const transport = nodemailer.createTransport(nodemaileConfig);

const sendEmail = async (data) => {
    const email = { ...data, from: EMAIL_FROM };
    await transport.sendMail(email);
    return true;
};

module.exports = sendEmail;
