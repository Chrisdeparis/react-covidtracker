import React, { useEffect } from "react";
import { Chart, Cards, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from './api';

export default function App() {


  
  
  return (
    <div className={styles.container}>
      <Chart />
      <Cards />
      <CountryPicker />
    </div>
  );
}
