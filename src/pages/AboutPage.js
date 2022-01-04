import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

const AboutPage = () => {
  return (
    <Card>
      <div className='about'>
        <h1>About This Project</h1>
        <p>
          This is a simple React app to leave feedback for a product or a
          service
        </p>
        <p>Version: 1.0.0</p>

        <Link to='/' className='btn btn-link btn-secondary'>
          Go Back
        </Link>
      </div>
    </Card>
  );
};

export default AboutPage;
