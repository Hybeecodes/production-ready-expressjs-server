'use strict';

/**
 * Entry point for all jobs.
 */
const { email } = require('./queues');

module.exports = {
  email,
};
