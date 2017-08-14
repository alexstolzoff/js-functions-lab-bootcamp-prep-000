// write your code below!
function happyHolidays(){
  var str = "Happy holidays!";
  return str;
}

function happyHolidaysTo(name){
  var str = `Happy holidays, ${name}!`;
  return str;
}

function happyHolidayTo(holiday,name){
  var str = `Happy ${holiday}, ${name}!`;
  return str;
}

function holidayCountdown(days, holiday){
  var str = `It's ${days} days until ${holiday}!`;
  return str;
}

happyHolidays();
happyHolidaysTo('you');
happyHolidayTo('Independence Day', 'you');
holidayCountdown("Mother's Day", "20");
