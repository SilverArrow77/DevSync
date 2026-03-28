import mongoose from "mongoose";
const projectSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A name is required for the project"],
    },
    description: {
        type: String,
        required: [true, "A description is required for the project"],
    },
    budget: {
        type: Number,
        min: [5, "Budget should be more than 5"],
    },
    deadline: {
        type:Date,
        required: [true, "A specified deadline is required for this project"],
    },
    status: {
        type: String,
        enum: ['OPEN', 'CLOSED'],
        default: 'OPEN',    
    }
});
const Project = mongoose.model("Project", projectSchema);
export default Project;