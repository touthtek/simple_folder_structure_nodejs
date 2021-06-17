const studentData = [
    {
      name : 'tosin',
      id : 1
  },
  {
      name : 'shola',
      id : 2
  },
  {
      name : 'ola',
      id : 3
  }
  ];

class StudentReporsitory{

  static getallStudent()
  {
    return studentData;
  }

  static getallStudentById(Id)
  {
    var studentId = parseInt(Id);
    return studentData.find(a => a.id === studentId);
  }

}

module.exports = StudentReporsitory;