'use strict';

/**
 * header-banner service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::header-banner.header-banner');
