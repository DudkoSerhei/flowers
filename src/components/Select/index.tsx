import React, { FC, ReactNode } from 'react';
import cn from 'classnames';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';

import styles from './index.module.scss';

type menuItem = {
  value: string,
  label: string,
};

interface SelectProps {
  className: string,
  value: string,
  onChange: (event: SelectChangeEvent<string>, child: ReactNode) => void,
  label: string,
  items: menuItem[],
};

const SelectView: FC<SelectProps> = (props) => {
  const { className, value, onChange, label, items } = props;

  return (
    <FormControl className={cn(styles.select, className)} classes={{ root: styles.select }} variant='standard'>
      <InputLabel className={styles.select__label} classes={{ focused: styles.select__focused }}>{label}</InputLabel>
      <Select
        value={value}
        onChange={onChange}
        label={label}
        className={styles.select__view}
      >
        {items.map(item =>
          <MenuItem
            key={item.value}
            className={styles.select__item}
            value={item.value}
            classes={{
              selected: styles.select__selected,
            }}
          >
            {item.label}
          </MenuItem>)}
      </Select>
    </FormControl>
  )
}

export default SelectView;