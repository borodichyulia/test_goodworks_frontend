import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navigation: FC = () => {
  return (
    <>
      <nav className="flex sm:justify-center space-x-4">
        <Link
          to="registration"
          className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
        >
          Registration
        </Link>
        <Link
          to="login"
          className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
        >
          Login
        </Link>
        <Link
          to="userProfile"
          className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
        >
          Profile
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
