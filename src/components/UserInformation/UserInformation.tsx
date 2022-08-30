import { useEffect, useRef, useState } from 'react';
import { ChangeUserDataQueryParams } from 'src/types/queries/ChangeUserDataQuery';
import { IUser } from 'src/types/redux/user';
import './UserInformation.scss';
import defaultImg from '../../assets/img/default_profile.png';

interface IProps {
  changeUserData: (data: ChangeUserDataQueryParams) => void;
  userData: IUser;
}

export default function UserInformation({ changeUserData, userData }: IProps) {
  const { avatar, description, name, username } = userData;
  const [disabled, setDisabledStatus] = useState(true);
  const [bioState, setBioState] = useState({ avatar, description, name });
  const uploadImgRef = useRef(null);

  const changeActive = () => {
    setDisabledStatus(!disabled);
  };

  useEffect(() => {
    const node = uploadImgRef.current;
    console.log(node);
  });

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
          <img src={bioState.avatar ? bioState.avatar : defaultImg} className="profile-pic__img" />
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
          <p className="main-data__login">Your login : {username}</p>
          <p className="main-data__name-heading">Your name : </p>
          <input
            type="text"
            className="main-data__name"
            value={bioState.name}
            disabled={disabled}
            onChange={changeNameHandler}
          ></input>
        </div>
      </div>
      <p>Your bio :</p>
      <textarea
        className="user-information__bio"
        value={bioState.description}
        disabled={disabled}
        onChange={changeDescriptionHandler}
      ></textarea>
      <button onClick={changeActive}>{disabled ? 'edit' : 'set'}</button>
    </div>
  );
}
