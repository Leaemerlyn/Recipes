import { Card, Container, Header, Image } from "semantic-ui-react";
import "./About.css"

export function About () {
    return (
    <div className="About">
        <Container text>
            <Header as={'h1'}> &#127835; Thank you for checking out RecipeBook &#127860;</Header>
            <p>
                I created this page becase I love eat food and I like to cook. I hope this app is good hehehehhehehe. Please subscribe and like
            </p>
        </Container>
        <div className="cards">
            <Card link>
                <Card.Content>
                    <Card.Header>Portfolio</Card.Header>
                    <Card.Description>
                        leaemerlyn.com
                    </Card.Description>
                </Card.Content>
            </Card>

            <Card link>
                <Card.Content>
                    <Card.Header>Email</Card.Header>
                    <Card.Description>
                        leaodovia@gmail.com
                    </Card.Description>
                </Card.Content>
            </Card>

            <Card link>
                <Card.Content>
                    <Card.Header>LinkedIn</Card.Header>
                    <Card.Description>
                        https://www.linkedin.com/in/leaemerlyn/
                    </Card.Description>
                </Card.Content>
            </Card>

            <Card link>
                <Card.Content>
                    <Card.Header>Github</Card.Header>
                    <Card.Description>
                        leaodovia@gmail.com
                    </Card.Description>
                </Card.Content>
            </Card>
        </div>

    </div>

    )
}