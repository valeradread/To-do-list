import React from 'react';
import Modal from "../ExtraComponents/Modal/Modal";
import NoteComponent from "../ExtraComponents/Note/NoteComponent";
import s from "./CreateNote.module.css"
import NoteComponent_Container from "../ExtraComponents/Note/NoteComponent_Container";

const CreateNote = (props: any) => {

    return <Modal active={props.active} setActive={props.setActive}>
        <div className={s.page_container}>
            <NoteComponent_Container {...props} isCreate={true}/>
        </div>

    </Modal>
}

export default CreateNote