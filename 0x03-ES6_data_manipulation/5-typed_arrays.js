export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const valInt8Array = new Int8Array(length);
  valInt8Array.fill(value, position, position + 1);
  return new DataView(valInt8Array.buffer);
}
