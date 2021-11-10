export const getDate=(myDate)=>{
  const date = new Date(myDate)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `${year}-${month}-${day}`}