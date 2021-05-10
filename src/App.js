import { useEffect, useState } from 'react';
import './App.css';
import CompA from './components/CompA';
import CompFetch from './components/CompFetch';

function App() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('John')

    // ComponentDidUpdate mantiginda her render faaliyetinden sonra tekrar tetikleniyor
    useEffect(() => {
        console.log('App UseEffect calisti')
    })

    // useEffect(() => {
    //     console.log('App UseEffect componentDidMount ')
    // }, [])

    // useEffect(() => {
    //     console.log('App useEffect componentDidUpdate ')
    // }, [count])

    useEffect(() => {
        console.log('App useEffect componentDidUpdate - NAME DEGISTI')
    }, [name])
    

    useEffect(() => {
        console.log('App useEffect componentDidUpdate - COUNT DEGISTI')
    }, [count])


    useEffect(() => {
        console.log('App UseEffect componentDidMount ')

    }, [])

    return (
        <div>
            <p>Count : {count}</p>

            <button onClick={() => setCount(count + 1)}>Increment</button>
            <hr />
            <input type="text" defaultValue={name} onChange={(e) => setName(e.target.value)} />
            <p>Name : {name}</p>
            
            <hr />

            <CompA />
            <hr />

            <CompFetch />
        </div>
    );
}

export default App;
