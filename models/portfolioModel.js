const mongoose = require("mongoose");

const introSchema = new mongoose.Schema({
    welcomeText: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const aboutSchema = new mongoose.Schema({
    lottieUrl: {
        type: String,
        required: true,
    },
    description1: {
        type: String,
        required: true,
    },
    description2: {
        type: String,
        required: true,
    },
    skills: {
        type: Array,
        required: true,
        minlength: 1,
    },
});

const experienceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    period: {
        type: String,
        required: true,
    },
    college: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    technologies: {
        type: Array,
        required: true,
        minlength: 1,
    },
});

const coursesSchema = new mongoose.Schema({
    title: {
        type: Array,
        required: true,
        minlength: 1,
    },
    description: {
        type: Array,
        required: true,
        minlength: 1,
    },
    images: {
        type: Array,
        required: true,
        minlength: 1,
    },
    link: {
        type: Array,
        required: true,
        minlength: 1,
    },
});

const contactSchema = new mongoose.Schema({
    name: {
        type: Array,
        required: true,
        minlength: 1,
    },
    gender: {
        type: Array,
        required: true,
        minlength: 1,
    },
    email: {
        type: Array,
        required: true,
        minlength: 1,
    },
    mobile: {
        type: Array,
        required: true,
        minlength: 1,
    },
    age: {
        type: Array,
        required: true,
        minlength: 1,
    },
    address: {
        type: Array,
        required: true,
        minlength: 1,
    },
});

module.exports = {
    Intro: mongoose.model("intros", introSchema),
    About: mongoose.model("abouts", aboutSchema),
    Experience: mongoose.model("experience", experienceSchema),
    Project: mongoose.model("projects", projectSchema),
    Course: mongoose.model("courses", coursesSchema),
    Contact: mongoose.model("contacts", contactSchema),
};
