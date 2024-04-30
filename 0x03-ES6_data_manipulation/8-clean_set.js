export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof (startString) !== 'string') {
    return '';
  }
  return [...set]
    .filter((element) => element && element.startsWith(startString))
    .map((str) => str.replace(startString, ''))
    .join('-');
}
