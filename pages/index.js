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
      <div className={"flex-box"}>
        <table>
          <td>
            <tr><button className="question-tab">Question 1</button></tr>
            <tr><button className="question-tab">Question 2</button></tr>
            <tr><button className="question-tab">Question 3</button></tr>
            <tr><button className="question-tab">Question 4</button></tr>
            <tr><button className="question-tab">Question 5</button></tr>
          </td>
        </table>
      </div>
    </div>
  );
}

export default App;