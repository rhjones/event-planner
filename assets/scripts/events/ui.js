'use strict';

// const app = require('../app');

// const showAllEventsTemplate = require ('../templates/******');
// const showMyEventsTemplate = require('../templates/*******');

// for getting all events
const allEventsSuccess = (data) => {
 console.log('event success data is', data);
  // let allEvents = data;
//   console.log(lists);
  // $(".events").html(showAllEventsTemplate(allEvents));
};

// for getting my events

const myEventsSuccess = (data) => {
 console.log('event success data is', data);
  // let myEvents = data;
//   console.log(lists);
  // $(".events").html(showMyEventsTemplate(myEvents));
};

const createEventSuccess = () => {
console.log('event created successfully!!');
};

// const failure = () => {
//   $('.pw-error').removeClass('hide');
//   setTimeout(function() {
//    $('.pw-error').fadeOut();
//  }, 800);
// };

// const clearMyLists = () => {
//   event.preventDefault();
//   //console.log('clearMyLists is running');
//   $(".content").html("");
// //  $('#update-list-form').addClass('hide');
// };

module.exports = {
//  proceedToCreateList,
  allEventsSuccess,
  myEventsSuccess,
  createEventSuccess,
  // failure,
  // proceedToUpdateList,
  // showUpdatedList,
  // clearMyLists,
  // singleListSuccess
};