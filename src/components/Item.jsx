import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

function Item({ item }) {
    const navigate = useNavigate();

    return (
        <Col md={2} sm={6} xs={12} className="mb-4 d-flex justify-content-center">
            <Card style={{ width: '100%', height: '100%' }}>
                <Card.Img 
                    variant="top" 
                    src={item.imagen} 
                    alt={item.nombre} 
                    style={{ height: '100px', objectFit: 'cover' }} 
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                    <div>
                        <Card.Title style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
                        {item.nombre}
                        </Card.Title>
                        <Card.Text style={{ fontSize: '0.85rem', color: '#555' }}>
                        </Card.Text>
                    </div>
                    <Button variant="primary" size="sm" onClick={() => navigate(`/product/${item.id}`)}
                    >
                        Ver Más
                    </Button>
                </Card.Body>
            </Card>
        </Col>        
        );
    }

export default Item