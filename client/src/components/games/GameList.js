import GameShow from './Gameshow';
import { Container, Row, Col } from 'react-bootstrap';

const GameList = ({ games, tournamentId }) => (
  <Container>
    <Row md='4' sm='12'>
      { games.map( g => 
        <Col key={g.id}>
          <GameShow
            {...g}
            tournamentId={tournamentId}
          />
        </Col>
      )}
    </Row>
  </Container>
)

export default GameList;