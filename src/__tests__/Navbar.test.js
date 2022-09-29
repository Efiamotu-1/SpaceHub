import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';

describe('Navbar component', () => {
  test('Correct render of Navbar', () => {
    const navbar = render(
      <Router>
        <NavBar />
      </Router>,
    );
    expect(navbar).toMatchSnapshot();
  });

  test('Check if \'Space Traveler\'s Hub\' is in the rendered document of Navbar', () => {
    render(
      <Router>
        <NavBar />
      </Router>,
    );
    expect(screen.getByText('Space Traveler\'s Hub')).toBeInTheDocument();
  });
});
