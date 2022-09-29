import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configStore';
import MissionsList from '../components/MissionsList';

describe('Missions List Component', () => {
  test('Correct render of Missions List ', () => {
    const missions = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <MissionsList />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(missions).toMatchSnapshot();
  });
});
