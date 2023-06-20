import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReqCharacters from './class/ReqCharacters';

describe('<ReqCharacters />', () => {
  test('it should mount', () => {
    render(<ReqCharacters />);
    
    const reqCharacters = screen.getByTestId('ReqCharacters');

    expect(reqCharacters).toBeInTheDocument();
  });
});