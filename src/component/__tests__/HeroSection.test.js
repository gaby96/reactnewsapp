import {render, screen, cleanup} from '@testing-library/react';
import Appbar from '../Appbar/Appbar';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Appbar />, div);
  });