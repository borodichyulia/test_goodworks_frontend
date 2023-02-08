import { FC, useEffect, useState } from 'react';
import { createContext } from 'vm';
import PublicApiService from '../../api/PublicApiService';
import TodoList from '../../routes/todo-list/todo-list';

export interface UserProfileProps {
  _id?: string;
  userName?: string;
  userSurname?: string;
  age?: number;
  email?: string;
  list?: string[];
  password?: string;
}

const UserProfile: FC = () => {
  const [user, setUser] = useState<UserProfileProps>();

  useEffect(() => {
    PublicApiService.getUser()
      .then((res: any) => {
        setUser(res.data);
      })
      .catch((e: any) => console.log('user is not authorized!'));
  }, [setUser]);

  return (
    <>
      <div className="flex flex-col items-center">
        <p className="flex items-center pl-2 border-inherit rounded-sm border-2 w-2/5 h-10 my-2">
          {user?.email}
        </p>
        <p className="flex items-center pl-2 border-inherit rounded-sm border-2 w-2/5 h-10 my-2">
          {user?.userName}
        </p>
        <p className="flex items-center pl-2 border-inherit rounded-sm border-2 w-2/5 h-10 my-2">
          {user?.userSurname}
        </p>
        <p className="flex items-center pl-2 border-inherit rounded-sm border-2 w-2/5 h-10 my-2">
          {user?.age}
        </p>
      </div>
      <TodoList list={user?.list} />
    </>
  );
};

export default UserProfile;
