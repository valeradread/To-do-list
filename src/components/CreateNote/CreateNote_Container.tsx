import React, {Component} from "react";
import {connect} from "react-redux";
import CreateNote from './CreateNote'
import {RootState} from "../../redux/store";
import {addNoteAC, fluxOnPageAC, resetFluxAC} from "../../redux/reducer";

interface CreateNoteContainerProps {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    toggleCreatingNote: () => void;

}

class CreateNote_Container extends Component<CreateNoteContainerProps> {

    componentDidMount() {

    }

    componentDidUpdate() {


    }

    render() {

        return <CreateNote {...this.props}/>
    }
}

let mapStateToProps = (state: RootState) => {

    return {
        flux: state.notesTable_reducer.flux
    }

}

let ActionCreators = {
    fluxOnPage: fluxOnPageAC,
    addNote: addNoteAC,
    resetFlux: resetFluxAC,

}
export default connect(mapStateToProps, ActionCreators)(CreateNote_Container);