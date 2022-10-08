import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const GameContext = React.createContext();
export const GameConsumer = GameContext.Consumer;



const GameProvider = ({ children }) => {
    const [games, setGames] = useState([])
    const [errors, setErrors] = useState(null)
    // const navigate = useNavigate()

    const getAllGames = (tournamentId) => {
        axios.get(`/api/tournaments/${tournamentId}/games`)
            .then(res => setGames(res.data))
            .catch(err => {
                setErrors({ 
                    variant: 'danger',
                    msg: err.response.data.errors[0]
                })
            })
    }


    const addGame = (tournamentId, game) => {
        axios.post(`api/tournaments/${tournamentId}/games`, { game })
            .then(res => setGames([...games, res.data]))
            .catch( err => {
                setErrors({ 
                    variant: 'danger',
                    msg: Object.keys(err.response.data.errors)[0] + " " + Object.values(err.response.data.errors)[0][0]
                })
            })
    }

    const updateGame = (id, tournamentId, game) => {
        axios.put(`/api/tournaments/${tournamentId}/games/${id}`)
            .then(res => setGames([...games, res.data]))
            .catch( err => {
                setErrors({ 
                    variant: 'danger',
                    msg: Object.keys(err.response.data.errors)[0] + " " + Object.values(err.response.data.errors)[0][0]
                })
            })
    }

    const deleteGame = (id, tournamentId) => {
        axios.delete(`api/tournaments/${tournamentId}/games/${id}`)
            .then(res => {
                setGames(games.filter( g => g.id !== id))
            })
            .catch(err => {
                setErrors({ 
                    variant: 'danger',
                    msg: err.response.data.errors[0]
                })
            })
    }

    return(
        <GameContext.Provider value={{
            games,
            errors,
            setErrors,
            getAllGames,
            addGame,
            updateGame,
            deleteGame
        }}>
            { children }
        </GameContext.Provider>
    )
}

export default GameProvider;