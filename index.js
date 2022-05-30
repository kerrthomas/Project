import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';
import mysql from '../db';

function App() {

  useEffect(() => {
    const test = async() => {
      const result = await fetch('/api/hello');
      result = await result.json();
      console.log("data retrieved: " + result);
    }
    test();
  }, []);

  const [category, setCategory] = useState([])

  const selectCat = async (event) => {

  }

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
        <div className={styles.questContainer}>Test</div>
      </main>
    </div>
  );
}

export default App;