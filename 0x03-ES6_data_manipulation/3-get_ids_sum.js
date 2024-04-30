export default function getStudentIdsSum(arrayList) {
  return arrayList.reduce((sum, student) => sum + student.id, 0);
}
