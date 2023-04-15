import { useState } from "react";
import { Button, List, ListContent, Image } from "semantic-ui-react";

export function Ingredients (props){
    const [ingredientsList, setIngredientList] = useState([
        {ingredientName: "onion", amount: "1 cup"},
        {ingredientName: "pepper", amount: "2 cups"}
    ]);

    const handleDeleteIngredient = (ingredientToRemove) => {
        setIngredientList(ingredientsList.filter((ingredient) => ingredient !== ingredientToRemove));
    }

    const handleAddIngredient = () => {
        
    }

    const generateIngredientsList = () => {
        return (ingredientsList.map((ingredient) => 
            <List.Item>
                <List.Content floated='left'>{props.isView ? <></> : <Button icon="delete" size="mini" compact onClick={() => handleDeleteIngredient(ingredient)}/>} {ingredient.ingredientName} </List.Content>
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
        {props.isView? <></> : <Button size="small">Add Ingredient</Button>}

        </>
    )
}