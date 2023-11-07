import { useState } from 'react';
function useMessage() {
  const [message, setMessage] = useState(null);

  //show content of of message and hide after 3seconds 
  const showmessage = (message, duration = 3000) => {
    setMessage({ message});
    setTimeout(() => {
      hideMessage();
    }, duration);
  };

  const hideMessage = () => {
    setMessage(null);
  };

  return {message,showmessage, hideMessage};
}

export default useMessage;
