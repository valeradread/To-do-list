import React, {useEffect, useRef, useState} from 'react';
import s from './NotesTable.module.css';
import {Note, NotesCategory} from "../../redux/types";
import edit_icon from "../../assets/edit-60.svg";
import delete_icon from "../../assets/delete-189.svg"
import archive_icon from "../../assets/archive-26.svg"
import Modal from "../ExtraComponents/Modal/Modal";
import NoteComponent_Container from "../ExtraComponents/Note/NoteComponent_Container";
import Task_icon from "../../assets/idea-svgrepo-com.svg"
import Random_Thought_icon from "../../assets/brain-svgrepo-com.svg"
import Idea_icon from "../../assets/pin-fill-svgrepo-com.svg"


const NotesTable = (props: any) => {
    const [modalDeleteNote, setModalDeleteNote] = useState(false);
    const [noteId, setNoteId] = useState(0);

    console.log(noteId)
    return <div className={s.page_container}>
        <div className={s.notes_table}>
            <div className={s.names_of_params}>
                <div className={s.name_of_column}></div>
                <div className={s.name_of_column}><p>Name</p></div>
                <div className={s.name_of_column}><p>Created</p></div>
                <div className={s.name_of_column}><p>Category</p></div>
                <div className={s.name_of_column}><p>Note</p></div>
                <div className={s.name_of_column}><p>Dates</p></div>
                <div className={s.name_of_column}><p>Tools</p></div>
            </div>
            <div className={s.values_of_params_container}>
                {
                    props.notes.map((n: Note) => (
                        <div className={s.values_of_params} key={n.id}>
                            <div className={s.icon_value_container}>
                                <div className={s.category_icon_container}>
                                    {(() => {
                                        switch (n.category) {
                                            case NotesCategory.TASK:
                                                return <img className={s.icon} alt={''} src={Task_icon} />;
                                            case NotesCategory.RANDOM_THOUGHT:
                                                return <img className={s.icon} alt={''} src={Random_Thought_icon} />;
                                            case NotesCategory.IDEA:
                                                return <img className={s.icon} alt={''} src={Idea_icon} />;
                                            default:
                                                return null;
                                        }
                                    })()}
                                </div>
                            </div>
                            <div className={s.param_value_container}>
                                <p className={s.param_value}> {n.name} </p>
                            </div>
                            <div className={s.param_value_container}>
                                <p className={s.param_value}> {n.date_created} </p>
                            </div>
                            <div className={s.param_value_container}>
                                <p className={s.param_value}> {n.category} </p>
                            </div>
                            <div className={s.param_value_container}>
                                <p className={s.param_value}> {n.content} </p>
                            </div>
                            <div className={s.param_value_container}>
                                <p className={s.param_value}> {n.dates.map((d: string) => (
                                    d + ',\n'))}
                                </p>
                            </div>
                            <div className={s.param_value_container}>
                                <div className={s.tools_container}>
                                    <button className={s.tool_button} onClick={() => {

                                        props.setEditNote(n.id);
                                        props.toggleEditingNote(true);
                                    }}>
                                        <img src={edit_icon} className={s.icon}/>
                                    </button>

                                    <button onClick={() => {
                                        props.toggleArchiveNote(n.id)
                                        props.toggleEditingNote(false)
                                    }} className={s.tool_button}>
                                        <img src={archive_icon} className={s.icon}/>
                                    </button>
                                    <button className={s.tool_button} onClick={() => {
                                        setNoteId(n.id)
                                        setModalDeleteNote(true)
                                    }}>
                                        <img src={delete_icon} className={s.icon}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        <Modal active={modalDeleteNote} setActive={setModalDeleteNote}>
            <div>
                <p>Do you want to delete this note?</p>
                <div>
                    <button onClick={() => {
                        props.deleteNote(noteId);
                        props.toggleEditingNote(false);
                        setModalDeleteNote(false);
                    }}> Yes
                    </button>
                    <button onClick={() => (setModalDeleteNote(false))}> No</button>
                </div>
            </div>

        </Modal>

        <div className={s.edit_note_page}>
            {props.isEditingNote ?

                <div >
                    <NoteComponent_Container {...props} isCreate={false}/>
                </div>
                :
                <div >
                    <p>Click on note for details</p>
                </div>
            }
        </div>

    </div>
}

export default NotesTable