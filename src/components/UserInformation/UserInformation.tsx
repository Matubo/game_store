import { useEffect, useState } from 'react';
import { ChangeUserDataQueryParams } from 'src/types/queries/ChangeUserDataQuery';
import { IUser } from 'src/types/redux/user';
import defaultImg from '../../assets/img/default_profile.png';

interface IProps {
  changeUserData: (data: ChangeUserDataQueryParams) => void;
  userData: IUser;
}

export default function UserInformation({ changeUserData, userData }: IProps) {
  const { avatar, description, name, username } = userData;
  const [disabled, setDisabledStatus] = useState(true);
  const [bioState, setBioState] = useState({ avatar, description, name });

  const changeActive = () => {
    setDisabledStatus(!disabled);
  };

  useEffect(() => {
    if (disabled) {
      if (bioState.avatar != avatar || bioState.name != name || bioState.description != description) {
        changeUserData(bioState);
      }
    }
  }, [disabled]);

  const changeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBioState({ ...bioState, name: e.target.value });
  };

  const changeDescriptionHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBioState({ ...bioState, description: e.target.value });
  };

  const changeAvatarHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();
    reader.onloadend = function () {
      console.log(reader);
      if (file.type.match('image.*')) {
        if (file.size < 358400) {
          setBioState({ ...bioState, avatar: reader.result as string });
        } else {
          alert('Too big');
        }
      } else {
        alert('NOT a FOTO O_o');
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="user-page">
      <img src={bioState.avatar ? bioState.avatar : defaultImg}></img>
      <input type="file" onChange={changeAvatarHandler} disabled={disabled} />
      <p>Your login : {username}</p>
      <p>Your name :</p>
      <input type="text" value={bioState.name} disabled={disabled} onChange={changeNameHandler}></input>
      <p>Your bio :</p>
      <input type="text" value={bioState.description} disabled={disabled} onChange={changeDescriptionHandler}></input>
      <button onClick={changeActive}>{disabled ? 'edit' : 'set'}</button>
    </div>
  );
}
