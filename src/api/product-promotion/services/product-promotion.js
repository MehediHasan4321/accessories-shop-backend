'use strict';

/**
 * product-promotion service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product-promotion.product-promotion');
