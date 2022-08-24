import { useState } from 'react';
import editImg from '../../assets/img/edit/edit.png';

interface IProps {
  content: string;
  className: string;
  changeContent: (value: string) => void;
}

export default function EditableField({ content, className, changeContent }: IProps) {
  const [active, setActive] = useState(true);

  const changeContenteditableStatus = () => {
    setActive(!active);
  };

  function changeHandler(e: React.ChangeEvent<HTMLTextAreaElement>) {
    changeContent(e.target.value);
  }

  return (
    <div className={className}>
      <textarea
        className={`${className}__field`}
        onChange={changeHandler}
        suppressContentEditableWarning={true}
        value={content}
        disabled={active}
      ></textarea>
      <button className={`${className}__edit-button`} onClick={changeContenteditableStatus}>
        <img className="edit-button__img" src={editImg}></img>
      </button>
    </div>
  );
}
