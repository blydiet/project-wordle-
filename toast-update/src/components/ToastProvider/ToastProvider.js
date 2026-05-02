import React from 'react';
import useKeydown from "../../hooks/usekeydown"
export const ToastContext = React.createContext();

function ToastProvider({children}) {
const [displayToast, setDisplayToast] = React.useState([]);





function createToast(message, variant) {
    const id = crypto.randomUUID();
    const nextMessage = {id, message, variant};
     if (message !== "") {
       setDisplayToast([...displayToast, nextMessage ]);

     }
}

function closeMessage(comment) {
    const updatedToast = displayToast.filter(({id}) => id !== comment);
    setDisplayToast(updatedToast);
  }
  
  React.useEffect(() => {
    function handleKeyDown(event) {
      const empty = [];
      if (event.code === 'Escape') {
        setDisplayToast(empty);
      }
  
    }
    
  
    window.addEventListener('keydown', handleKeyDown);
   
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setDisplayToast]);


  const handleEscape = React.useCallback(() => {
    setDisplayToast([]);
  }, []);

  useKeydown("Escape",handleEscape);


    return (
        <ToastContext.Provider
        value={{displayToast, createToast, closeMessage}}>
            {children}
        </ToastContext.Provider>
    )
}

export default ToastProvider;
