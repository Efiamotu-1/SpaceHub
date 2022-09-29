import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configStore';
import Myprofile from '../components/Myprofile';
import '@testing-library/jest-dom';

describe('Myprofile Component', () => {
  test('Correct render of Myprofile', () => {
    const myprofile = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Myprofile />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(myprofile).toMatchSnapshot();
  });

  test('Check if \'My Missions\' is in the rendered document of Myprofile component', () => {
    render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Myprofile />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(screen.getByText('My Missions')).toBeInTheDocument();
  });

  test('Check if \'My Rockets\' is in the rendered document of Myprofile component', () => {
    render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Myprofile />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(screen.getByText('My Rockets')).toBeInTheDocument();
  });
});
