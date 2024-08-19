import { QueryClient } from 'react-query';

const queryClient = new QueryClient({
  // Configure for all queries
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
      suspense: false,
    },
  },
});

export default queryClient;
