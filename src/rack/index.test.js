import React from 'react';
import { render } from '@testing-library/react';
import Rack from './';

test('renders learn react link', () => {
  const { container } = render(<Rack />);
  expect(container).toBeInTheDocument();
  
});
