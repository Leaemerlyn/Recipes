import { Card, Container, Header } from "semantic-ui-react";
import "./About.css"

export function About () {
    return (
    <div className="About">
        <Container text>
            <Header as={'h1'}> &#127835; Thank you for checking out RecipeBook &#127860;</Header>
            <p>
                I'm Lea Emerlyn. I designed and developed this web app using the React library Semantic UI. I wanted to make an app that allows home chefs to record recipes that they created. I made this app as close as possible to "what you see is what you get." When users toggle from edit to view mode, nothing really changes except for remove buttons and text boxes. For now, this is only a front-end web app. I hope to incorporate more features in the future including allowing users to login, favorite recipes and send recipe links to others. 
                <br/><br/>
            </p>
        </Container>
        <div className="cards">
            <Card link href="https://leaemerlyn.com" target="_blank">
                <Card.Content>
                    <Card.Header>Portfolio</Card.Header>
                    <Card.Description>
                        leaemerlyn.com
                    </Card.Description>
                </Card.Content>
            </Card>

            <Card link href="mailto:leaodovia@gmail.com" target="_blank">
                <Card.Content>
                    <Card.Header>Email</Card.Header>
                    <Card.Description>
                        leaodovia@gmail.com
                    </Card.Description>
                </Card.Content>
            </Card>

            <Card link href="https://www.linkedin.com/in/leaemerlyn/" target="_blank">
                <Card.Content>
                    <Card.Header>LinkedIn</Card.Header>
                    <Card.Description>
                        https://www.linkedin.com/in/leaemerlyn/
                    </Card.Description>
                </Card.Content>
            </Card>

            <Card link href="https://github.com/Leaemerlyn" target="_blank">
                <Card.Content>
                    <Card.Header>Github</Card.Header>
                    <Card.Description>
                        https://github.com/Leaemerlyn
                    </Card.Description>
                </Card.Content>
            </Card>
        </div>

    </div>

    )
}