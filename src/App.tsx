import React from 'react';
import './App.css';
import NotesTable_Container from "./components/NotesTable/NotesTable_Container";
import Header_Container from "./components/Header/Header_Container";

function App() {
    return (

            <div className="App">
                <Header_Container />
                <NotesTable_Container />
            </div>

    );
}

export default App;
