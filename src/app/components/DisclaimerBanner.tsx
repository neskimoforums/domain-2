import React from 'react';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

const DisclaimerBanner: React.FC = () => {
  return (
    <div className="bg-yellow-50 border-b border-yellow-200 py-2 px-4 text-center text-sm">
      <Link
        href="#disclaimer"
        className="text-yellow-800 hover:text-yellow-900 font-medium inline-flex items-center justify-center"
      >
        <AlertTriangle className="mr-2 w-4 h-4" />
        Important Disclaimer - Click to Read
      </Link>
    </div>
  );
};

export default DisclaimerBanner;