import { useState, useEffect } from 'react';
import { TournamentConsumer } from '../../providers/TournamentProvider'; 
import { Button, Form } from 'react-bootstrap';
import { useParams, useLocation } from 'react-router-dom';
import Flash from '../shared/Flash';

const TournamentForm = ({ addTournament, setAdd, updateTournament, errors, setErrors }) => {
  const [tournament, setTournament] = useState({ tname: '', division: '', where: '', when: '', gender: '' })
  const { id } = useParams();
  const location = useLocation()
   
  useEffect( () => {
    if (id) {
      const { tname, division, where, when, gender } = location.state 
      setTournament({ tname, division, where, when, gender })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateTournament(id, tournament)
    } else {
      addTournament(tournament)
      setAdd(false)
    }
    setTournament({ tname: '', division: '', where: '', when: '', gender: '' })
  }

  return (
    <>
      { errors ?
        <Flash
          variant={errors.variant}
          msg={errors.msg}
          setErrors={setErrors}
        />
      : null
      }
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Tournament Name</Form.Label>
          <Form.Control 
            name='name'
            value={tournament.name}
            onChange={(e) => setTournament({ ...tournament, name: e.target.value })}
            required  
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Division</Form.Label>
          <Form.Control 
            name='division'
            value={tournament.division}
            onChange={(e) => setTournament({ ...tournament, division: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Where</Form.Label>
          <Form.Control 
            name='where'
            value={tournament.where}
            onChange={(e) => setTournament({ ...tournament, where: e.target.value })}
            required  
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>When</Form.Label>
          <Form.Control 
            name='when'
            value={tournament.when}
            onChange={(e) => setTournament({ ...tournament, when: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Gender</Form.Label>
          <Form.Control 
            name='gender'
            value={tournament.gender}
            onChange={(e) => setTournament({ ...tournament, gender: e.target.value })}
            required  
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedTournamentShow = (props) => (
  <TournamentConsumer>
    { value => <TournamentForm {...props} {...value} />}
  </TournamentConsumer>
)

export default ConnectedTournamentShow;