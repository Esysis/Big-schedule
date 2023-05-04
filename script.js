$(function () {
  // displayes the current calander date
  $('#currentDay').text(dayjs().format('MMMM D, YYYY'));

  // goes through every timeblock div
  $('.time-block').each(function () {
    // gets the hour value from the id value
    const timeBlockHour = parseInt($(this).attr('id').split('-')[1]);
    // gets the current hour
    const currentHour = dayjs().hour();
    //  adds each class depending on the time block and current time
    if (timeBlockHour < currentHour) {
      $(this).addClass('past');
    } else if (timeBlockHour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
// retrieves the saved text from the selected hour
const savedEvent = localStorage.getItem(`hour-${timeBlockHour}`);
if (savedEvent) {
  $(this).find('textarea').val(savedEvent);
}
});
// click event listener gets the time block, hour, and the text of the clicked save button
$('.saveBtn').on('click', function () {
const timeBlock = $(this).closest('.time-block');
const timeBlockHour = timeBlock.attr('id').split('-')[1];
const eventDescription = timeBlock.find('textarea').val();

// saves the text in the local storage
localStorage.setItem(`hour-${timeBlockHour}`, eventDescription);
   });

});
