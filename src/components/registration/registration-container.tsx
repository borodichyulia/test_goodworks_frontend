import { FC, useState } from 'react';
import PublicApiService from '../../api/PublicApiService';
import RegistrationForm from './registration-form';

export interface RegistrationUser {
  userName: string;
  userSurname: string;
  age: number;
  email: string;
  password: string;
}

const RegistrationContainer: FC = () => {
  const [formUser, setFormUser] = useState<RegistrationUser>({
    userName: '',
    userSurname: '',
    age: 0,
    email: '',
    password: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    PublicApiService.register(formUser)
      .then((res: any) => console.log('Success!'))
      .catch((e: any) => console.log('Error'));
  };

  const handleFormChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value }: { name: string; value: string } = event.target;
    setFormUser((prevFormUser) => {
      return {
        ...prevFormUser,
        [name]: value,
      };
    });
  };

  return (
    <RegistrationForm
      handleSubmit={handleSubmit}
      handleFormChange={handleFormChange}
      formUser={formUser}
    />
  );
};

export default RegistrationContainer;
