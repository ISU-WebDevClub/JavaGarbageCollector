import Card from 'react-bootstrap/Card';

function CardiZ(props) {
    return (
        <Card style={{ width: '18.rem' }}>
            <Card.Body>
                <Card.Title>
                    {props.title}
                </Card.Title>
            </Card.Body>
        </Card>
    );
}

export default CardiZ;