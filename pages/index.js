import Head from 'next/head';
import styles from '../styles/App.module.css';
import Navbar from '../components/Navbar';
import Home from '../components/Home';

export default function App() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Home />
    </div>
  )
}
