function main() {
  let crs = Classroom.newCourse();
  crs.name = `수퍼클리닉 테스트`;
  crs.section = `수학영역`;
  crs.ownerId = `jh.lee@spira-t.com`;
  Classroom.Courses.create(crs);
  
  
  
  
}


function deleteCourse(){
  
  Classroom.Courses.remove(140078979061);
 }
  
