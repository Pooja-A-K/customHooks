import './App.css';
import React from 'react';
import useMessage from './hooks/useMessage';

function App() {

  const { message, showmessage, hideMessage } = useMessage();
  
  const handleShowMessage = () => {
    showmessage('This is an diplay message.');
  };

  return (
    <div className='displaydiv'>
      <button onClick={handleShowMessage}>Show Message</button>
      {message && (
        <div className={`message ${message.type}`}>
          {message.message}
          <button onClick={hideMessage}>Hide Message</button>
        </div>
      )}
    </div>
  );
}

export default App;
