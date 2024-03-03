const router = require('express').Router();
const { Intro, About, Project, Contact, Education, Course } = require("../models/portfolioModel");
const User = require("../models/userModel");
//api to get whole data
router.get("/get-portfolio-data", async (req, res) => {
    try {
        const intros = await Intro.find();
        const abouts = await About.find();
        const projects = await Project.find();
        const contacts = await Contact.find();
        const educations = await Education.find();
        const courses = await Course.find();

        res.status(200).send({
            intro: intros[0],
            about: abouts[0],
            projects: projects,
            contact: contacts[0],
            educations: educations,
            courses: courses,
        });
    }
    catch (error) {
        res.status(500).send(error);
    }
});

//admin-update-api-intro
router.post("/update-intro", async (req, res) => {
    try {
        const intro = await Intro.findByIdAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: intro,
            success: true,
            message: "Intro Updated Successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

//admin-update-api-about
router.post("/update-about", async (req, res) => {
    try {
        const about = await About.findByIdAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: about,
            success: true,
            message: "About Updated Successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

//admin-add-education-api
router.post("/add-education", async (req, res) => {
    try {
        const education = await Education(req.body);
        await education.save();
        res.status(200).send({
            data: education,
            success: true,
            message: "Education added Successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// update-education
router.post("/update-education", async (req, res) => {
    try {
        const education = await Education.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: education,
            success: true,
            message: "Education updated Successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});
//delete
router.post("/delete-education", async (req, res) => {
    try {
        const education = await Education.findOneAndDelete({ _id: req.body._id });
        res.status(200).send({
            data: education,
            success: true,
            message: "Education deleted Successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Projects

// add-project
router.post("/add-project", async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(200).send({
            data: project,
            success: true,
            message: "Project added Successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// update-project
router.post("/update-project", async (req, res) => {
    try {
        const project = await Project.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: project,
            success: true,
            message: "Project updated Successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// delete-project
router.post("/delete-project", async (req, res) => {
    try {
        const project = await Project.findOneAndDelete({ _id: req.body._id });
        res.status(200).send({
            data: project,
            success: true,
            message: "Project deleted Successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Courses

// add-course
router.post("/add-course", async (req, res) => {
    try {
        const course = new Course(req.body);
        await course.save();
        res.status(200).send({
            data: course,
            success: true,
            message: "Course added Successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// update-course
router.post("/update-course", async (req, res) => {
    try {
        const course = await Course.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: course,
            success: true,
            message: "Course updated Successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// delete-course
router.post("/delete-course", async (req, res) => {
    try {
        const course = await Course.findOneAndDelete({ _id: req.body._id });
        res.status(200).send({
            data: course,
            success: true,
            message: "Course deleted Successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

//update-contact
router.post("/update-contact", async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: contact,
            success: true,
            message: "Contact Updated Successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});


// Admin Login
router.post("/admin-login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username, password: req.body.password });
        user.password = "";
        if (user) {
            res.status(200).send({
                data: user,
                success: true,
                message: "Login Successfully",
            });
        }
        else {
            res.status(200).send({
                data: user,
                success: false,
                message: "Invalid user or password",
            });
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
});
module.exports = router;