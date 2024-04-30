export default function getListStudentIds(arrayList) {
  return Array.isArray(arrayList) ? arrayList.map((item) => item.id) : [];
}
