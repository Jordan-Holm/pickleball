import TeamShow from './TeamShow';
import { Container, Row, Col } from 'react-bootstrap';

const TeamList = ({ teams }) => (
  <Container>
    <Row md='4' sm='12'>
      { teams.map( t => 
        <Col key={t.id}>
          <TeamShow
            {...t}
          />
        </Col>
      )}
    </Row>
  </Container>
)

export default TeamList;