import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './DropdownItem.module.scss';

interface Props {
  /**
   * Define callback on click event.
   */
  onClick?: () => void;

  /**
   * Define error option. Default: false
   */
  error?: boolean;
}

const SelectItem: FC<Props> = ({
  onClick,
  error = false,
  children,
}) => {
  const itemClass = error ? classNames(styles.item, styles.error) : styles.item;

  return (
    <div className={itemClass} onClick={onClick} onKeyDown={() => null} role='button' tabIndex={0}>
      {children}
    </div>
  );
};

export default SelectItem;