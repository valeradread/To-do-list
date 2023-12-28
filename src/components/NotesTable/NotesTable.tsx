import React, {useState} from 'react';
import s from './NotesTable.module.css';
import {AppState, Note} from "../../redux/types";
import CreateNote_Container from "../CreateNote/CreateNote_Container";


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
                {props.notes.map((n: Note) => (
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
                            <p className={s.param_value}></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    </div>
}

export default NotesTable