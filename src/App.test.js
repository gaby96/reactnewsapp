import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import Appbar from './component/Appbar/Appbar';
import ReactDOM from 'react-dom';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/ New York Times Most Popular Articles/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Appbar />, div);
});
