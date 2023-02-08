import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PublicApiService from '../../api/PublicApiService';
import LoginForm from './login-form';

export interface LoginUser {
  email: string;
  password: string;
}

const LoginContainer: FC = () => {
  const navigate = useNavigate();

  const [formUser, setFormUser] = useState<LoginUser>({
    email: '',
    password: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    PublicApiService.login(formUser)
      .then((res: any) => {
        localStorage.setItem('token', 'Bearer ' + res.data.token);
        localStorage.setItem('email', formUser.email);
        navigate('../userProfile');
      })
      .catch((e: any) => console.log('User is not authorized!'));
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
    <LoginForm
      handleSubmit={handleSubmit}
      handleFormChange={handleFormChange}
      formUser={formUser}
    />
  );
};

export default LoginContainer;
