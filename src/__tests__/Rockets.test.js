import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configStore';
import RocketsList from '../components/RocketsList';

describe('Rockets List Component', () => {
  test('Correct render of Rockets List ', () => {
    const rockets = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <RocketsList />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(rockets).toMatchSnapshot();
  });
});
