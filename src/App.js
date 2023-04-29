import React, { Component, useState, useEffect } from 'react'
import { Button, Icon, Menu, Segment} from 'semantic-ui-react';
import './App.css';
import { Ingredients } from './Ingredients';
import { RecipeInfo } from './RecipeInfo';
import { RecipesMenu } from './RecipesMenu';
import { About } from './About';

const newRecipeTemplate = {
  name: "New Recipe",
  ingredients: [{name: "New Ingredients", amount: "Amount"}],
  labels: ["Add A Label"],
  steps: "Create a new recipe! \n \n Click on the edit button on the lower left hand side \n \n Click on the recipe title to edit the recipe title \n \n Your new recipe is saved automatically, so just switch back to view mode!"
}

let allRecipes =([
  {
    name: "French Onion Soup",
    ingredients: [{name: "Onion", amount: "1 cup"}],
    labels: ["30 minutes", "quick"],
    steps: "Here are some steps"
  },
  {
    ...newRecipeTemplate
  }
])

function App() {
  const [isView, setIsView] = useState(true);
  const [recipeList, setRecipeList] = useState(allRecipes.map((data) => data.name));
  const [activeRecipeIndex, setActiveRecipeIndex] = useState(0);
  const [activeRecipeData, setActiveRecipeData] = useState({...allRecipes[0]});
  const [recipePage, setRecipePage] = useState(true)

  const updateSavedRecipeData = (activeRecipeIndex, newData) => {
    allRecipes[activeRecipeIndex] = {
      ...allRecipes[activeRecipeIndex], ...newData
    };
  }

  const handleAddRecipe = () => {
    setRecipeList([...recipeList, "New Recipe"])
    allRecipes.push({...newRecipeTemplate});
  }

  useEffect(() => {
    updateSavedRecipeData(activeRecipeIndex, activeRecipeData);
  })

  const setActiveRecipeIndexAndUpdateData = (activeIndex) => {
    setActiveRecipeIndex(activeIndex);
    setActiveRecipeData({...allRecipes[activeIndex]})
  }

  const setActiveRecipeName = (newName) => {
    recipeList[activeRecipeIndex] = newName;
    setActiveRecipeData({...activeRecipeData, name: newName});
  }

  // not used yet,
  // when remove need to reset the active recipe index
  const handleRemoveRecipe = (recipeIndexToRemove) => {
    setRecipeList(recipeList.filter((recipe, index) => index !== recipeIndexToRemove));
    allRecipes = allRecipes.filter((recipe, index) => index !== recipeIndexToRemove);
    setActiveRecipeIndex(Math.max(recipeIndexToRemove - 1, 0));
    setActiveRecipeData(allRecipes[activeRecipeIndex]);
    console.log(allRecipes);
  }

  return (
    <>
    <Menu pointing size='small'>
      <Menu.Item><img src="favicon.ico"/></Menu.Item>
      <Menu.Item active={recipePage} link onClick={() => setRecipePage(true)}>Recipe Book</Menu.Item>
      <Menu.Item active={!recipePage} link onClick={() => setRecipePage(false)}>About</Menu.Item>
    </Menu>
    {recipePage ? 

    <div id="app-container">
      <div id="left-hand">
        <div id="left-head">
          <h3 id="my-recipe">My Recipes</h3>
          {isView ? <></> : <Button icon="add" size='mini' circular compact onClick={handleAddRecipe}/>}
        </div>
        <RecipesMenu recipeList={recipeList} activeRecipeIndex={activeRecipeIndex} setActiveRecipeIndex={setActiveRecipeIndexAndUpdateData} />

        <Button.Group className='mode'>
            <Button active = {!isView} onClick={() => setIsView(false)}><Icon name="edit outline"/>Edit</Button>
            <Button active = {isView} onClick={() => setIsView(true)}><Icon name="food"/>View</Button>
        </Button.Group>
      </div>

      <div id="center">
        <RecipeInfo isView={isView} setActiveRecipeData={setActiveRecipeData} setActiveRecipeName={setActiveRecipeName} activeRecipeData={activeRecipeData} />
        {isView ? <></> : <Button id="deleteRecipe" color="red" onClick={()=> {handleRemoveRecipe(activeRecipeIndex)}}>Delete Recipe</Button>}
      </div>

      <div id="right-hand">
        <Ingredients isView={isView} setActiveRecipeData={setActiveRecipeData} activeRecipeData={activeRecipeData}/>
      </div>

    </div>

    :

    <About/>

  }
    </>
  );
}

export default App;
