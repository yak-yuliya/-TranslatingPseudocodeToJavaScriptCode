function calculate_gpa(student_grades) {
  let grade_total = 0;
  let num_of_grades = student_grades.length;
  for (let i = 0; i < num_of_grades; i++) {
    let grade = student_grades[i]; //we store a current grade from an array
    if (i < 1 || i > 4) {
      console.log("invalid grade: " + grade);
      return "Can´t complete calculation";
    } else {
      grade_total += student_grades[i];
    }
  }
  gpa = grade_total / num_of_grades;
  return gpa;
}

let reggie_grades = [4, 4, 3, 4];
console.log(calculate_gpa(reggie_grades));

let dave_grades = [1, 2, 3, 2];
console.log(calculate_gpa(dave_grades));


// You should see the following output in the console:
//
// 3.75
// 2
