export const getDate = (myDate) => {
  const date = new Date(myDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};
