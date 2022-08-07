import { useEffect, useState } from 'react';
import { useDebounce } from 'src/hooks/useDebounce';

interface IProps {
  onChange: (value: string) => void;
}

export default function NameForm({ onChange }: IProps) {
  const [inputState, setInputState] = useState('');

  const debounce = useDebounce(onChange, 500, '');
  const onChangeHandler = (value: string) => {
    value.length > 0 ? setInputState(value) : setInputState('');
    debounce(value);
    /* onChange(value); */
    console.log(inputState);
  };
  /*   useEffect(() => {
    debounce(inputState);
  }, [inputState]); */
  return (
    <div>
      <input
        type="search"
        /* value={inputState} */
        onChange={(e) => {
          const target = e.target as HTMLInputElement;
          onChangeHandler(target.value);
        }}
      ></input>
    </div>
  );
}
