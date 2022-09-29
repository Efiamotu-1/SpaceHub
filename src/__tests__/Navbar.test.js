import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/NavBar';

describe('Navbar component', () => {
  test('Correct render of Navbar', () => {
    const navbar = render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(navbar).toMatchSnapshot();
  });

  test('Check if \'Space Traveler\'s Hub\' is in the rendered document of Navbar', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(screen.getByText('Space Traveler\'s Hub')).toBeInTheDocument();
  });
});
