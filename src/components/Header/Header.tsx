import React, {useRef, useState} from 'react';
import s from './Header.module.css';
import CreateNote_Container from "../CreateNote/CreateNote_Container";
import {NotesShown} from "../../redux/types";
import {toggleEditingNoteAC} from "../../redux/reducer";


const Header = (props: any) => {
    const [modalCreateNote, setModalCreateNote] = useState(false);

    const notesShownRef = useRef<HTMLSelectElement>(null);
    const onSelect = () => {
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
            <button className={s.addNote_button} onClick={() => {
                setModalCreateNote(true)
                props.resetFlux()
                props.toggleEditingNote(false)
            }}>
                Add note
            </button>
        </div>
        <CreateNote_Container active={modalCreateNote}
                              setActive={setModalCreateNote}
                              toggleCreatingNote={props.toggleCreatingNote}/>

    </div>
}

export default Header