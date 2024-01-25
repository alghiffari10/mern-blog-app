import { Link } from 'react-router-dom';
import { Button, Label, TextInput } from 'flowbite-react';
export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to={'/'} className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-lg text-white">
              BedahCodeID
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is demo blog project. you can sign up with your email and password or
            with Google account.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your username" />
              <TextInput id="username" type="text" placeholder="Username" />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput id="email" type="email" placeholder="name@company.com" />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput id="password" type="password" placeholder="Password" />
            </div>
            <Button
              className="bg-gradient-to-r from-gray-700 via-gray-900 to-black hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
              type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to={'/sign-in'} className="text-blue-400">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
