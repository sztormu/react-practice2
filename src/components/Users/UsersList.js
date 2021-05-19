import React from 'react'

import styles from './UsersList.module.css';

import Card from '../UI/Card'
import User from './User';



const UsersList = props => {

    return (
        <Card className={styles.users}>
            <ul>

                {props.data.map(user =>

                    <User
                        key={user.id}
                        username={user.username}
                        age={user.age}
                    >
                    </User>)}

            </ul>
        </Card>

    )

}

export default UsersList