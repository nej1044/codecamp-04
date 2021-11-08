function solution(board, moves) {
  var answer = 0;
  const basket = []
  // board의 moves 위치에서 하나 뽑아 basket과 비교하기
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] === 0) {
        continue
      } else {
        if (board[j][moves[i] - 1] === basket[basket.length - 1]) {
          basket.pop()
          answer++
        } else {
          basket.push(board[j][moves[i] - 1])
        }
        board[j][moves[i] - 1] = 0
        break;
      }
    }
  }
  return answer * 2;
}