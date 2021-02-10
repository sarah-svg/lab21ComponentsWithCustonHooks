import React from 'react';
import { BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';
import AllCharacters from '../../containors/AllCharacters';
import Character from '../../containors/Character';
import { CharacterTheme } from '../../hooks/theme';
import Header from '../header/Header';




export default function App() {
  return (
    <Router>
      <CharacterTheme>
      <Header/>
      <Switch>
        {/* <Route exact path="/" component={Header} /> */}
        <Route exact path="/characters" component={AllCharacters} />
        <Route exact path="/characters/:id" component={Character}/>
      </Switch>
      </CharacterTheme>
    </Router>
  );
}
