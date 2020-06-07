import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Checkbox from './Checkbox';

describe('<Checkbox />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Checkbox />);
    const checkbox = getByTestId('Checkbox');

    expect(checkbox).toBeInTheDocument();
  });
});