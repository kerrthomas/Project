import '../styles/globals.css'
import { useEffect } from 'react';

function App({Component, pageProps}) {

  useEffect(() => {
    require('bootstrap/dist/css/bootstrap.min.css');
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default App;
