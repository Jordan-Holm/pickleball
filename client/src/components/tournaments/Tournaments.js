import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

import TournamentList from './TournamentList';
import TournamentForm from './TournamentForm';
import { TournamentConsumer } from '../../providers/TournamentProvider';
import { AuthConsumer } from '../../providers/AuthProvider';

const Tournaments = ({ user, tournaments, getAllTournaments }) => {
    const [adding, setAdd] = useState(false);

    useEffect( () => {
        getAllTournaments()
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
                            <Modal.Title>Add A Tournament</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <TournamentForm
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
            <h1>Tournaments</h1>
            <TournamentList 
                tournaments={tournaments}
            />
        </>
    )
}

const ConnectedTournament = (props) => (
    <TournamentConsumer>
        { value => <Tournaments {...props} {...value} /> }
    </TournamentConsumer>
)

const ConnectedTournamentAuth = (props) => (
    <AuthConsumer>
        { value => <ConnectedTournament {...props} {...value} />}
    </AuthConsumer>
)

export default ConnectedTournamentAuth;