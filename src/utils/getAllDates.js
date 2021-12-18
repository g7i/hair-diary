const getDatesBetweenDates = (startDate, endDate) => {
  let dates = [];
  let listDate = [null, null];

  const theDate = new Date(startDate);
  while (theDate < new Date(endDate)) {
    listDate.push(new Date(theDate));
    theDate.setDate(theDate.getDate() + 1);
    if (listDate.length === 7) {
      dates.push(listDate);
      listDate = [];
    }
  }
  dates.push([...listDate, new Date(endDate)]);
  return dates;
}

export const getAllDates = () => getDatesBetweenDates("1980-01-01", "2050-12-31");
