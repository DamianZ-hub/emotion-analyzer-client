import Header from './components/Header'
import UserInput from './components/UserInput'
import { useState } from 'react'
import Result from './components/Result'

function App() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async (txt) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('http://127.0.0.1:5000/api/v1/analyze?txt=${encodeURIComponent(txt)}');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const jsonData = await response.json(); // Parse JSON
            setData(jsonData);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

  return (
   <>
     <Header />
     <UserInput handleButton={fetchData} />
       <div className="request-status">
           {loading && <p>Loading...</p>}
           {error && <p>Error: {error}</p>}
           {data && <Result data={data}/>}
       </div>
   </>
  );
}

export default App;
