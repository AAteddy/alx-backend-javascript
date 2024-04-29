export default function getStudentIdsSum(arrayList) {
    return  arrayList.reduce((sum, student) => sum + parseInt(student.id), 0);
}