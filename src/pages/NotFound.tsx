import  { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-16">
      <h1 className="text-6xl font-bold gradient-text mb-2">404</h1>
      <h2 className="text-2xl font-semibold text-white mt-4 mb-6">Page Not Found</h2>
      <p className="text-gray-400 text-center max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/" className="btn btn-primary">
          <Home className="mr-2 h-5 w-5" />
          Back to Homepage
        </Link>
        <Link to="/courses/futures-trading" className="btn btn-outline">
          View Available Courses
        </Link>
      </div>
    </div>
  );
}
  