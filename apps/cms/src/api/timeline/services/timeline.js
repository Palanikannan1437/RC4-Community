'use strict';

/**
 * timeline service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::timeline.timeline');
