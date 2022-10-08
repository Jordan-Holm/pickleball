import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import TeamList from './TeamList';
import TeamForm from './TeamForm';
import { TeamConsumer } from '../../providers/TeamProvider';
import { AuthConsumer } from '../../providers/AuthProvider';

const Teams = ({ user, teams, getAllTeams }) => {
    const [adding, setAdd] = useState(false);

    useEffect( () => {
        getAllTeams()
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
                            <Modal.Title>Add A Team</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <TeamForm
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
            <h1>Teams</h1>
            <TeamList 
                teams={teams}
            />
        </>
    )
}

const ConnectedTeam = (props) => (
    <TeamConsumer>
        { value => <Teams {...props} {...value} /> }
    </TeamConsumer>
)

const ConnectedAuth = (props) => (
    <AuthConsumer>
        { value => <ConnectedTeam {...props} {...value} />}
    </AuthConsumer>
)

export default ConnectedTeamAuth;