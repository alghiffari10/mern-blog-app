import { useSelector } from 'react-redux';
import { Button, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';

export default function DashProfile() {
  const [loading, setLoading] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl ">Profile</h1>
      <form className="flex flex-col gap-4">
        <div className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full">
          <img
            src={currentUser.rest.profilePicture}
            alt="user"
            className="rounded-full w-full h-full object-cover border-8 border-[lightgray]"
          />
        </div>
        <TextInput
          type="text"
          id="username"
          placeholder="username"
          defaultValue={currentUser.rest.username}
        />
        <TextInput
          type="email"
          id="email"
          placeholder="email"
          defaultValue={currentUser.rest.email}
        />
        <TextInput type="password" id="password" placeholder="password" />

        <Button
          className="bg-gradient-to-r from-gray-700 via-gray-900 to-black hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 transition ease-in-out delay-150  "
          type="submit"
          disabled={loading}>
          {loading ? (
            <>
              <Spinner size="sm" light={true} />
              <span className="pl-3">Loading...</span>
            </>
          ) : (
            'Update'
          )}
        </Button>
      </form>
      <div className="text-red-500 flex justify-between mt-5">
        <span className="cursor-pointer">Delete Account</span>
        <span className="cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}
