'use strict';

const events = require('../events/events');
const rsvps = require('../rsvps/events');

const renderProfile = require('../templates/profile/container.handlebars');

const buildProfile = () => {
  console.log("INSIDE of the profile events^^^^^^");

  $(".interface").html(renderProfile());
  events.getMyEvents();
  rsvps.getMyRsvps();
};

module.exports = {
  buildProfile,
};
