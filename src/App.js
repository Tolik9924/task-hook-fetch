import { useState } from 'react';
import './App.css';
import TextData from './Components/TextData/TextData';
import useData from './hooks/useData';

function App() {

    const [isLoading, data, error] = useData('https://jsonplaceholder.typicode.com/posts', 1);

    const dataText = {...data};

    console.log(data);
    console.log('error: ', error);

    return (
        <div className="App">
            {error}
            {isLoading ? 'Loading' : <TextData title={dataText.title} />}
        </div>
    );
}

export default App;
