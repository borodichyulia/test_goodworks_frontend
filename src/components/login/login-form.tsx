import { FC } from 'react';
import { LoginUser } from './login-container';

interface LoginFormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formUser: LoginUser;
}

const LoginForm: FC<LoginFormProps> = ({
  handleSubmit,
  formUser,
  handleFormChange,
}) => {
  return (
    <>
      <div className="flex m-auto w-full justify-center my-5">
        <form onSubmit={handleSubmit}>
          <label className="block w-full">
            <span className=" after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Email
            </span>
            <input
              type="email"
              name="email"
              onChange={handleFormChange}
              value={formUser.email}
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="you@example.com"
            />

            <span className=" after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Password
            </span>
            <input
              type="password"
              name="password"
              onChange={handleFormChange}
              value={formUser.password}
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="u7Ujk8p"
            />
          </label>
          <div className="text-center mt-3">
            <button
              className="border-sky-600 bg-sky-600 border-solid border-2 text-white w-32 rounded-md"
              type="submit"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
