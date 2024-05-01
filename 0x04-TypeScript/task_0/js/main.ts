// define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// create two student objects
const studentOne: Student = {
    firstName: "Kobbie",
    lastName: "Mainoo",
    age: 19,
    location: "Manchester"
}

const studentTwo: Student = {
    firstName: "Garnacho",
    lastName: "Alejandro",
    age: 20,
    location: "Argentina"
}

// create an array of students
const studentsList = [studentOne, studentTwo];

// create a table using Vanilla JavaScript
const table = document.getElementById('studentTable') as HTMLTableElement;

// create a new row for each student and append it to the table
studentsList.forEach((student) => {
    const  row = table.insertRow();
    const firstNameCell = row.insertCell(0);
    const locationCell = row.insertCell(1);

    firstNameCell.innerHTML = student.firstName;
    locationCell.innerHTML = student.location;
})