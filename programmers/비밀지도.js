function solution(n, arr1, arr2) {
  let temp = [];
  var answer = [];
  arr1.forEach(function (item, idx) {
    arr1[idx] = item.toString(2).padStart(n, "0");
  });
  arr2.forEach(function (item, idx) {
    arr2[idx] = item.toString(2).padStart(n, "0");
  });

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr1[i][j] === "0" && arr1[i][j] === arr2[i][j]) {
        temp.push(" ");
      } else {
        temp.push("#");
      }
    }
    answer.push(temp.join(""));
    temp = [];
  }
  return answer;
}

// 멘토님 풀이
function solution(n, arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    answer[i] = "";
    const map1 = arr1[i].toString(2).padStart(n, "0");
    const map2 = arr2[i].toString(2).padStart(n, "0");
    for (let l = 0; l < map1.length; l++) {
      if (map1[l] === "1" || map2[l] === "1") {
        answer[i] += "#";
      } else {
        answer[i] += " ";
      }
    }
  }
  return answer;
}

// 메서드로 풀어보기
function solution(n, arr1, arr2) {
  const answer = arr1.map((map1, i) => {
    map1 = map1.toString(2).padStart(n, "0");
    const map2 = arr2[i].toString(2).padStart(n, "0");

    return map1
      .split("")
      .map((el) => {
        return el === "1" || map2[l] === "1" ? "#" : " ";
      })
      .join("");
  });
  return answer;
}
