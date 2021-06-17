const studentService = require('../service/studentservice');


class StudentController{

static getAllStudent(req,res){
  return studentService.getAllStudent(req,res);
  }

static getallStudentById(req,res){
  console.log('result',req);
  return studentService.getallStudentById(req,res);
  }
  

}

module.exports = StudentController;

