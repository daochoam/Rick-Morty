import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Episode from './class/Episode';

describe('<Episode />', () => {
  test('it should mount', () => {
    render(<Episode />);
    
    const episode = screen.getByTestId('Episode');

    expect(episode).toBeInTheDocument();
  });
});