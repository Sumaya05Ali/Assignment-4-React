import { FC } from 'react';
import Link from 'next/link';

const NotFound: FC = () => {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>The hotel you're looking for does not exist or has been removed.</p>
      <Link href="/">
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;