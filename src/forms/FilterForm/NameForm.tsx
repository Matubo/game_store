import { useState } from 'react';
import './NameForm.scss';

interface IProps {
  onChange: (value: string) => void;
}

export default function NameForm({ onChange }: IProps) {
  const [inputState, setInputState] = useState('');

  const onChangeHandler = (value: string) => {
    setInputState(value);
    onChange(value);
  };

  return (
    <div className="search">
      <p className="search__heading">name</p>
      <input
        type="search"
        className="search__input"
        value={inputState}
        onChange={(e) => {
          const target = e.target as HTMLInputElement;
          onChangeHandler(target.value);
        }}
      ></input>
    </div>
  );
}
