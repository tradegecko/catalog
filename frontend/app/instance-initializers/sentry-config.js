/* global Raven */
import environment from '../config/environment';
import { get } from '@ember/object';

export function initialize() {
  // Disable for development
  if (get(environment, 'environment') === 'test') {
    window.Raven = {
      config() {
        return {
          install() {},
        };
      },
    };
  }

  if (!window.Raven) {
    return;
  }

  if (get(environment, 'sentry.development')) {
    Raven.setUserContext = function(context) {
      Raven.context = context;
      if (!get(environment, 'sentry.test')) {
        console.info("[Raven | context]", context);
      }
    };
    Raven.captureMessage = function(message, opts) {
      Raven.lastMessage = message;
      console.error("[Raven]", message, opts);
    };
    Raven.captureException = function(exception, opts) {
      Raven.lastException = exception;
      console.error("[Raven]", exception, opts);
    };
  }

  if (!environment.sentry) {
    throw new Error('`sentry` should be configured when not in development mode.');
  }

  Raven.config(environment.sentry.dsn, {
    release:        environment.APP.version,
    environment:    environment.environment,
    whitelistUrls:  environment.sentry.whitelistUrls,
    maxBreadcrumbs: 50,
  }).install();
}

export default {
  name: 'sentry-config',
  initialize: initialize,
};
