import { Container } from "semantic-ui-react";
import { Menu } from "semantic-ui-react";
import "./RecipesMenu.css"

export function RecipesMenu({recipeList, activeRecipeIndex, setActiveRecipeIndex}){

    const handleMenuItemClick = (index) => {
        setActiveRecipeIndex(index);
    }

    const generateRecipeList = () => {
        return (recipeList.map((recipe, index) => 
        <Menu.Item name={recipe} active={activeRecipeIndex === index} onClick={() => {handleMenuItemClick(index)}}/>))
    }

    return(
        <>
        <Container textAlign="left" fluid className="recipe-list">
            <Menu secondary vertical>
                {generateRecipeList()}
            </Menu>
        </Container>
        </>
    )
}
