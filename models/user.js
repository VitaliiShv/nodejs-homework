const { Schema, model } = require("mongoose");

const Joi = require("joi");

const { handleMongooseError } = require("../utils");

emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema(
    {
        password: {
            type: String,
            required: [true, "Password is required"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
        },
        subscription: {
            type: String,
            enum: ["starter", "pro", "business"],
            default: "starter",
        },
        token: {
            type: String,
            default: null,
        },
        avatarURL: String,
        verify: {
            type: Boolean,
            default: false,
        },
        verificationToken: {
            type: String,
            required: [true, "Verify token is required"],
        },
    },
    { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required(),
});

const emailSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
});

const loginSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required(),
});

const schemas = {
    registerSchema,
    loginSchema,
    emailSchema,
};

const User = model("user", userSchema);

module.exports = { User, schemas };
