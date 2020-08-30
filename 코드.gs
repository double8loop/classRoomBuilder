function main() {
  // 1. get the courses from the spreadsheet
  const courses = getCoursesFromSpreadsheet();
  
  // 2. create the courses on the classroom
  courses.forEach(course => {
    const resource = createCourseResource(course);
    console.log(resouce);
    });

  
  
}
