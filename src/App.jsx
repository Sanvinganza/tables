import React, { useEffect, useState } from 'react';
import Table from './components/table';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch('/api/test');
      const data = await response.json();
      setMessage(data.message);
    };

    fetchMessage();
  }, []);

  return (
    <div>
      <h1>{message}</h1>
      <Table />
    </div>
  );
}

export default App;
