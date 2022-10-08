import { Card, Button, ListGroup, Container, Row, Col } from 'react-bootstrap';
import { TournamentConsumer } from '../../providers/TournamentProvider';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const TournamentShow = ({ id, tname, division, when, where, gender }) => {
  const [showing, setShow] = useState(false)

  return (
    <>
      <Card style={{ width:'12rem' }}>
        <Card.Body>
          <Card.Title>{tname}</Card.Title>
          <Card.Subtitle 
            className='mb-2 text-muted'
          >
              {division}
          </Card.Subtitle>
        </Card.Body>
        <ListGroup 
          className='list-group-flush'
        >
          <ListGroup.Item>{gender}</ListGroup.Item>
          <ListGroup.Item>{when}</ListGroup.Item>
          <ListGroup.Item>{where}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link>
            <Link to={`/tournaments/${id}`}>
              <Button>
                View
              </Button>
            </Link>
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  )
}

const ConnectedTournamentShow = (props) => (
  <TournamentConsumer>
    { value => <TournamentShow {...props} {...value} />}
  </TournamentConsumer>
)

export default ConnectedTournamentShow;