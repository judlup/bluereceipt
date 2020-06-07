import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SelectItem from './SelectItem';

describe('<SelectItem />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<SelectItem />);
    const selectItem = getByTestId('SelectItem');

    expect(selectItem).toBeInTheDocument();
  });
});