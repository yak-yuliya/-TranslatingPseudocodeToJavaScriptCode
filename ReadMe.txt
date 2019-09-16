In this workshop, you'll take sample pseudocode that describes a function for calculating grade point averages and translate it to a working JavaScript program that accurately performs the tasks described.

There are many ways you could program a solution to this challenge. Use your own text editor or the supplied workspace to create a program. You can then watch how I solved this challenge.

The pseudocode:

function calculate_gpa
  pass in student_grades
  set grade_total to 0
  for each grade in student_grades
      if grade is not a 1, 2, 3, or 4
          print "invalid grade"
          print grade
          exit function with "can't complete calculation" message
      else add grade to grade_total
      endif
   endfor
   set gpa to grade_total / number of grades
   return gpa
endfunction

set reggie_grades to 4, 4, 3, 4
print the results of calling calculate_gpa with reggie_grades

set dave_grades to 1, 2, 3, 2
print the results of calling calculate_gpa with dave_grades

You should see the following output in the console:

3.75
2
