import React, {Component} from "react";
import {connect} from "react-redux";
import CreateNote from './CreateNote'
import {RootState} from "../../redux/store";
import {Note, NotesShown} from "../../redux/types";
import {addNoteAC, fluxOnPageAC} from "../../redux/reducer";

interface CreateNoteContainerProps {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

class CreateNote_Container extends Component<CreateNoteContainerProps>{

    componentDidMount() {

    }

    componentDidUpdate() {


    }

    render() {

      return  <CreateNote {...this.props}/>
    }
}

let mapStateToProps = (state: RootState) => {
    console.log(state.notesTable_reducer)
    return {
         flux: state.notesTable_reducer.flux
    }

}

let ActionCreators = {
    fluxOnPage: fluxOnPageAC,
    addNote: addNoteAC
}
export default connect(mapStateToProps, ActionCreators)(CreateNote_Container);