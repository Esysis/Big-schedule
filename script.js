$(function () {
  // displayes the current calander date
  $('#currentDay').text(dayjs().format('MMMM D, YYYY'));

  // goes through every timeblock div
  $('.time-block').each(function () {
    // gets the hour value from the id value
    const timeBlockHour = parseInt($(this).attr('id').split('-')[1]);
    // gets the current hour
    const currentHour = dayjs().hour();

  });
});
