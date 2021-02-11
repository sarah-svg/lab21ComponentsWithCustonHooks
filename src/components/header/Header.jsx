
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/theme';

import styles from './header.css';


export default function Header() {
  const { theme, setTheme } = useTheme();

  const handleChange = ({ target }) => {
    if(target.checked){
      setTheme('light');
    } else setTheme('dark');
  };
  
  const themeStyle = theme === 'dark' ? styles.dark : styles.light;
 

  return (
    <div className={themeStyle} >
      <h1  >Airbender Api</h1>
      <Link to="/characters">List of all the characters</Link><br></br>
      <Link to="/">back to home</Link>
      <input type="checkbox" onChange={handleChange}></input>
    </div>
  );
}


