import React, {useEffect} from 'react'

function CompA() {


    useEffect(() => {
        console.log('CompA useEffect calisti')
    })

    return (
        <div>
            Comp - A
        </div>
    )
}

export default CompA
