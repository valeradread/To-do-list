import React from "react";
import {connect} from "react-redux";
import NotesTable from './NotesTable'
import {RootState} from "../../redux/store";
import {Note, NotesShown} from "../../redux/types";



class NotesTableContainer extends React.Component{



    componentDidMount() {

    }

    componentDidUpdate() {


    }

    render() {

      return  <NotesTable {...this.props}/>
    }
}

let mapStateToProps = (state: RootState) => {
    console.log(state.notesTable_reducer)
    return {
         notes: state.notesTable_reducer ? state.notesTable_reducer.notes : [],
         notes_shown: state.notesTable_reducer ? state.notesTable_reducer.notes_shown : NotesShown.NOT_ARCHIVED
    }

}

let ActionCreators = {

}
export default connect(mapStateToProps, ActionCreators)(NotesTableContainer);