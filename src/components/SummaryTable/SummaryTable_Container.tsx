import React from "react";
import {connect} from "react-redux";
import SummaryTable from './SummaryTable'
import {RootState} from "../../redux/store";
import {Note, NotesCategory} from "../../redux/types";


interface SummaryTableProps {
    notes: Note[];
}

export interface note_category {
    _name: NotesCategory,
    active: number,
    archived: number
}

interface SummaryTableState {
    notes_categories: note_category[]
}

class SummaryTable_Container extends React.Component<SummaryTableProps> {
    state: SummaryTableState = {
        notes_categories: [
            {
                _name: NotesCategory.TASK,
                active: 0,
                archived: 0
            },
            {
                _name: NotesCategory.IDEA,
                active: 0,
                archived: 0
            },
            {
                _name: NotesCategory.RANDOM_THOUGHT,
                active: 0,
                archived: 0
            }
        ]
    }

    setNoteCategories() {

        this.setNoteCategory(NotesCategory.TASK);
        this.setNoteCategory(NotesCategory.IDEA);
        this.setNoteCategory(NotesCategory.RANDOM_THOUGHT);


    }


    setNoteCategory = (name: NotesCategory) => {
        let category = this.state.notes_categories.find(nc => nc._name === name)!;
        let archived = 0;
        let active = 0;
        if (category) {
            if(this.props.notes.length > 0){
                this.props.notes.forEach(n => {
                    if (n.category === category._name) {

                        n.archived ? archived++ : active++;
                        category.archived = archived;
                        category.active = active;
                    }
                })
            }

        }
        // console.log(category)
        const updated_notes_categories = this.state.notes_categories.map(nc => {
            return nc._name === category._name ? category : nc
        })

        this.setState(
            {
                ...this.state,
                notes_categories: updated_notes_categories
            }
        )
    };

    componentDidMount() {
        this.setNoteCategories()

    }

    componentDidUpdate(prevProps: SummaryTableProps) {
        if (prevProps !== this.props) {
            this.setNoteCategories()
        }

    }

    render() {

        return <SummaryTable {...this.state} />
    }


}

let mapStateToProps = (state: RootState) => {

    return {
        notes: state.notesTable_reducer ? state.notesTable_reducer.notes : [],
    }

}

let ActionCreators = {}
export default connect(mapStateToProps, ActionCreators)(SummaryTable_Container)