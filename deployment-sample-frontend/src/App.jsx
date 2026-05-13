import { useEffect, useState } from 'react'
import './App.css'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function App() {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const [items, setItems] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/items`);
        const data = await res.json();
        setItems(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getItems();
  }, []);

  return (
    <>
      <h1>Items</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>An error occurred: {error.message}</p>}
      <ul>{items.map(item => <li key={item._id}>{item.name}</li>)}</ul>
    </>
  )
}

export default App
