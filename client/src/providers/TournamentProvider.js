import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const TournamentContext = React.createContext();

export const TournamentConsumer = TournamentContext.Consumer;

const TournamentProvider = ({ children }) => {
  const [tournaments, setTournaments] = useState([])
  const [errors, setErrors] = useState(null)
  const navigate = useNavigate()

  const getAllTournaments = () => {
    axios.get('/api/tournaments')
      .then(res => setTournaments(res.data))
      .catch(err => {
        setErrors({ 
          variant: 'danger',
          msg: err.response.data.errors[0]
        })
      })
  }

  const addTournament = (tournament) => {
    axios.post('/api/tournaments', { tournament })
      .then(res => setTournaments([...tournaments, res.data]))
      .catch(err => {
        setErrors({ 
          variant: 'danger',
          msg: Object.keys(err.response.data.errors)[0] + " " + Object.values(err.response.data.errors)[0][0]
        })
      })
  }

  const updateTournament = (id, tournament) => {
    axios.put(`/api/tournaments/${id}`, { tournament })
      .then( res => {
        const newUpdatedTournaments = tournaments.map( c => {
          if (c.id === id) {
            return res.data 
          }
          return c 
        })
        setTournaments(newUpdatedTournaments)
        navigate('/tournaments')
      })
      .catch(err => {
        setErrors({ 
          variant: 'danger',
          msg: Object.keys(err.response.data.errors)[0] + " " + Object.values(err.response.data.errors)[0][0]
        })
      })
  }

  const deleteTournament = (id) => {
    axios.delete(`/api/tournaments/${id}`)
      .then(res => {
        setTournaments(tournaments.filter(c => c.id !== id))
      })
      .catch(err => {
        setErrors({ 
          variant: 'danger',
          msg: err.response.data.errors[0]
        })
      })
  }

  return (
    <TournamentContext.Provider value={{
      tournaments, 
      errors, 
      setErrors, 
      getAllTournaments,
      addTournament,
      updateTournament, 
      deleteTournament, 
    }}>
      { children }
    </TournamentContext.Provider>
  )
}

export default TournamentProvider;