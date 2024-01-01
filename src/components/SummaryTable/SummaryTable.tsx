import React, {useEffect, useRef, useState} from 'react';
import s from './SummaryTable.module.css';
import {note_category} from "./SummaryTable_Container";
import Task_icon from "../../assets/idea-svgrepo-com.svg"
import Random_Thought_icon from "../../assets/brain-svgrepo-com.svg"
import Idea_icon from "../../assets/pin-fill-svgrepo-com.svg"
import {NotesCategory} from "../../redux/types";


const SummaryTable = (props: any) => {


    return <div>
        <div className={s.name_of_page}>
            <p> Summary table </p>
        </div>
    <div className={s.page_container}>
        <div className={s.notes_table}>
            <div className={s.names_of_params}>
                <div className={s.name_of_column}></div>
                <div className={s.name_of_column}><p>Name</p></div>
                <div className={s.name_of_column}><p>Created</p></div>
                <div className={s.name_of_column}><p>Category</p></div>
            </div>
            <div className={s.values_of_params_container}>
                {
                    props.notes_categories.map((n: note_category) => (

                        <div className={s.values_of_params}>
                            <div className={s.icon_value_container}>
                                <div className={s.category_icon_container}>
                                    {(() => {
                                        switch (n._name) {
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
    </div>
}

export default SummaryTable