// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
//   let y = AssignmentGroup.assignments[2].points_possible;
//   console.log(y);
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];

  
    //    = AssignmentGroup.assignments[2].points_possible 
    //   let y = LearnerSubmissions[4].submission['score'];

//Attempting to calculate the weighted average per student id    
//Calculates the course average for student 125
  function ag1(x,y,z) {
    console.log("student_id:" + LearnerSubmissions[0].learner_id)
    //console.log(y);
     y = LearnerSubmissions[0].submission['score'] / AssignmentGroup.assignments[0].points_possible 
     ; // 47
     a = LearnerSubmissions[1].submission['score']; // 150
     b = LearnerSubmissions[2].submission['score']; // 400


     z = AssignmentGroup.group_weight;
     return "1:" + y;
    //return ((a+b) / x) * z;
    //console.log(x);
    //console.log(x/y);
  }
  console.log(ag1());
  //Calculates the course average for student 132

  function ag2(x,y,z) {
    console.log("student_id:" + LearnerSubmissions[3].learner_id)
    c = LearnerSubmissions[3].submission['score'] / AssignmentGroup.assignments[0].points_possible; // 39 / 50
   //console.log(y);
    d = LearnerSubmissions[4].submission['score'] / AssignmentGroup.assignments[1].points_possible; // 140/160
    z = AssignmentGroup.group_weight;
   //return (x/y) * z;
   return "1:" + c;
   return c+d / 200;
   return d;
   //console.log(x);
   //console.log(x/y);
 }
 console.log(ag2());

   //Calculates the course average for student 3

  //as as it looks like the output in the example it  doesn't matter how it gets there
  //console.log(average);


//if id = x, console.log(y);
//   console.log(Object.keys(AssignmentGroup.assignments));
//   console.log(Object.values(AssignmentGroup.assignments));
//   for (const key of Object.keys(AssignmentGroup.assignments)) {
//         console.log(`${key} => ${AssignmentGroup[key]}`);    
 // }

    //if the assignment is past due then deduct 10%
    if(LearnerSubmissions.submitted_at != AssignmentGroup. assignments.due_at){
        let late = LearnerSubmissions['score'] * .10;
        console.log(late)

     }
     // graceful error messages
     
     //throws an error when there is a course_id mismatch
     if (AssignmentGroup.course_id != CourseInfo.id ) {
         throw new Error('Does not match');
       }
       //throws an error when dividinf by zero for points possible
       if (points_possible = 0 ) {
         throw new Error('Cannot divide by 0');
       }

       let dueDate = new Date(AssignmentGroup.assignments.due_at);
       let currentDate = new Date();
         if (currentDate > AssignmentGroup.assignments.due_at){
           //skip assignment if it isn't due
           return;
         }
     
  function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
//attempting to push the functions ag1 and ag2 into an object within an array
  let array = [];
  if (ag1 || ag2){
	array.push([ag1, ag2]);
}

console.log(array)
    //return the average scores per assignment for each student
    return ag1
    return ag2
  
  }
  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  //console.log(result);
  
//   let arrayOfObj = [
//     {id: "1", name: "mary", age:25 },
//     {id: "2", name: "leo", age:24 },
//     {id: "3", name: "zach", age:3 },
//     {id: "4", name: "lucky", age:2 }
//   ]
// let a = (arrayOfObj[1].age)
// let b = (arrayOfObj[3].age)
//   //console.log(arrayOfObj[1].age);
//   console.log(b);
//   console.log(a/b);
