const mongoose = require("mongoose");
const {Schema} = mongoose;

const ModuleSchema =new Schema({
    module_name: { type:String, required: true},
    content: { type : String, required :true},
    quiz : { type:Schema.Types.ObjectId, ref: "Quiz", required: false},

});

module.exports = mongoose.model('Module', ModuleSchema);