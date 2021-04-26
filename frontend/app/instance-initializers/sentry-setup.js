/* global Raven */
import Ember from 'ember';
import { on } from 'rsvp';

export function initialize() {
  if (!window.Raven) {
    return;
  }

  const _oldOnError = Ember.onerror;
  Ember.onerror = function EmberOnError(error) {
    if (Ember.testing) {
      throw error;
    }
    Raven.captureException(error);
    if (typeof _oldOnError === 'function') {
      _oldOnError.call(this, error);
    }
  };

  on('error', function(reason) {
    if (!reason) {
      return;
    }
    if (reason instanceof Error) {
      Raven.captureException(reason, {
        extra: { context: 'Unhandled Promise error detected' },
      });
    } else {
      Raven.captureMessage('Unhandled Promise error detected', {
        extra: { reason: reason },
      });
    }
  });
}

export default {
  name: 'sentry-setup',
  after: 'sentry-config',
  initialize: initialize,
};
