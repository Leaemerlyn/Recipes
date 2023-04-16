import React, { Component, useState } from 'react'
import { Button, Icon} from 'semantic-ui-react';
import './App.css';
import { Ingredients } from './Ingredients';
import { RecipeInfo } from './RecipeInfo';
import { RecipesMenu } from './RecipesMenu';

function App() {
  const [isView, setIsView] = useState(true);
  const [recipeList, setRecipeList] = useState(["French Onion Soup hahahhahahha", "Pasta"]);
  const [activeRecipeIndex, setActiveRecipeIndex] = useState(0);
  const [allRecipes, setAllRecipes] = useState([
    {
      name: "New Recipe",
      ingredients: {name: "New Ingredients", amount: "Amount"},
      labels: ["Add A Label"],
      steps: "Create a new recipe! Click on the title to edit the recipe name"
    },
    {
      name: "French Onion Soup",
      ingredients: {name: "Onion", amount: "1 cup"},
      labels: ["30 minutes", "quick"],
      steps: "Here are some steps"
    }
  ])

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

        <Button.Group className='mode' color='teal'>
            <Button active = {!isView} onClick={() => setIsView(false)}><Icon name="edit outline"/>Edit</Button>
            <Button active = {isView} onClick={() => setIsView(true)}><Icon name="food"/>View</Button>
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
