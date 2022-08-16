import { useState } from 'react';
import './NameForm.scss';

interface IProps {
  onChange: (value: string) => void;
  name: string;
}

export default function NameForm({ onChange, name }: IProps) {
  const [inputState, setInputState] = useState('');

  const onChangeHandler = (value: string) => {
    onChange(value);
  };

  return (
    <div className="search">
      <p className="search__heading">name</p>
      <input
        type="search"
        className="search__input"
        value={name}
        onChange={(e) => {
          const target = e.target as HTMLInputElement;
          onChangeHandler(target.value);
        }}
      ></input>
    </div>
  );
}
