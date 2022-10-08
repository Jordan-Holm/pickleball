import TournamentShow from './TournamentShow';
import { Container, Row, Col } from 'react-bootstrap';

const TournamentList = ({ tournaments }) => (
  <Container>
    <Row md='4' sm='12'>
      { tournaments.map( t => 
        <Col key={t.id}>
          <TournamentShow
            {...t}
          />
        </Col>
      )}
    </Row>
  </Container>
)

export default TournamentList;