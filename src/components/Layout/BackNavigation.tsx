import { FC } from 'react';
import Link from 'next/link';

const BackNavigation: FC = () => {
  return (
    <div className="back-nav">
      <Link href="/">
        <span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          See all properties
        </span>
      </Link>
    </div>
  );
};

export default BackNavigation;
