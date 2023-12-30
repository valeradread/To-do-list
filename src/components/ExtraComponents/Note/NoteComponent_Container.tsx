import React, {Component} from "react";
import {connect} from "react-redux";
import {RootState} from "../../../redux/store";
import NoteComponent from "./NoteComponent";
import {editNoteAC, resetFluxAC, toggleEditingNoteAC} from "../../../redux/reducer";

interface NoteComponentContainerProps {
    isEditingNote: boolean,
    flux: {},
    resetFlux: () => void,
    id: number

}

class NoteComponent_Container extends Component<NoteComponentContainerProps> {

    componentDidUpdate(prevProps: NoteComponentContainerProps) {

    }

    render() {

        return <NoteComponent {...this.props} id={this.props.id}/>
    }
}

let mapStateToProps = (state: RootState) => {

    return {
        flux: state.notesTable_reducer.flux,
        isEditingNote: state.notesTable_reducer.isEditingNote
    }

}

let ActionCreators = {
    resetFlux: resetFluxAC,
    toggleEditingNote: toggleEditingNoteAC,
    editNote: editNoteAC
}
export default connect(mapStateToProps, ActionCreators)(NoteComponent_Container);