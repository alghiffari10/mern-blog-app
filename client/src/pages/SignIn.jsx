import { Link, useNavigate } from 'react-router-dom';
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import axios from 'axios';
export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChance = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password)
      return setErrorMessage('Please fill all fields');
    try {
      setLoading(true);
      setErrorMessage(null);
      const response = await axios.post('/api/auth/signin', formData);
      setLoading(false);

      if (response.status === 200) {
        navigate('/');
      }
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-20 dark">
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
            This is demo blog project.You can sign in with your email and password or with
            Google.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your email" className="dark:text-black" />
              <TextInput
                id="email"
                type="email"
                placeholder="name@company.com"
                onChange={handleChance}
              />
            </div>
            <div>
              <Label value="Your password" className="dark:text-black" />
              <TextInput
                id="password"
                type="password"
                placeholder="****"
                onChange={handleChance}
              />
            </div>
            <Button
              className="bg-gradient-to-r from-gray-700 via-gray-900 to-black hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
              type="submit"
              disabled={loading}>
              {loading ? (
                <>
                  <Spinner size="sm" light={true} />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                'Sign Up'
              )}
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Dont Have an account?</span>
            <Link to={'/sign-up'} className="text-blue-400">
              Sign Up
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5  md:absolute md:w-[362px] " color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
