import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.headerAlign}>
        <h1>Questions and Answers</h1>
        <span>Login</span>
      </header>
      <div className={styles.catContainer}>
        <button className={styles.catTab}>Category 1</button>
        <button className={styles.catTab}>Category 2</button>
        <button className={styles.catTab}>Category 3</button>
        <button className={styles.catTab}>Category 4</button>
        <button className={styles.catTab}>Category 5</button>
      </div>
    </div>
  );
}

export default App;