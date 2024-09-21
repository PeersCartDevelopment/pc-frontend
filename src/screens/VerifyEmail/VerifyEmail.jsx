import  { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getApiUrl } from '../../../util/getApiUrl';


const VerifyEmail = () => {
  const {token} = useParams()

  const [message, setMessage] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      try {

        const response = await fetch(`${getApiUrl()}/api/users/verify`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            token:token
          }),

        });

        const result = await response.json();
        if (response.ok) {
          setMessage(result.message);
          setTimeout(() => navigate('/login'), 3000);
        } else {
          setMessage(result.message);
        }
      } catch (error) {
        setMessage('Error verifying email');
      }
    };

    verifyEmail();
  }, [location.search, navigate]);

  return (
    <div>
      <h2>Email Verification</h2>
      <p>{message}</p>
    </div>
  );
};

export default VerifyEmail;