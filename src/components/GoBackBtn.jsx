import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function GoBackLink() {
  return (
    <Link href="/" className="absolute top-4 left-4 z-10">
      <div className="text-red-700 px-4 py-2 rounded-lg flex items-center space-x-2">
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
    </Link>
  );
}
