import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

interface IHomeProps {}

const Home = (props: IHomeProps) => {
  return (
    <div className={styles.container} data-tid="container">
      <h2>Home</h2>
    </div>
  );
};

export default Home;
