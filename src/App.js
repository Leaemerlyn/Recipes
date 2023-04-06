import React, { Component } from 'react'
import { Button, Header } from 'semantic-ui-react';
import './App.css';
import { Ingredients } from './Ingredients';
import { RecipeInfo } from './RecipeInfo';
import { RecipesMenu } from './RecipesMenu';

function App() {
  return (
    <>
    <div id="app-container">
      <div id="left-hand">
        <div id="left-head"><h3 id="my-recipe">My Recipes</h3><Button icon="add" size='mini'/></div>
        <RecipesMenu/>
        <Button.Group className='mode'>
            <Button>Edit</Button>
            <Button>View</Button>
        </Button.Group>
      </div>
      <div id="center">
        <RecipeInfo/>
      </div>
      <div id="right-hand">
        <Ingredients/>

      </div>

    </div>
    </>
  );
}

export default App;
