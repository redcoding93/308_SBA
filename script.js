
// If an AssignmentGroup does not belong to its course (mismatching course_id), your program should throw an error, letting the user know that the input was invalid. Similar data validation should occur elsewhere within the program.


// You should also account for potential errors in the data that your program receives. What if points_possible is 0? You cannot divide by zero. What if a value that you are expecting to be a number is instead a string? // Use try/catch and other logic to handle these types of errors gracefully (no crashing due to errors)

// If an assignment is not yet due, do not include it in the results or the average. 
// Additionally, if the learner’s submission is late (submitted_at is past due_at), deduct 10 percent of the total points possible from their score for that assignment.

// Create a function named getLearnerData() that accepts these values as parameters, in the order listed: (CourseInfo, AssignmentGroup, [LearnerSubmission]), and returns the formatted result, which should be an array of objects as described above.
//if the asignment is not due, its not part of the grade average



// The provided course information.
//do not change the project data given
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    //do not change
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
        due_at: "3156-11-15",//never due, basically
        points_possible: 500
      }
    ]
  };
  console.log(AssignmentGroup.assignments);
  console.log(AssignmentGroup.assignments['id']);

  // The provided learner submission data.
  const LearnerSubmissions = [
//do not change

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
  //looping over assignment group. How do I access the assignment objects?
  for (const [key, value] of Object.entries(AssignmentGroup)) {
    console.log(`${key}: ${value}`);
  }


    function getLearnerData(course, ag, submissions) {
        // here, we would process this data to achieve the desired result.
        // Our code here, manioulate the data, do not change it
        //Does not have to be in a specific order
        

    //if the assignment is past due then deduct 10%
        if(submitted_at != due_at){
           let late = LearnerSubmissions['score'] * .10;
           console.log(late)

        }
        // graceful error messages
        if (course_id != CourseInfo.id ) {
            throw new Error('Does not match');
          }
          if (points_possible = 0 ) {
            throw new Error('Cannot divide by 0');
          }
        }
        let dueDate = new Date(assignment.due_at);
        let currentDate = new Date();
          if (currentDate > AssignmentGroup['assignments']].due_at){
            //skip assignment if it isn't due
            return;
          }
          //calculate the average score per learner
        let score = function(submission.score, points_possible) {
            return submission.score / points_possible;
            //
            console.log(learner_id)

    }


    //test case: to demonstrate the desired output; not final code
            // here, we would process this data to achieve the desired result.
        // Our code here, manioulate the data, do not change it
        // Does not have to be in a specific order
        function getLearnerData(course, ag, submissions) {
            // here, we would process this data to achieve the desired result.
            //         // here, we would process this data to achieve the desired result.
//         // Our code here, manioulate the data, do not change it
//         //Does not have to be in a specific order
            (CourseInfo, AssignmentGroup, [LearnerSubmission])
        
        //if the assignment is past due then deduct 10%
        function name(submission, due_at) {
            if(submitted_at != due_at){
                let late =  .10;
                console.log(late)
                    return Math.max(submission - (submission * late), 0);
                }
        }
        
            // graceful error messages
            if (course_id != CourseInfo.id ) {
                throw new Error('Does not match');
            }
            if (points_possible = 0 ) {
                throw new Error('Cannot divide by 0');
            }
            
            function weightedAverage(params) {
                
            }

        //let score = function(LearnerSubmission.score, points_possible) {
        return submission.score / points_possible;

        }

    LearnerSubmissions.forEach((LearnerSubmission) => {
        //console.log(LearnerSubmission.score)



    })
          
          //}

          
          const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
          
          console.log(result);
          
        //   Test result
        //   const result = [
        //     {
        //       id: 125,
        //       avg: 0.985, // (47 + 150) / (50 + 150)
        //       1: 0.94, // 47 / 50
        //       2: 1.0 // 150 / 150
        //     },
        //     {
        //       id: 132,
        //       avg: 0.82, // (39 + 125) / (50 + 150)
        //       1: 0.78, // 39 / 50
        //       2: 0.833 // late: (140 - 15) / 150
        //     }
        //   ];