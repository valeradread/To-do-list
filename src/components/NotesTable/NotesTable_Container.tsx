import React from "react";
import {connect} from "react-redux";
import NotesTable from './NotesTable'
import {RootState} from "../../redux/store";
import {Note, NotesShown} from "../../redux/types";
import {
    deleteNoteAC, editNoteAC,
    fluxOnPageAC,
    setEditNoteAC,
    toggleArchiveNoteAC,
    toggleEditingNoteAC
} from "../../redux/reducer";

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
                notes: notArchivedNotes,
                no_notes: 'Add some notes!'
            }

        } else {
            let ArchivedNotes = this.props.notes.filter((n: Note) => n.archived)
            props = {
                ...this.props,
                notes: ArchivedNotes,
                no_notes: 'No archived notes.'
            }

        }
        return <NotesTable {...props} />
    }


}

let mapStateToProps = (state: RootState) => {

    return {
        notes: state.notesTable_reducer ? state.notesTable_reducer.notes : [],
        notes_shown: state.notesTable_reducer ? state.notesTable_reducer.notes_shown : NotesShown.NOT_ARCHIVED,
        flux: state.notesTable_reducer.flux,
        isEditingNote: state.notesTable_reducer.isEditingNote
    }

}

let ActionCreators = {
    toggleArchiveNote: toggleArchiveNoteAC,
    deleteNote: deleteNoteAC,
    setEditNote: setEditNoteAC,
    fluxOnPage: fluxOnPageAC,
    toggleEditingNote: toggleEditingNoteAC,
    editNote: editNoteAC
}
export default connect(mapStateToProps, ActionCreators)(NotesTableContainer);