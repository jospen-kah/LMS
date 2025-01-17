import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Portal = ({ user }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login'); // Redirect if user is not defined
            return;
        }

        const course = user.course || 'PersonalDevelopment'; // Default fallback
        if (course === 'Leadership') {
            navigate('/leadership-portal');
        } else if (course === 'Entrepreneurship') {
            navigate('/entrepreneurship-portal');
        } else {
            navigate('/personal-development-portal');
        }
    }, [user, navigate]);

    return null; // Optional: Add a loading spinner or message while redirecting
};

export default Portal;
