import { useEffect, useState } from 'react';
import { ChangeUserDataQueryParams } from 'src/types/queries/ChangeUserDataQuery';
import './UserInformation.scss';
import defaultImg from '../../assets/img/default_profile.png';

interface IProps {
  changeUserData: (data: ChangeUserDataQueryParams) => void;
  logout: () => void;
  userData: { avatar: string; description: string; name: string; username: string };
}

export default function UserInformation({ changeUserData, userData, logout }: IProps) {
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

  const changeDescriptionHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBioState({ ...bioState, description: e.target.value });
  };

  const changeAvatarHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();
    reader.onloadend = function () {
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
    <div className="user-information">
      <div className="user-information__main-data">
        <div className="main-data__profile-pic">
          <img src={bioState.avatar ? bioState.avatar : defaultImg} className="profile-pic__img" alt="profile-pic" />
          <div className={`input__wrapper ${disabled ? 'input__wrapper-disabled' : ''}`}>
            <input
              name="file"
              type="file"
              id="input__file"
              className="input input__file"
              multiple
              onChange={changeAvatarHandler}
              disabled={disabled}
            />
            <label htmlFor="input__file" className="input__file-button">
              <span className="input__file-icon-wrapper">+</span>
              <span className="input__file-button-text">upload image {`(350kb max)`}</span>
            </label>
          </div>
        </div>
        <div className="main-data__profile-data">
          <p className="profile-data__heading">USER PROFILE</p>
          <p className="profile-data__login">Your login : {username}</p>
          <p className="profile-data__name-heading">Your name : </p>
          <input
            type="text"
            className="profile-data__name"
            value={bioState.name}
            disabled={disabled}
            onChange={changeNameHandler}
          ></input>
          <p className="user-information__bio-heading">Your bio : </p>
          <textarea
            className="user-information__bio-text"
            value={bioState.description}
            disabled={disabled}
            onChange={changeDescriptionHandler}
          ></textarea>
          <button onClick={changeActive} className="profile-data__change-button">
            {disabled ? 'edit' : 'save'}
          </button>
          <button onClick={logout} className="profile-data__logout-button">
            logout
          </button>
        </div>
      </div>
    </div>
  );
}
