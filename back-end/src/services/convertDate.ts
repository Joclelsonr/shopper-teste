import moment from "moment";

const convertDate = (date: any): string => {
  const toConvert = moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
  return toConvert;
};
export default convertDate;
