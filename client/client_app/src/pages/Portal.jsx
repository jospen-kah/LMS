import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Portal = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (user.course === 'Leadership') {
      navigate('/leadership-portal');
    } else if (user.course === 'Entrepreneurship') {
      navigate('/entrepreneurship-portal');
    } else {
      navigate('/personal-development');
    }
  }, [user, navigate]);

  return null; // Optional loading spinner or message while redirecting
};
export default Portal;