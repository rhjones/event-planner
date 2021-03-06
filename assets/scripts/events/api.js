'use strict';

const app = require('../app');


// get all events (indexing)

const getAllEvents = () => {
  return $.ajax({
    url: app.host + '/events',
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
  }});
};

// get all of my events (profile)

const getMyEvents = () => {
  return $.ajax({
    url: app.host + '/my-events',
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
  }});
};

// show an event

const getOneEvent = (eventId) => {
return $.ajax ({
    url: app.host + '/events/' + eventId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

// create new event

const createNewEvent = (data) => {
  return $.ajax({
    url: app.host + '/events',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
        },
    data: data,
  });
};

// edit an event

const updateEvent = (data) => {
  return $.ajax({
    url: app.host + '/events/' + data.event._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
        },
    data: data,
  });
  };


// delete an event

const deleteEvent = (eventId) => {
return $.ajax ({
    url: app.host + '/events/' + eventId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

module.exports = {
  getAllEvents,
  getMyEvents,
  getOneEvent,
  createNewEvent,
  updateEvent,
  deleteEvent
};
