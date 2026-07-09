import styles from './App.module.css';
import Form from "./components/Form/Form";
import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.layout}>
        <div className={styles.header}>
          <Header onOpen={() => setOpen(true)} />
        </div>

        <div className={styles.sidebar}>
          <Sidebar />
        </div>

        <div className={styles.main}>
          <Main />
        </div>
      </div>
      
      {open && <Form onClose={() => setOpen(false)} />}
    </>
  )
}

export default App;
