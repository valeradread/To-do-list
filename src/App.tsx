import React from 'react';
import logo from './logo.svg';
import './App.css';

import NotesTable_Container from "./components/NotesTable/NotesTable_Container";
import Header from "./components/Header/Header";

function App() {
    return (

            <div className="App">
                <Header></Header>
                <NotesTable_Container></NotesTable_Container>
            </div>

    );
}

export default App;
