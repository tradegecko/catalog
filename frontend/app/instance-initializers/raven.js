export function initialize(appInstance) {
  appInstance.lookup('service:raven').registerAccountData();
}

export default {
  name: 'raven',
  initialize
};
