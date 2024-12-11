import { QueryClient, QueryClientProvider } from 'react-query';
import Table from './components/Table/Table';
import ErrorAlert from './components/ErrorAlert/ErrorAlert';
import { ErrorProvider } from './components/ErrorProvider/ErrorProvider';

function App() {
  const queryClient = new QueryClient();

  return (
    <ErrorProvider>
      <QueryClientProvider client={queryClient}>
        <>
          <Table />
          <ErrorAlert />
        </>
      </QueryClientProvider>
    </ErrorProvider>
  );
}

export default App;
