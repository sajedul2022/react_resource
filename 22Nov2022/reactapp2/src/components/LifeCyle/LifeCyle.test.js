import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LifeCyle from './LifeCyle';

describe('<LifeCyle />', () => {
  test('it should mount', () => {
    render(<LifeCyle />);
    
    const lifeCyle = screen.getByTestId('LifeCyle');

    expect(lifeCyle).toBeInTheDocument();
  });
});