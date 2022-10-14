const dateDB = (date: string) => {
  const newDate = new Date(date);
  const day = newDate.getDate().toString().padStart(2, "0");
  const month = String(newDate.getMonth() + 1).padStart(2, "0");
  const year = newDate.getFullYear().toString();

  return `${year}-${month}-${day}`;
};
export default dateDB;
