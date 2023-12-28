import React, {useRef, useState} from 'react';
import s from './Header.module.css';
import CreateNote_Container from "../CreateNote/CreateNote_Container";
import {NotesCategory, NotesShown} from "../../redux/types";


const Header = (props: any) => {
    const [modalCreateNote, setModalCreateNote] = useState(false);
    const notesShownRef = useRef<HTMLSelectElement>(null);
    const onSelect = () =>{
        let notes_shown = notesShownRef.current?.value as NotesShown || NotesShown.NOT_ARCHIVED;
        props.toggleTableType(notes_shown)
    }


    return <div className={s.container}>
        <div className={s.name_of_page}>
            <p> My Notes </p>
        </div>
        <div className={s.buttons_container}>
            <select ref={notesShownRef} className={s.dropdown} onChange={onSelect}>
                <option value={NotesShown.NOT_ARCHIVED}> Active notes </option>
                <option value={NotesShown.ARCHIVED}> Archived notes </option>
            </select>
            <button onClick={()=>setModalCreateNote(true)} className={s.addNote_button}>
                Add note
            </button>
        </div>
        <CreateNote_Container active={modalCreateNote} setActive={setModalCreateNote}/>

    </div>
}

export default Header