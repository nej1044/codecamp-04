function solution(numbers, hand) {
  var answer = '';

  let center = [2,5,8,11]
  let location_L = 10;
  let location_R = 12;
  let dist_L = 0;
  let dist_R = 0;

  for(let i = 0 ; i < numbers.length; i++){

      let val = numbers[i]
      if (numbers[i] == 0 ){
          val = 11;
      }
      if ( val == 1 || val == 4 || val == 7){
          answer += 'L';
          location_L =  val;
      } else if (val == 3 || val == 6 || val == 9){
          answer += 'R';
          location_R =  val;
      } else{
          dist_L = center.indexOf(location_L) != -1 ? Math.abs(val - location_L ) /3 : Math.abs(val-1 - location_L ) /3 +1;
          dist_R = center.indexOf(location_R) != -1 ? Math.abs(val - location_R ) /3 : Math.abs(val+1 - location_R ) /3 +1;

          if (dist_L == dist_R){
              if (hand == "right"){
                  answer += 'R'
                  location_R = val;
              } else{
                   answer += 'L'
                  location_L = val;   
              } 
          } else if(dist_L > dist_R) {
              answer += 'R'
               location_R = val;
          } else{
              answer += 'L'
              location_L = val;
          }
      }

  }
  return answer;
}