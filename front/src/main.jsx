import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MainComponent from './components/MainComponent';

const RootComponent = () => {
  return (
    <div>
      <App />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
);
