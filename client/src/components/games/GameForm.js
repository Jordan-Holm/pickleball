import { useState, useEffect } from 'react';
import { GameConsumer } from '../../providers/GameProvider'; 
import { Button, Form } from 'react-bootstrap';
import { useParams, useLocation } from 'react-router-dom';
import Flash from '../shared/Flash';

const GameForm = ({ addGame, setAdd, updateGame, errors, setErrors }) => {
  const [game, setGame] = useState({ placements: '', gtime: '' })
  const { id } = useParams();
  const location = useLocation()
   
  useEffect( () => {
    if (id) {
      const { placements, gtime } = location.state 
      setGame({ placements, gtime })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateGame(id, game)
    } else {
      addGame(game)
      setAdd(false)
    }
    setGame({ placement: '', gtime: '' })
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
          <Form.Label>Game Name</Form.Label>
          <Form.Control 
            name='name'
            value={game.name}
            onChange={(e) => setGame({ ...game, name: e.target.value })}
            required  
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Placement</Form.Label>
          <Form.Control 
            name='placement'
            value={game.placement}
            onChange={(e) => setGame({ ...game, placement: e.target.value })}
          />
        </Form.Group>
   
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedGameShow = (props) => (
  <GameConsumer>
    { value => <GameForm {...props} {...value} />}
  </GameConsumer>
)

export default ConnectedGameShow;