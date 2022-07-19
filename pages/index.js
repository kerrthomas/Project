import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

function App() {

  useEffect(() => {
    const test = async() => {
      const result = await fetch('/api/hello');
      result = await result.json();
      console.log("data retrieved: " + result.pass);
    }

    console.log("used Effect")
    test();
  }, []);

  const [category, setCategory] = useState([]);

  function selectCat() {

  };

  return (
    <div className={styles.container}>
      <header className={styles.headerAlign}>
        <h1>Questions and Answers</h1>
        <span>Login</span>
      </header>
      <main>
        <div className={styles.catContainer}>
          <button className={styles.catTab} onClick={selectCat}>Category 1</button>
          <button className={styles.catTab} onClick={selectCat}>Category 2</button>
          <button className={styles.catTab} onClick={selectCat}>Category 3</button>
          <button className={styles.catTab} onClick={selectCat}>Category 4</button>
          <button className={styles.catTab} onClick={selectCat}>Category 5</button>
        </div>
        <div className={styles.questContainer} style={{color: 'red', fontSize: '10vh', boxShadow: '0 0 150px #000000'}}>KISS YOUR HOMIES GOOD NIGHT</div>
      </main>
    </div>
  );
}

export default App;