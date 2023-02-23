import { Card } from "react-bootstrap";

const PortCard = ({link, img, title, desc}) => {

    return <Card as='a' href={link}>
        <Card.Header>{title}</Card.Header>
        <Card.Img src={img} alt='showcase of a website'/>
        <Card.Text>{desc}</Card.Text>
    </Card>
}

export default PortCard