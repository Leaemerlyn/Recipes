import { Button, Container, Header, Icon, Label, Form, Visibility } from "semantic-ui-react";
import "./RecipeInfo.css"
import { useState } from "react";

export function RecipeInfo ({isView}){
    const [tags, setTags] = useState(["30 mins", "4 mins"]);
    const [value, setValue] = useState("test");

    const generateTags = () =>{
        return(tags.map((tag) => 
            <Label> {tag} {isView ? <></> : <Icon name="delete"/>} </Label>
        ))
    }

    const addTags = (tagLabel) => {
        setTags([...tags, tagLabel])
    }

    const generateRecipeSteps = () => {
        return (<p>{value.toString()}</p>)
    }

    return(
        <>
        <Container className="recipe-info" fluid>
            <Header as="h2">French Onion Soup</Header>
            <Label.Group size="medium">
                {generateTags()}
                {isView ? <></>: <Button icon="add" size="mini" compact circular/>}
            </Label.Group>

            <Header as="h3">Steps</Header>
            {isView ? 
                generateRecipeSteps() :
                <Form className="form">
                    <Form.TextArea value={value} onChange={(event, data) => setValue(data.value)}/>
                </Form>}
        </Container>

        </>
    )
}