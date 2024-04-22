export default function appendToEachArrayValue(array, appendString) {
    const valArray = [];
    for (const item of array) {
      valArray.push(appendString + item);
    }
  
    return valArray;
}