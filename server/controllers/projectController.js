import Project from "../models/projects.js";

const createProject = async (req, res) => {
    try{
    const newProject = new Project({
        name : req.body.name,
        description: req.body.description,
        budget : req.body.budget,
        deadline: req.body.deadline,
        status: req.body.status,
    })

    const savedProject = await newProject.save();

    res.status(201).json(savedProject);
}
catch(error){
    res.status(400).json(error.message);
}
};
export default createProject;