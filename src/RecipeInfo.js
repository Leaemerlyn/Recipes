import { Button, Container, Header, Icon, Label, Form, Visibility, Input } from "semantic-ui-react";
import "./RecipeInfo.css"
import { useState} from "react";

export function RecipeInfo ({isView, setActiveRecipeData, setActiveRecipeName, activeRecipeData}){
    const [isAddingNewTag, setIsAddingNewTag] = useState(false);
    const [tagValue, setTagValue] = useState("Press enter to add");
    const setTags = (tags) => {
        setActiveRecipeData({...activeRecipeData, labels: tags})
    }

    const generateRecipeSteps = () => {
        return (<p style={{whiteSpace: "pre-line"}}>{activeRecipeData.steps.toString()}</p>)
    }

    // tags
    const generateTags = () =>{
        if (isView){
            return (activeRecipeData.labels.map((tag) => 
            <Label> {tag}</Label>
        ))
        } else{
            return(activeRecipeData.labels.map((tag, index) => 
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
        setTags([...activeRecipeData.labels, tagValue]);
        setTagValue("press enter to add");
    }

    const handleRemoveTag = (index) => {
        setTags(activeRecipeData.labels.toSpliced(index, 1));
    }

    //Title
    const handleTitleChange = (event, data) => {
        setActiveRecipeName(data.value);
    }
    
    return(
        <>
        <Container className="recipe-info" fluid>
            {isView? <Header as="h2" fluid>{activeRecipeData.name}</Header>: <Input as="h2" fluid value={activeRecipeData.name} size="huge" transparent onChange={handleTitleChange}/>}
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
                    <Form.TextArea value={activeRecipeData.steps} onChange={(event, data) => setActiveRecipeData({...activeRecipeData, steps: data.value})} rows={15}/>
                </Form>}
        </Container>

        </>
    )
}