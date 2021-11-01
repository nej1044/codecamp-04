function days(month) {
  if (month === 2) {
    console.log('28')
  } else if (month <= 7) {
    if (month % 2 === 0) {
      console.log('30')
    } else {
      console.log('31')
    }
  } else {
    if (month % 2 === 0) {
      console.log('31')
    } else {
      console.log('30')
    }
  }
}