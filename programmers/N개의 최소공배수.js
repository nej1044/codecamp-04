function solution(arr) {
  const biggest = Math.max(...arr);

  let sum = biggest;
  while (true) {
    let check = true;
    for (let i = 0; i < arr.length; i++) {
      if (sum % arr[i] !== 0) {
        check = false;
        break;
      }
    }
    if (check) {
      return sum;
    }
    sum += biggest;
  }
}
