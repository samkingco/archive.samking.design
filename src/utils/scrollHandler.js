import { globalHistory } from '@reach/router';

const state = {
  key: null,
  pathname: '',
};

const onHistoryChange = ({ location, action }) => {
  if (
    action.toLowerCase() === 'push' &&
    location.pathname !== state.pathname &&
    location.key !== state.key &&
    window
  ) {
    window.scrollTo(0, 0);
  }

  state.key = location.key;
  state.pathname = location.pathname;
};

const scrollHandler = () => globalHistory.listen(onHistoryChange);

export default scrollHandler;
