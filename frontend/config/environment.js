'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'frontend',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        Date: false,
        Array: true,
        Function: true,
        String: true,
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    sentry: {
      // Replace this dsn to setup sentry FILLMEINPRODUCTION
      dsn: 'https://6f213350f1c6434eacfb971ee6bbe24a@sentry.io/126448',
      whitelistUrls: [/https?:\/\/\w+\.tradegecko\.com/i],
      development: (environment === 'development' || environment === 'test'),
      test: (environment === 'test'),
    },
    segment: {
      WRITE_KEY: process.env.SEGMENT_KEY,
      LOG_EVENT_TRACKING: false,
      defaultPageTrack: false,
    },
    moment: {
      allowEmpty: true
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV['ember-cli-mirage'] = { enabled: false };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV['ember-cli-mirage'] = { enabled: false };
  }

  return ENV;
};
