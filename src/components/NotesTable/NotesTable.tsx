import React, {useState} from 'react';
import s from './NotesTable.module.css';
import {AppState, Note, NotesShown} from "../../redux/types";
import CreateNote_Container from "../CreateNote/CreateNote_Container";
import edit_icon from "../../assets/edit-60.svg";
import delete_icon from "../../assets/delete-189.svg"
import archive_icon from "../../assets/archive-26.svg"


const NotesTable = (props: any) => {


    return <div className={s.page_container}>
        <div className={s.nodes_table}>
            <div className={s.names_of_params}>
                <div className={s.name_of_column}></div>
                <div className={s.name_of_column}><p>Name</p></div>
                <div className={s.name_of_column}><p>Created</p></div>
                <div className={s.name_of_column}><p>Category</p></div>
                <div className={s.name_of_column}><p>Content</p></div>
                <div className={s.name_of_column}><p>Dates</p></div>
                <div className={s.name_of_column}><p>Tools</p></div>
            </div>
            <div className={s.values_of_params_container}>
                {
                        props.notes.map((n: Note) => (

                            <div className={s.values_of_params} key={n.id}>
                                <div className={s.param_value_container}>
                                    <p className={s.param_value}> {n.category} </p>
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
                                        <button className={s.tool_button}>
                                            <img src={edit_icon} className={s.icon}/>
                                        </button>
                                        <button onClick={() =>{
                                            debugger
                                            props.toggleArchiveNote(n.id)
                                        }} className={s.tool_button}>
                                            <img src={archive_icon} className={s.icon}/>
                                        </button>
                                        <button className={s.tool_button}>
                                            <img src={delete_icon} className={s.icon}/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                }
            </div>
        </div>


    </div>
}

export default NotesTable