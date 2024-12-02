import { QueryClient, QueryClientProvider } from 'react-query';
import Table from './components/table';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Table />
    </QueryClientProvider>
  );
}

export default App;
