import { useEffect, useState } from "react";
import { act } from "react-dom/test-utils";
import { Button, List, Form } from "semantic-ui-react";

export function Ingredients ({isView, setActiveRecipeData, activeRecipeData}){
    const [isAddingNewIngredient, setIsAddingNewIngredient] = useState(false);
    const [newIngredientValue, setNewIngredientValue] = useState("Ingredient");
    const [newAmountValue, setNewAmountValue] = useState("Amount");

    const handleDeleteIngredient = (ingredientToRemove) => {
        setActiveRecipeData({...activeRecipeData, ingredients: activeRecipeData.ingredients.filter((ingredient) => ingredient !== ingredientToRemove)})
    }

    const handleAddIngredient = () => {
        isAddingNewIngredient ? setIsAddingNewIngredient(false) : setIsAddingNewIngredient(true);
    }

    const handleAddingNewIngredientChange = (event, data) => {
        setNewIngredientValue(data.value);
    }

    const handleAddingNewAmountChange = (event, data) => {
        setNewAmountValue(data.value);
    }

    const handleSubmit = () => {
        isAddingNewIngredient ? setIsAddingNewIngredient(false) : setIsAddingNewIngredient(true);
        setActiveRecipeData({...activeRecipeData, ingredients: [...activeRecipeData.ingredients, {name: newIngredientValue, amount: newAmountValue}]});
        setNewIngredientValue("Ingredient");
        setNewAmountValue("Amount");
    }

    const generateIngredientsList = () => {
        return (activeRecipeData.ingredients.map((ingredient) => 
            <List.Item>
                <List.Content floated='left'>{isView ? <></> : <Button icon="delete" size="mini" compact onClick={() => handleDeleteIngredient(ingredient)}/>} {ingredient.name} </List.Content>
                <List.Content floated="right"> {ingredient.amount} </List.Content>
            </List.Item>
        ))
    }

    return(
        <>
        <h3>Ingredients</h3>
        <List verticalAlign="middle" relaxed divided={false}>
            {generateIngredientsList()}
        </List>
        {!isView && !isAddingNewIngredient ? <Button size="small" onClick={handleAddIngredient}>Add Ingredient</Button> : <></> }
        {isAddingNewIngredient && !isView? 
            <Form onSubmit={handleSubmit}>
                <Form.Group widths={2}>
                    <Form.Input size="mini" placeholder={newIngredientValue} onChange={handleAddingNewIngredientChange}/>
                    <Form.Input size="mini" placeholder={newAmountValue} onChange={handleAddingNewAmountChange}/>
                </Form.Group>
                <Form.Button icon="add" size="mini" content="Add" floated="right" color="teal"/>
            </Form> 
            : 
            <></>}

        </>
    )
}