import { QueryClient, QueryClientProvider } from 'react-query';
import Table from './components/Table/Table';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Table />
    </QueryClientProvider>
  );
}

export default App;
