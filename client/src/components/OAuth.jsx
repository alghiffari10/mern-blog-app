import { Button } from 'flowbite-react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { signInSuccessed } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useDispatch();
  const handleGoogleClick = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account',
    });
    try {
      const getResultFromGoogle = await signInWithPopup(auth, provider);
      // const res = await fetch('/api/auth/google', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     name: getResultFromGoogle.user.displayName,
      //     email: getResultFromGoogle.user.email,
      //     googlePhoto: getResultFromGoogle.user.photoURL,
      //   }),
      // });
      // const data = await res.json();
      // if (res.ok) {
      //   dispatch(signInSuccessed(data));
      //   navigate('/');
      // }
      const data = {
        name: getResultFromGoogle.user.displayName,
        email: getResultFromGoogle.user.email,
        googlePhoto: getResultFromGoogle.user.photoURL,
      };
      const response = await axios.post('/api/auth/google', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // Handle successful response:
      if (response.status === 200) {
        // Check for valid status code
        dispatch(signInSuccessed(response.data));
        navigate('/'); // Using useNavigate here
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      type="button"
      gradientDuoTone="pinkToOrange"
      outline
      onClick={handleGoogleClick}>
      <AiFillGoogleCircle className="w-6 h-6 mr-2" />
      Continue With Google
    </Button>
  );
}
