export default function getStudentsByLocation(arrayList, city) {
    return arrayList.filter((student) => student.location === city);
}