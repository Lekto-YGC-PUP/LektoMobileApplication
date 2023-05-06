import DropDownPicker from 'react-native-dropdown-picker';
import React from 'react';
import { useState } from 'react';
import styles from 'react-native-material-dropdown/src/components/dropdown/styles';

export function Data() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Cebuano (Cebu) to Tagalog', value: 'cebu'},
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
}

