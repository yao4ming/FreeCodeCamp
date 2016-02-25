function monthName(month) {
  switch (month) {
    case 1 : return "January";
    case 2 : return "February";
    case 3 : return "March";
    case 4 : return "April";
    case 5 : return "May";
    case 6 : return "June";
    case 7 : return "July";
    case 8 : return "August";
    case 9 : return "September";
    case 10 : return "October";
    case 11 : return "November";
    case 12 : return "December";
    default : alert("Not a month");
  }
}

function ordinalDay(day) {
  
  if (day.charAt(0) === '0') day = day.substring(1);
  
  switch (day) {
    case '1' : return day + "st";
    case '2' : return day + "nd";
    case '3' : return day + "rd";
    default : return day + "th"; 
  }
}

function friendly(arr) {
  var range = [];
  var startDate = arr[0];
  var endDate = arr[1];
  
  var startYear = parseInt(startDate.split("-")[0]);
  var startMonth = parseInt(startDate.split("-")[1], 10);
  var startDay = startDate.split("-")[2];
  
  var endYear = parseInt(endDate.split("-")[0]);
  var endMonth = parseInt(endDate.split("-")[1], 10);
  var endDay = endDate.split("-")[2];
  
  //few Days apart
  if (endYear === startYear && endMonth === startMonth && endDay > startDay) {
    startDate = monthName(startMonth) + " " + ordinalDay(startDay);
    endDate = ordinalDay(endDay);
  }
  //less than 1 year apart
  else if (endYear === startYear + 1 && endMonth < startMonth) {
    startDate = monthName(startMonth) + " " + ordinalDay(startDay);
    endDate = monthName(endMonth) + " " + ordinalDay(endDay);
  } 
  //less than 1 year apart and on same month OR less than 1 year apart and on same year
  else if ((endYear === startYear + 1 && endMonth === startMonth && endDay < startDay) || endYear === startYear && endMonth > startMonth) {
    startDate = monthName(startMonth) + " " + ordinalDay(startDay) + ", " + startYear;
    endDate = monthName(endMonth) + " " + ordinalDay(endDay);
  } 
  //more than 1 year apart
  else if (endYear > startYear) {
    startDate = monthName(startMonth) + " " + ordinalDay(startDay) + ", " + startYear;
    endDate = monthName(endMonth) + " " + ordinalDay(endDay) + ", " + endYear;
  }
  //same date
  else if (endYear === startYear && endMonth === startMonth && endDay === startDay) {
    startDate = monthName(startMonth) + " " + ordinalDay(startDay) + ", " + startYear;
    endDate = null;
  }

  if (endDate !== null) {
    range.push(startDate);
    range.push(endDate);
  } else {
    range.push(startDate);
  }
  
  return range;
}

friendly(['2016-07-01', '2016-07-04']);
