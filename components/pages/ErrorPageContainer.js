import { useRouter } from 'next/router';
import ErrorPage from './ErrorPage';

const ErrorPageContainer = () => {
  const router = useRouter();

  return <ErrorPage router={router} />;
};

export default ErrorPageContainer;
