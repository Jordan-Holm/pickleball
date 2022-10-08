import GameShow from './GameShow';
import { Container, Row, Col } from 'react-bootstrap';

const GameList = ({ games }) => (
  <Container>
    <Row md='4' sm='12'>
      { games.map( g => 
        <Col key={g.id}>
          <GameShow
            {...g}
          />
        </Col>
      )}
    </Row>
  </Container>
)

export default GameList;