import React from 'react'
import Options from './Options'
import Button from './Button'
import Title from './Title'

const questionary = () => {
    return (
        <div className='questionary'>
            <Title />
            <br />
            <Options />
            <Options />
            <Options />
            <Options />
            <hr />
            <Button />
        </div>
    )
}

export default questionary
