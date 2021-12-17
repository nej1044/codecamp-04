function solution(numbers, hand) {
  var answer = "";

  let center = [2, 5, 8, 11];
  let location_L = 10;
  let location_R = 12;
  let dist_L = 0;
  let dist_R = 0;

  for (let i = 0; i < numbers.length; i++) {
    let val = numbers[i];
    if (numbers[i] == 0) {
      val = 11;
    }
    if (val == 1 || val == 4 || val == 7) {
      answer += "L";
      location_L = val;
    } else if (val == 3 || val == 6 || val == 9) {
      answer += "R";
      location_R = val;
    } else {
      dist_L =
        center.indexOf(location_L) != -1
          ? Math.abs(val - location_L) / 3
          : Math.abs(val - 1 - location_L) / 3 + 1;
      dist_R =
        center.indexOf(location_R) != -1
          ? Math.abs(val - location_R) / 3
          : Math.abs(val + 1 - location_R) / 3 + 1;

      if (dist_L == dist_R) {
        if (hand == "right") {
          answer += "R";
          location_R = val;
        } else {
          answer += "L";
          location_L = val;
        }
      } else if (dist_L > dist_R) {
        answer += "R";
        location_R = val;
      } else {
        answer += "L";
        location_L = val;
      }
    }
  }
  return answer;
}

// 멘토님 풀이
const [leftNumbers, rightNumbers] = [
  [1, 4, 7],
  [3, 6, 9],
];

function solution(numbers, hand) {
  let answer = "";

  const current = {
    left: 10, // *
    right: "#", // #
  };

  for (let i = 0; i < numbers.length; i++) {
    if (leftNumbers.includes(numbers[i])) {
      // 누를 번호가 왼쪽 키패드 번호에 해당하는 경우( = 왼쪽 손가락으로 누르는 경우)
      answer += "L";
      current["left"] = numbers[i];
    } else if (rightNumbers.includes(numbers[i])) {
      // 누를 번호가 오른쪽 키패드 번호에 해당하는 경우 ( = 오른쪽 손가락으로 누르는 경우)
      answer += "R";
      current["right"] = numbers[i];
    } else {
      // 누를 번호가 가운데 키패드 번호에 해당하는 경우
      const centerObj = { ...current };
      for (let key in centerObj) {
        numbers[i] = numbers[i] === 0 ? 11 : numbers[i];
        let location = Math.abs(numbers[i] - centerObj[hand]);
        if (location >= 3) {
          location = Math.trunc(location / 3) + (location % 3);
        }
        centerObj[hand] = location;
      }
      if (centerObj["left"] === centerObj["right"]) {
        // 왼쪽 손가락의 위치와 오른쪽 손가락의 위치가 같을 때
        // 주로 사용하는 손가락으로 키패드를 누른다.
        answer += hand === "left" ? "L" : "R";
        current[hand] = numbers[i];
      } else {
        if (centerObj["left"] > centerObj["right"]) {
          // 오른쪽 손가락이 더 가까운 경우
          answer += "R";
          current["right"] = numbers[i];
        } else {
          // 왼쪽 손가락이 더 가까운 경우
          answer += "L";
          current["left"] = numbers[i];
        }
      }
    }
  }
}

// 메서드로 풀어보기
const [leftNumbers, rightNumbers] = [
  [1, 4, 7],
  [3, 6, 9],
];

function solution(numbers, hand) {
  const current = {
    left: 10, // *
    right: 12, // #
  };

  const answer = numbers
    .map((num) => {
      if (leftNumbers.includes(num)) {
        current["left"] = num;
        return "L";
      } else if (rightNumbers.includes(num)) {
        current["right"] = num;
        return "R";
      } else {
        const centerObj = { ...current };
        Object.entries(centerObj).forEach((el) => {
          const hand = el[0];
          num = num === 0 ? 11 : num;
          let location = Math.abs(num - el[i]);

          if (location > 2) {
            location = Math.trunc(location / 3) + (location % 3);
          }
          centerObj[hand] = location;
        });
        if (centerObj["left"] === centerObj["right"]) {
          current[hand] = num;
          return hand === "right" ? "R" : "L";
        } else {
          if (centerObj["left"] > centerObj["right"]) {
            current["right"] = num;
            return "R";
          } else {
            current["left"] = num;
            return "L";
          }
        }
      }
    })
    .join("");
  return answer;
}
