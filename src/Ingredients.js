import { Button, List, ListContent, Image } from "semantic-ui-react";

export function Ingredients (){
    return(
        <>
        <h3>Ingredients</h3>
        <List verticalAlign="middle" relaxed divided={false}>
            <List.Item>
                <List.Content floated='left'><Button icon="delete" size="mini" compact/> Onion </List.Content>
                <List.Content floated="right" >1 cup</List.Content>
            </List.Item>

            <List.Item>
                <List.Content floated='left'><Button icon="delete" size="mini" compact/> Onion </List.Content>
                <List.Content floated="right">1 cup</List.Content>
            </List.Item>
            
        </List>
        <Button size="small">Add Ingredient</Button>

        </>
    )
}