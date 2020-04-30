// Q10
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here

var grades = [48, 95, 65, 48, 59, 78, 72, 65];
var letterGrades = grades.map((i) => {return myFunction(i)})

function myFunction(grade) {
    // if (grades < 60) {
    //     return ('F')
    // } else if (grades < 70 && grades >= 60) {
    //     return ('D')
    // } else if (grades < 80 && grades >= 70) {
    //     return ('C')
    // } else if (grades < 90 && grades >= 80) {
    //     return ('B')
    // } else if (grades <= 100 && grades >= 90) {
    //     return ('A')
    // } 
    switch (true) {
        case grade < 60:
            return ("F");
            break;
        case grade < 70 && grade >= 60:
            return ("D");
            break; 
        case grade < 80 && grade >= 70:
            return ("C");
            break;
        case grade < 90 && grade >= 80:
            return ("B");
            break; 
        case grade <= 100 && grade >= 90:
            return ("A");
            break;
        default:
            return ("No match found");
    }
}
    console.log(letterGrades);

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well



