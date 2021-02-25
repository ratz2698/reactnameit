import React from 'react'
import '../index.css'
import NameCard from './NameCard'

const ResultContainer = ({suggestedNames}) => {
    const suggestedNameJsx = suggestedNames.map(suggestedName => {
        return <NameCard key={suggestedName} suggestedName={suggestedName}></NameCard>
    })

    return <div className='result-container'>
       {suggestedNameJsx}
    </div>
}

export default ResultContainer;