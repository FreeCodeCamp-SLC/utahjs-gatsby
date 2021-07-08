function calculateMonthName(month) {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return monthNames[month - 1];
}

function calculateDayOfWeek(day) {
  const weekNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return weekNames[day];
}

function convertDate(startingDateTime) {
  const [month, date, year] = startingDateTime.toLocaleDateString().split('/');
  const monthName = calculateMonthName(month);
  const weekdayName = calculateDayOfWeek(startingDateTime.getDay());
  return `${weekdayName}, ${monthName} ${date}, ${year}`;
}

function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}

function convertTime(startingDateTime, duration) {
  const endingDateTime = addMinutes(startingDateTime, duration);
  let startingHour = startingDateTime.getHours();
  let endingHour = endingDateTime.getHours();
  const startingMinute = startingDateTime.getMinutes();
  const endingMinute = endingDateTime.getMinutes();
  if (startingHour > 12) {
    startingHour -= 12;
  }
  if (endingHour > 12) {
    endingHour -= 12;
  }
  let startingTime = '';
  let endingTime = '';
  if (startingMinute !== 0) {
    startingTime = `${startingHour}:${startingDateTime.getMinutes()}`;
  } else {
    startingTime = startingHour;
  }
  if (endingMinute !== 0) {
    endingTime = `${endingHour}:${endingDateTime.getMinutes()}`;
  } else {
    endingTime = endingHour;
  }
  const startingTimeString = `${startingTime}${
    startingDateTime.getHours() < 12 ? 'am' : 'pm'
  }`;
  const endingTimeString = `${endingTime}${
    endingDateTime.getHours() < 12 ? 'am' : 'pm'
  }`;
  return `from ${startingTimeString}-${endingTimeString} Mountain`;
}

export default function returnDateTime(dateTime, duration) {
  const startingDateTime = new Date(dateTime);
  const dateAndTime = {
    date: '',
    time: '',
  };
  dateAndTime.date = convertDate(startingDateTime);
  dateAndTime.time = convertTime(startingDateTime, duration);
  return dateAndTime;
}

