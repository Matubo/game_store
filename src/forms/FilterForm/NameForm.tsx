import { useState } from 'react';

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
      <input
        type="search__imput"
        value={inputState}
        onChange={(e) => {
          const target = e.target as HTMLInputElement;
          onChangeHandler(target.value);
        }}
      ></input>
    </div>
  );
}
