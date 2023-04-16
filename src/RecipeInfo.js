import { Button, Container, Header, Icon, Label, Form, Visibility, Input } from "semantic-ui-react";
import "./RecipeInfo.css"
import { useState } from "react";

export function RecipeInfo ({isView}){
    const [tags, setTags] = useState(["30 mins", "4 mins"]);
    const [stepValue, setStepValue] = useState("Recipe here is great hahaha");
    const [isAddingNewTag, setIsAddingNewTag] = useState(false);
    const [tagValue, setTagValue] = useState("Press enter to add");
    const [recipeTitle, setRecipeTitle] = useState("French Onion Soup")

    const generateRecipeSteps = () => {
        return (<p style={{whiteSpace: "pre-line"}}>{stepValue.toString()}</p>)
    }

    // tags
    const generateTags = () =>{
        if (isView){
            return (tags.map((tag) => 
            <Label> {tag}</Label>
        ))
        } else{
            return(tags.map((tag, index) => 
            <Label removeIcon="delete" onRemove={() => handleRemoveTag(index)} content={tag}/>
        ))
        }
    }

    const handleAddTags = () => {
        isAddingNewTag? setIsAddingNewTag(false) : setIsAddingNewTag(true);
    }

    const handleChangeTag = (event, data) => {
        setTagValue(data.value);
    }

    const handleSubmit = () => {
        isAddingNewTag? setIsAddingNewTag(false) : setIsAddingNewTag(true);
        setTags([...tags, tagValue])
        setTagValue("press enter to add");
    }

    const handleRemoveTag = (index) => {
        setTags(tags.toSpliced(index, 1));
    }

    //Title
    const handleTitleChange = (event, data) => {
        setRecipeTitle(data.value);
    }
    
    return(
        <>
        <Container className="recipe-info" fluid>
            {isView? <Header as="h2" fluid>{recipeTitle}</Header>: <Input as="h2" fluid value={recipeTitle} size="huge" transparent onChange={handleTitleChange}/>}
            <Label.Group size="medium">
                {generateTags()}
                {!isView && !isAddingNewTag ? <Button icon="add" size="mini" compact circular onClick={handleAddTags}/> : <></>}

                {isAddingNewTag && !isView? 
                <Form id="add-tag" onSubmit={handleSubmit} >
                    <Form.Input size="mini" placeholder={tagValue} onChange={handleChangeTag}/>
                </Form> : <></>}
            </Label.Group>

            <Header as="h3">Steps</Header>
            {isView ? 
                generateRecipeSteps() :
                <Form className="recipe-box">
                    <Form.TextArea value={stepValue} onChange={(event, data) => setStepValue(data.value)} rows={15}/>
                </Form>}
        </Container>

        </>
    )
}