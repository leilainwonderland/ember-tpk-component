'use strict';

module.exports = {
  description: 'help to create the structure of translations files',

  availableOptions: [
    {
      name: 'language',
      type: String,
      default: 'fr',
      aliases: ['l'],
    },
    {
      name: 'pod',
      type: Boolean,
      default: true,
      aliases: ['pod'],
    },
  ],

  locals(options) {
    return {
      language: options.language,
    };
  },

  fileMapTokens(options) {
    return {
      __lang__(options) {
        return `${options.locals.language}-${options.locals.language}`;
      },
    };
  },
};
