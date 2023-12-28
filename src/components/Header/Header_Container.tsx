import React, {Component} from "react";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {NotesShown} from "../../redux/types";
import {toggleTableTypeAC} from "../../redux/reducer";
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
    console.log(state.notesTable_reducer)
    return {
         notes_shown: state.notesTable_reducer.notes_shown
    }

}

let ActionCreators = {
    toggleTableType: toggleTableTypeAC
}
export default connect(mapStateToProps, ActionCreators)(Header_Container);