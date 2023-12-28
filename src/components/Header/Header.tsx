import React, {useState} from 'react';
import s from './Header.module.css';
import CreateNote_Container from "../CreateNote/CreateNote_Container";


const Header = (props: any) => {
    const [modalCreateNote, setModalCreateNote] = useState(false);

    return <div className={s.container}>
        <div className={s.name_of_page}>
            <p> My Notes </p>
        </div>
        <div className={s.buttons_container}>
            <select className={s.dropdown}>
                <option> Active notes </option>
                <option> Archived notes </option>
            </select>
            <button onClick={()=>setModalCreateNote(true)} className={s.addNote_button}>
                Add note
            </button>
        </div>
        <CreateNote_Container active={modalCreateNote} setActive={setModalCreateNote}/>

    </div>
}

export default Header