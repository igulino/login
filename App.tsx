import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup } from "firebase/auth";
import { provider, dt } from './src/gancho';



function App() {
  const [pega, setPega] = useState('');
    const auth = getAuth();
    var joia = ' '
    
    useEffect(() => {
        if (pega != null) {
            joia = '👍'
            
        }
        else{setPega(' ');}
    }, [pega, joia])
    

    async function azuraFilho() {
          const resp = await signInWithPopup(auth, provider);
          console.log(resp);
          setPega(String(resp.user.displayName))
      }

  return (
      <div>
          <button onClick={() => azuraFilho()}>click</button>
          <br></br>
          <p>nome do teu email: {pega}{joia}</p>
      </div>
  )
}

export default App
