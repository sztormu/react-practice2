import React, { useState } from 'react'

import styles from './AddUser.module.css';

import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';


const AddUser = props => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [error, setError] = useState('')

    const nameHandler = (event) => {
        setName(event.target.value)
    }

    const ageHandler = (event) => {
        setAge(event.target.value)
    }


    const submitHandler = (event) => {
        event.preventDefault()
        if (name.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Enter non-empty values'
            })
            return
        }
        if (+age < 1) {
            setError({
                title: 'Invalid age',
                message: 'Enter valid age >0'
            })
            return
        }

        const newUser = {
            id: Math.random().toString(),
            username: name,
            age: age
        }

        props.addingUser(newUser)
        setAge('')
        setName('')

    }

    const errorHandler = () => {
        setError(null)
    }


    return (
        <Wrapper>
            {error && <ErrorModal
                title={error.title}
                message={error.message}
                onConfirm={errorHandler}>
            </ErrorModal>}
            <Card className={styles.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type='text' value={name} onChange={nameHandler}></input>
                    <label htmlFor='age'>Age(Years)</label>
                    <input id='age ' type='number' value={age} onChange={ageHandler}></input>
                    <Button type='submit' >Add User</Button>
                </form>
            </Card>
        </Wrapper>

    )

}

export default AddUser