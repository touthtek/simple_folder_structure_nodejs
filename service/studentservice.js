const studentRepo = require('../repository/studentrepository');

class StudentService{

  static getAllStudent(req, res){
    const data = studentRepo.getallStudent();
    console.log(data);
    return res.json(data);
  }
  static getallStudentById(req,res){
    let Id = req.params.id;
    let data = studentRepo.getallStudentById(Id);
    if(data == undefined)
    return res.status(404).json({
      message : 'record not found'
    });
    return res.status(200).json(data);
  }
}

module.exports = StudentService;