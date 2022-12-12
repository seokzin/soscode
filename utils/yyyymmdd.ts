/**
 * Returns a string in the format of YYYY-MM-DD from the given date
 * @param year - Year
 * @param month - Month
 * @param date - Date
 * @returns String in the format of YYYY-MM-DD
 */

const yyyymmdd = (year: number, month: number, date: number) =>
  `${year}-${String(month).padStart(2, '0')}-${String(date).padStart(2, '0')}`;

export default yyyymmdd;
