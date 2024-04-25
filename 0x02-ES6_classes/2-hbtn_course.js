export default class HolbertonCourse {
    constructor(name, length, students) {
        this._name = name;
        this._length = length;
        this._students = students;
    }

    set name(newName) {
        if (typeof newName !== 'string') throw Error('Name must be a string');
        else this._name = newName;
    }
    set length(newLength) {
        if (typeof newLength !== 'number') throw Error('Length must be a number');
        else this._length = newLength;
    }
    set students(newStudents) {
        if (typeof newStudents !== 'Array')  throw Error('Students must be an array' );
        else this._students =  newStudents;
    }

    get name() {
        return this._name;
    }
    get length() {
        return this._length;
    }
    get students() {
        return this._students;
    }

}