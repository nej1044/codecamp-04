function solution(board, moves) {
  var answer = 0;
  const basket = [];
  // board의 moves 위치에서 하나 뽑아 basket과 비교하기
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] === 0) {
        continue;
      } else {
        if (board[j][moves[i] - 1] === basket[basket.length - 1]) {
          basket.pop();
          answer++;
        } else {
          basket.push(board[j][moves[i] - 1]);
        }
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }
  return answer * 2;
}

// 멘토님 풀이
function solution(board, moves) {
  let answer = 0;
  const bucket = [];

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const doll = board[i][moves[i] - 1];

      if (doll !== 0) {
        board[i][moves[i] - 1] = 0;
        if (buket[bucket.length - 1] === doll) {
          answer += 2;
          bucket.splice([bucket.length - 1], 1);
          break;
        }
      }
      bucket.push(doll);
      break;
    }
  }
  return answer;
}

// 메서드로 풀어보기
function solution(board, moves) {
  let answer = 0;
  const bucket = [];

  moves.forEach((move) => {
    board.forEach((location) => {
      let check = false;
      const doll = location[move - 1];
      if (check === false) {
        if (doll !== 0) {
          location[move - 1] = 0;
          if (bucket[bucket.length - 1] === 0) {
            answer += 2;
            bucket.splice(bucket.length - 1, 1);
          } else {
            bucket.push(doll);
          }
          check = true;
        }
      }
    });
  });
}
