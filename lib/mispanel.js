import _mixpanel from 'mixpanel-browser';

function log(name) {
  return () => {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log(`mixpanel: ${name}`);
    }
  };
}

const mixpanel =
  process.env.NODE_ENV === 'development' ||
  process.env.NODE_ENV === 'test' ||
  process.env.DISABLE_METRICS === 'true'
    ? {
        init: log('init'),
        identify: log('identify'),
        track: log('track'),
        reset: log('reset'),
        people: {
          set: log('people.set'),
          set_once: log('people.set_once'),
        },
      }
    : _mixpanel;

export default mixpanel;
