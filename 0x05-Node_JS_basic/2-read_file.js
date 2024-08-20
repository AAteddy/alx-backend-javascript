const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    let totalStudents = 0;
    const studentsByField = {};

    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i];
      const studentData = line.split(',');

      if (studentData.length !== 4) {
        continue;
      }

      const field = studentData[3].trim();
      const firstname = studentData[0].trim();

      totalStudents += 1;

      if (!studentsByField[field]) {
        studentsByField[field] = {
          count: 0,
          names: [],
        };
      }

      studentsByField[field].count += 1;
      studentsByField[field].names.push(firstname);
    }

    console.log(`Number of students: ${totalStudents}`);

    for (const field in studentsByField) {
      if (studentsByField.hasOwnProperty(field)) {
        const { count, names } = studentsByField[field];
        console.log(`Number of students in ${field}: ${count}. List: ${names.join(', ')}`);
      }
    }
  } catch (error) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
