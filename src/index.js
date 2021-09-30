import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './pages/header';
import Content from './pages/content';
import './index.css';

function App() {
  const [urlKey, setKey] = useState('stars:%3E1');
  return (
    <div>
      <Header getStarList={(key) => setKey(key)} />
      <Content urlKey={urlKey} />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
