export default function updateStudentGradeByCity(arrayList, city, newGrades) {
    return arrayList
    .filter((student) => student.location === city)
    .map((obj) => {
        const targetNewGrade = newGrades.filter(({ studentId }) => studentId === obj.id);
        const { grade = 'N/A' } = targetNewGrade.length > 0 ? targetNewGrade[0] : {};
        return { ...obj, grade };
    });
}