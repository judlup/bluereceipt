/* eslint-disable */
import React, { useState, FC } from 'react';

import Select from './Select';
import '../../App/Root/Root.scss';
import TwoColumnGrid from '../TwoColumnGrid/TwoColumnGrid';
import SelectItem from '../SelectItem/SelectItem';

export default {
  component: Select,
  title: 'Dropdown',
};

export const WithToggling: FC = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <TwoColumnGrid>
      <Select
        label='With toggling'
        isOpen={isOpen}
        onFocus={() => setOpen(!isOpen)}
        onBlur={() => setOpen(false)}
      >
        {[1, 2, 3].map((n) => (
          <SelectItem onClick={() => setOpen(false)}>
            Item
            {n}
          </SelectItem>
        ))}
      </Select>
    </TwoColumnGrid>
  );
};

export const WithErrorItem = () => (
  <TwoColumnGrid>
    <Select label='With error item' isOpen>
      <SelectItem>Default</SelectItem>
      <SelectItem error>Error</SelectItem>
    </Select>
  </TwoColumnGrid>
);

export const Disabled = () => (
  <TwoColumnGrid>
    <Select label='Disabled' disabled>
      {[1, 2, 3].map((n) => (
        <SelectItem>
Item
          {n}
        </SelectItem>
      ))}
    </Select>
  </TwoColumnGrid>
);