export const Days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const timeDifference = Date.now() - (new Date("1980-01-01")).getTime();
const daysDifference = timeDifference / (1000 * 60 * 60 * 24) + 2;
export const WeeksDifference = Math.floor(daysDifference / 7) - 2;
