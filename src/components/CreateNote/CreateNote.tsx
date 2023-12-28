import React, {useRef, useState} from 'react';
import s from './CreateNote.module.css';
import Modal from "../ExtraComponents/Modal/Modal";
import {NotesCategory} from "../../redux/types";
import close_icon from "../../assets/close-32.svg";

const CreateNote = (props: any) => {

    const noteNameRef = useRef<HTMLInputElement>(null);
    const noteCategoryRef = useRef<HTMLSelectElement>(null);
    const noteContentRef = useRef<HTMLTextAreaElement>(null);

    let onInputChange = () => {
        let note_name_text = noteNameRef.current?.value || '';
        let note_category: NotesCategory = noteCategoryRef.current?.value as NotesCategory || NotesCategory.TASK;
        let note_content = noteContentRef.current?.value || '';
        note_name_text = correctnessCheck(note_name_text);
        note_content = correctnessCheck(note_content);
        props.fluxOnPage(note_name_text, note_category, note_content)
    }

    const oneSpace = (val1: string, ind: number, arr: string[]) => {
        if (ind === 0) return true;
        if (val1 !== ' ') return true;
        const val2 = arr[ind - 1];
        if (val2 !== ' ') return true;
        return false;
    };

    const correctnessCheck = (param: string) => {
        param = param.split('').filter(oneSpace).join('');
        if (param === ' ' || !param) {
            param = '';
        }
        return param;
    }

    let onSaveButtonClicked = () => {
        let name = props.flux.name;
        let category = props.flux.category;
        let content = props.flux.content;
        if (name !== '' || content !== '') {
            props.addNote({name, category, content});
            props.setActive(false);
        } else {
            props.setActive(false);
        }

    }


    return <Modal active={props.active} setActive={props.setActive}>
        <div className={s.page_container}>
            <div className={s.header}>
                <div className={s.title_container}>
                    <p className={s.title}> Create note </p>
                </div>
            </div>

            <button className={s.closeModal_button} onClick={() => props.setActive(false)}>
                <img src={close_icon} className={s.icon}></img>
            </button>

            <div className={s.param_container}>
                <div className={s.param_text}>
                    <p> Name: </p>
                </div>
                <input className={s.param_input}
                       type={"text"}
                       ref={noteNameRef}
                       onChange={onInputChange}
                       value={props.flux.name}
                ></input>
            </div>
            <div className={s.param_container}>
                <div className={s.param_text}>
                    <p> Category: </p>
                </div>
                <select className={s.param_select} onChange={onInputChange} value={props.flux.category}
                        ref={noteCategoryRef}>
                    <option value={NotesCategory.TASK}> {NotesCategory.TASK.toString()} </option>
                    <option value={NotesCategory.RANDOM_THOUGHT}> {NotesCategory.RANDOM_THOUGHT.toString()} </option>
                    <option value={NotesCategory.IDEA}> {NotesCategory.IDEA.toString()} </option>
                </select>
            </div>
            <div className={`${s.param_container} ${s.note_area_container}`}>
                <div className={s.param_text}>
                    <p> Note: </p>
                </div>
                <textarea onChange={onInputChange} value={props.flux.content} ref={noteContentRef}
                          className={s.note_area}></textarea>
            </div>
            <div className={s.param_container}>
                <div className={s.button_container}>
                    <button className={s.save_button} onClick={onSaveButtonClicked}>Save</button>
                </div>
            </div>
        </div>
    </Modal>
}

export default CreateNote