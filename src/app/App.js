import { useEffect } from 'react';
import http from '@/axios/index.js';

function App () {
  useEffect(() => {
    const getUser = async () => {
      const res = await http.get('/some/path');
      console.log(res);
    };
    getUser();
  }, []);
  return <div>app</div>;
}

export default App;
