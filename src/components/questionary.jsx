import React from 'react'
import Options from './Options'
import Button from './Button'
import Title from './Title'

const questionary = () => {
    return (
        <div className='questionary'>
            <Title />
            <br />
            <Options 
                options='To job search with confidence and get hired'
            />
            <Options 
            options='To grow my network or manage my reputation'
            />
            <Options 
            options='To find leads more effectively'
            />
            <Options 
            options='To find and hire talent faster' 
            />
            
            <hr />
            <Button />
        </div>
    )
}

export default questionary
