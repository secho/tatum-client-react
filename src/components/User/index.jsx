import React, {useContext } from 'react';
import { Context } from '../../store/store';

const User = (props) => {

    const {userState} = useContext(Context);

    const updateName = (newName) => {
        console.log('renaming user');
        userState.setUser({
            user: {
                name: newName
            }
        })
    }

    return (
        <>
            {console.log(userState)}
            <h2>{props.pre}User</h2>
            <p>{userState.user.user.name}</p>
            <button onClick={() => updateName('Exot')}>rename</button>
            {props.children}
        </>
    )
}

export default User;