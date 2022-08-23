import React, { useState } from 'react';
import { IChangeUserDataQuery } from 'src/types/queries/ChangeUserDataQuery';
import { IUser } from 'src/types/redux/user';

interface IProps {
  changeUserData: (data: IChangeUserDataQuery) => void;
  userData: IUser;
}

export default function UserInformation({ changeUserData, userData }: IProps) {
  const { avatar, description, name, username } = userData;
  const [avatarState, setAvatarState] = useState(avatar);
  const [nameState, setNameState] = useState(name);
  const [descriptionState, setDescriptionState] = useState(description);

  return (
    <div className="user-page">
      <img src={avatar}></img>
      <p>{name}</p>
      <p>{username}</p>
      <p contentEditable="true" className="user-page__description">
        {description}
      </p>
    </div>
  );
}
