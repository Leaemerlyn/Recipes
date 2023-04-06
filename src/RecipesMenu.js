import { Container } from "semantic-ui-react";
import { Menu } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import "./RecipesMenu.css"


export function RecipesMenu(){
    return(
        <>
        <Container textAlign="left" fluid className="recipe-list">
            <Menu secondary vertical>
                <Menu.Item name="french onion soup" active/>
                <Menu.Item name="pasta" link/>
                <Menu.Item name="rice"/>
                <Menu.Item name="rice"/>
                <Menu.Item name="rice"/>
                <Menu.Item name="rice"/>
                <Menu.Item name="rice"/>
                <Menu.Item name="pasta"/>
                <Menu.Item name="rice"/>
                <Menu.Item name="rice"/>
                <Menu.Item name="rice"/>
                <Menu.Item name="rice"/>
                <Menu.Item name="rice"/>
                <Menu.Item name="pasta"/>
                <Menu.Item name="rice"/>
                <Menu.Item name="rice"/>
                <Menu.Item name="rice"/>
                <Menu.Item name="rice"/>
                <Menu.Item name="rice"/>
                <Menu.Item name="rice"/>
                <Menu.Item name="rice"/>
                <Menu.Item name="rice"/>
            </Menu>
        </Container>
        </>
    )
}