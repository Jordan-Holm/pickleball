import { Card, Button, ListGroup } from 'react-bootstrap';
import { GameConsumer } from '../../providers/GameProvider';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const GameShow = ({ id, placements, gtime, tournamentId }) => {
  const [showing, setShow] = useState(false)

  return (
    <>
      <Card style={{ width:'12rem' }}>
        <Card.Body>
          <Card.Title>{placements}</Card.Title>
          <Card.Subtitle 
            className='mb-2 text-muted'
          >
              {gtime}
          </Card.Subtitle>
        </Card.Body>
        <ListGroup 
          className='list-group-flush'
        >
          <ListGroup.Item>{tournamentId}</ListGroup.Item>
          
        </ListGroup>
        <Card.Body>
          {/* <Card.Link>
            <Link to={`/tournaments/${id}`}>
              <Button>
                View
              </Button>
            </Link>
          </Card.Link> */}
        </Card.Body>
      </Card>
    </>
  )
}

const ConnectedGameShow = (props) => (
  <GameConsumer>
    { value => <GameShow {...props} {...value} />}
  </GameConsumer>
)

export default ConnectedGameShow;