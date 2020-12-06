export async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

export function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}