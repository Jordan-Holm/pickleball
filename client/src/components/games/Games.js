import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import GameList from './GameList';
import GameForm from './GameForm';
import { GameConsumer } from '../../providers/GameProvider';
import { AuthConsumer } from '../../providers/AuthProvider';

const Games = ({ user, games, getAllGames }) => {
    const [adding, setAdd] = useState(false);

    useEffect( () => {
        getAllGames()
    }, [])

    const userVerification = () => {
        if (user) {
            return (
                <>
                    <Button
                        onClick={() => setAdd(true)}
                    >
                        +
                    </Button>

                    <Modal 
                        show={adding}
                        onHide={() => setAdd(false)}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Add A Game</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <GameForm
                                setAdd={setAdd}
                            />
                        </Modal.Body>
                    </Modal>
                </>
            )
        }
    }

    return(
        <>
            { userVerification() }
            <h1>Games</h1>
            <GameList 
                games={games}
            />
        </>
    )
}

const ConnectedGame = (props) => (
    <GameConsumer>
        { value => <Games {...props} {...value} /> }
    </GameConsumer>
)

const ConnectedGameAuth = (props) => (
    <AuthConsumer>
        { value => <ConnectedGame {...props} {...value} />}
    </AuthConsumer>
)

export default ConnectedGameAuth;