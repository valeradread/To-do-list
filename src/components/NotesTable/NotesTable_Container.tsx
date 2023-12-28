import React from "react";
import {connect} from "react-redux";
import NotesTable from './NotesTable'
import {RootState} from "../../redux/store";
import {AppState, Note, NotesShown} from "../../redux/types";
import {toggleArchiveNoteAC} from "../../redux/reducer";

interface NotesTableProps {
    notes: Note[];
    notes_shown: NotesShown;
}

class NotesTableContainer extends React.Component<NotesTableProps> {


    componentDidMount() {

    }

    componentDidUpdate() {


    }

    render() {

        let props
        if (this.props.notes_shown === NotesShown.NOT_ARCHIVED) {
            let notArchivedNotes = this.props.notes.filter((n: Note) => !n.archived)
            props = {
                ...this.props,
                notes: notArchivedNotes
            }

        } else {
            let ArchivedNotes = this.props.notes.filter((n: Note) => n.archived)
            props = {
                ...this.props,
                notes: ArchivedNotes
            }

        }
        return <NotesTable {...props}/>
    }


}

let mapStateToProps = (state: RootState) => {
    // console.log(state.notesTable_reducer)
    return {
        notes: state.notesTable_reducer ? state.notesTable_reducer.notes : [],
        notes_shown: state.notesTable_reducer ? state.notesTable_reducer.notes_shown : NotesShown.NOT_ARCHIVED
    }

}

let ActionCreators = {
    toggleArchiveNote: toggleArchiveNoteAC
}
export default connect(mapStateToProps, ActionCreators)(NotesTableContainer);