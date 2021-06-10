import './App.css';
import React, { useState, useEffect } from 'react';
import SketchP5 from './components/SketchP5'

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      { loading ? <SketchP5 /> : <h1>Page content</h1>}
    </div>
  );
}

export default App;
