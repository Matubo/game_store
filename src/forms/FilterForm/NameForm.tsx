import { useState } from 'react';
import { useDebounce } from 'src/hooks/useDebounce';

interface IProps {
  onChange: (value: string) => void;
}

export default function NameForm({ onChange }: IProps) {
  const [inputState, setInputState] = useState('');

  const debounce = useDebounce(onChange, 1000);
  const onChangeHandler = (value: string) => {
    setInputState(value);
    debounce(value);
    console.log(inputState);
  };

  return (
    <div>
      <input
        type="search"
        value={inputState}
        onChange={(e) => {
          const target = e.target as HTMLInputElement;
          onChangeHandler(target.value);
        }}
      ></input>
    </div>
  );
}
