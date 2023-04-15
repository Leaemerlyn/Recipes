import React, { Component, useState } from 'react'
import { Button, Header } from 'semantic-ui-react';
import './App.css';
import { Ingredients } from './Ingredients';
import { RecipeInfo } from './RecipeInfo';
import { RecipesMenu } from './RecipesMenu';

function App() {
  const [isView, setIsView] = useState(true);
  const [recipeList, setRecipeList] = useState(["French Onion Soup", "Pasta"]);
  const [activeRecipeIndex, setActiveRecipeIndex] = useState(0);

  const handleAddRecipe = () => {
    setRecipeList([...recipeList, "New Recipe"])
  }

  // not used yet,
  // when remove need to reset the active recipe index
  const handleRemoveRecipe = (recipeToRemove) => {
        setRecipeList(recipeList.filter((recipe) => recipe !== recipeToRemove))
        setActiveRecipeIndex()
  }

  return (
    <>
    <div id="app-container">

      <div id="left-hand">
        <div id="left-head">
          <h3 id="my-recipe">My Recipes</h3>
          {isView ? <></> : <Button icon="add" size='mini' circular compact onClick={handleAddRecipe}/>}
        </div>
        <RecipesMenu recipeList={recipeList} activeRecipeIndex={activeRecipeIndex} setActiveRecipeIndex={setActiveRecipeIndex}/>

        <Button.Group className='mode'>
            <Button active = {!isView} onClick={() => setIsView(false)}>Edit</Button>
            <Button active = {isView} onClick={() => setIsView(true)}>View</Button>
        </Button.Group>
      </div>

      <div id="center">
        <RecipeInfo isView={isView} recipeList={recipeList} setRecipeList={setRecipeList}/>
        {isView ? <></> : <Button id="deleteRecipe" color="red">Delete Recipe</Button>}
      </div>

      <div id="right-hand">
        <Ingredients isView={isView}/>
      </div>

    </div>
    </>
  );
}

export default App;
