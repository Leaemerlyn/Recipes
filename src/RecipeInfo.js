import { Button, Container, Header, Icon, Label, Form } from "semantic-ui-react";
import "./RecipeInfo.css"

export function RecipeInfo (){
    return(
        <>
        <Container className="recipe-info" fluid>
            <Header as="h2">French Onion Soup</Header>
            <Label.Group size="medium">
                <Label>30 minutes <Icon name="delete"/></Label>
                <Label>4 minutes <Icon name="delete"/></Label>
                <Label>30 minutes <Icon name="delete"/></Label>
                <Label>4 minutes <Icon name="delete"/></Label>
                <Label>30 minutes <Icon name="delete"/></Label>
                <Label>4 minutes <Icon name="delete"/></Label>
                <Label>30 minutes <Icon name="delete"/></Label>
                <Label>4 minutes <Icon name="delete"/></Label>
                <Button icon="add" size="mini" compact circular/>
            </Label.Group>

            <Form className="form">
                <Form.TextArea label="Steps"/>
            </Form>

            <Button color="red">Delete Recipe</Button>
        </Container>

        </>
    )
}