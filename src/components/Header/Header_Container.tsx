import React, {Component} from "react";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {NotesShown} from "../../redux/types";
import {resetFluxAC, toggleEditingNoteAC, toggleTableTypeAC} from "../../redux/reducer";
import Header from "./Header";

interface HeaderProps {
    notes_shown: NotesShown
}

class Header_Container extends Component<HeaderProps>{

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {

      return  <Header {...this.props}/>
    }
}

let mapStateToProps = (state: RootState) => {

    return {
         notes_shown: state.notesTable_reducer.notes_shown,
         isEditingNote: state.notesTable_reducer.isEditingNote,

    }

}

let ActionCreators = {
    toggleTableType: toggleTableTypeAC,
    resetFlux: resetFluxAC,
    toggleEditingNote: toggleEditingNoteAC
}
export default connect(mapStateToProps, ActionCreators)(Header_Container);