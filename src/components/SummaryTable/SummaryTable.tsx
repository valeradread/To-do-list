import React, {useEffect, useRef, useState} from 'react';
import s from './SummaryTable.module.css';
import {Note} from "../../redux/types";
import edit_icon from "../../assets/edit-60.svg";
import delete_icon from "../../assets/delete-189.svg"
import archive_icon from "../../assets/archive-26.svg"
import Modal from "../ExtraComponents/Modal/Modal";
import NoteComponent_Container from "../ExtraComponents/Note/NoteComponent_Container";
import {toggleEditingNoteAC} from "../../redux/reducer";
import {note_category} from "./SummaryTable_Container";


const SummaryTable = (props: any) => {
    const [modalDeleteNote, setModalDeleteNote] = useState(false);
    const [noteId, setNoteId] = useState(0);
console.log(props)

    return <div className={s.page_container}>
        <div className={s.nodes_table}>
            <div className={s.names_of_params}>
                {/*<div className={s.name_of_column}></div>*/}
                <div className={s.name_of_column}><p>Name</p></div>
                <div className={s.name_of_column}><p>Created</p></div>
                <div className={s.name_of_column}><p>Category</p></div>
            </div>
            <div className={s.values_of_params_container}>
                {
                    props.notes_categories.map((n: note_category) => (

                        <div className={s.values_of_params}>
                            <div className={s.param_value_container}>
                                <p className={s.param_value}> {n._name.toString()} </p>
                            </div>
                            <div className={s.param_value_container}>
                                <p className={s.param_value}> {n.active} </p>
                            </div>
                            <div className={s.param_value_container}>
                                <p className={s.param_value}> {n.archived} </p>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>




    </div>
}

export default SummaryTable