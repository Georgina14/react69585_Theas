import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router';

function Item({ item }) {
    const navigate = useNavigate()

    return (
        <Col lg={2}>
        <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>
                    {item.categoria}
                </Card.Text>
                <Button 
                variant="primary"
                onClick={() => navigate(`/product/${item.id}`)}
                >
                Ver Mas
                </Button>
            </Card.Body>
        </Card>
        </Col>
        
    );
}

export default Item