import { useState, useEffect } from 'react';
import { TeamConsumer } from '../../providers/TeamProvider'; 
import { Button, Form } from 'react-bootstrap';
import { useParams, useLocation } from 'react-router-dom';
import Flash from '../shared/Flash';

const TeamForm = ({ addTeam, setAdd, updateTeam, errors, setErrors }) => {
  const [team, setTeam] = useState({ team_name: '', player_1: '', player_2: '' })
  const { id } = useParams();
  const location = useLocation()
   
  useEffect( () => {
    if (id) {
      const { team_name, player_1, player_2 } = location.state 
      setGame({ team_name, player_1, player_2 })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateTeam(id, team)
    } else {
      addTeam(team)
      setAdd(false)
    }
    setTeam({ team_name: '', player_1: '', player_2: '' })
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
          <Form.Label>Team Name</Form.Label>
          <Form.Control 
            name='name'
            value={team.name}
            onChange={(e) => setTeam({ ...team, name: e.target.value })}
            required  
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Player 1</Form.Label>
          <Form.Control 
            name='player_1'
            value={team.player_1}
            onChange={(e) => setTeam({ ...team, player_1: e.target.value })}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Player 2</Form.Label>
          <Form.Control 
            name='player_2'
            value={team.player_2}
            onChange={(e) => setTeam({ ...team, player_2: e.target.value })}
          />
        </Form.Group>
   
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedTeamShow = (props) => (
  <TeamConsumer>
    { value => <TeamForm {...props} {...value} />}
  </TeamConsumer>
)

export default ConnectedTeamShow;