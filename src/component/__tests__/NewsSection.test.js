import {render, screen, cleanup} from '@testing-library/react';
import NewsSection from '../Appbar/NewsSection';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewsSection />, div);
  });