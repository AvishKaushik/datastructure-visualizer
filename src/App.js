import React from 'react';
import './App.css';
import DataStructuresVisualizer from './DataStructuresVisualizer/DataStructuresVisualizer.jsx'

function App() {
  document.title = "Data Structure Visualizer"
  return (
    <div className="App">
      <DataStructuresVisualizer></DataStructuresVisualizer>
    </div>
  );
}

export default App;
