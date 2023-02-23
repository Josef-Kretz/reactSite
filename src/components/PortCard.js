import { Card } from "react-bootstrap";

const PortCard = ({ link, img, title, desc }) => {

    return <Card as='a' href={link}>
        <Card.Img src={img} alt='showcase of a website' />
        <Card.ImgOverlay>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{desc}</Card.Text>
        </Card.ImgOverlay>
    </Card>
}

export default PortCard