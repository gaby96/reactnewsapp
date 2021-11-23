import {render, screen, cleanup} from '@testing-library/react';
import FooterSection from '../FooterSection';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FooterSection />, div);
  });