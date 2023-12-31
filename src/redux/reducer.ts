import {Action, ActionType, AppState, NotesCategory, NotesShown} from './types';

const initialState: AppState = {
    notes: [
        {
            id: 0,
            name: "Pokupki1",
            category: NotesCategory.IDEA,
            date_created: "3/5/2021",
            content: "Pivo pivo pivo",
            dates: [],
            archived: false,
            icon: NotesCategory.IDEA.toString()
        },

        {
            id: 1,
            name: "Pokupki2",
            category: NotesCategory.TASK,
            date_created: "3/5/2021",
            content: "Pivo pivo pivo",
            dates: [],
            archived: false,
            icon: NotesCategory.TASK.toString()
        },

        {
            id: 2,
            name: "Pokupki3",
            category: NotesCategory.TASK,
            date_created: "3/5/2021",
            content: "Pivo pivo pivo",
            dates: [],
            archived: false,
            icon: NotesCategory.TASK.toString()
        },

        {
            id: 3,
            name: "Pokupki4",
            category: NotesCategory.IDEA,
            date_created: "3/5/2021",
            content: "Pivo pivo pivo",
            dates: [],
            archived: false,
            icon: NotesCategory.IDEA.toString()
        },

        {
            id: 4,
            name: "Pokupki5",
            category: NotesCategory.TASK,
            date_created: "3/5/2021",
            content: "Pivo pivo pivo",
            dates: [],
            archived: false,
            icon: NotesCategory.TASK.toString()
        },

        {
            id: 5,
            name: "Pokupki6",
            category: NotesCategory.RANDOM_THOUGHT,
            date_created: "3/5/2021",
            content: "Pivo pivo pivo",
            dates: [],
            archived: false,
            icon: NotesCategory.RANDOM_THOUGHT.toString()
        },

        {
            id: 6,
            name: "Pokupki7",
            category: NotesCategory.TASK,
            date_created: "3/5/2021",
            content: "Pivo pivo pivo",
            dates: [],
            archived: false,
            icon: NotesCategory.TASK.toString()
        },

    ],
    notes_shown: NotesShown.NOT_ARCHIVED,
    flux: {
        name: "",
        category: NotesCategory.TASK,
        content: ""
    },
    isEditingNote: false
};

const findDatesInNote = (note_content: string) => {
    const dateRegex = /\b(?:0[1-9]|[12]\d|3[01])\/(?:0[1-9]|1[0-2])\/(?:19|20)\d{2}\b/g;
    return note_content.match(dateRegex) || []
}

const reducer = (state: AppState = initialState, action: Action): AppState => {
    switch (action.type) {
        case ActionType.ADD_NOTE:
            let id = 0;
            if(state.notes.length > 0){
                id = state.notes[state.notes.length - 1].id + 1
            }

            const currentDateTime: Date = new Date();

            const year: number = currentDateTime.getFullYear();
            const month: string = (currentDateTime.getMonth() + 1).toString().padStart(2, '0');
            const day: string = currentDateTime.getDate().toString().padStart(2, '0');
            const hours: string = currentDateTime.getHours().toString().padStart(2, '0');
            const minutes: string = currentDateTime.getMinutes().toString().padStart(2, '0');
            const seconds: string = currentDateTime.getSeconds().toString().padStart(2, '0');

            const currentDateTimeString: string = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;

            const foundDates = findDatesInNote(action.payload.content);
            return {
                ...state,
                flux: {
                    name: '',
                    category: NotesCategory.TASK,
                    content: ''
                },
                notes: [
                    ...state.notes,
                    {
                        id: id,
                        name: action.payload.name,
                        category: action.payload.category,
                        date_created: currentDateTimeString,
                        content: action.payload.content,
                        dates: foundDates,
                        archived: false,
                        icon: action.payload.category.toString()
                    },
                ],
            }
        case ActionType.FLUX_ON_PAGE:
            console.log(action)
            return {

                ...state,
                flux: {
                    name: action.name,
                    category: action.category,
                    content: action.content
                }
            }
        case ActionType.TOGGLE_ARCHIVE_NOTE:
            debugger
            const updatedNotes = state.notes.map((note) => {
                if (note.id === action.id) {
                    // Update the specific note
                    return {
                        ...note,
                        archived: !note.archived,
                    };
                }
                return note; // Keep other notes unchanged
            });
            return {

                ...state,
                notes: updatedNotes
            }
        case ActionType.TOGGLE_TABLE_TYPE:
            const notes_shown = action.notes_shown
            return {
                ...state,
                notes_shown: notes_shown
            }
        case ActionType.DELETE_NOTE:
            const notes = state.notes.filter((n) => (n.id !== action.id))
            return {
                ...state,
                notes: notes
            }
        case ActionType.SET_EDIT_NOTE:
            const note = state.notes.find(n => n.id === action.id)
            let name: string = '';
            let content: string = '';
            let category: NotesCategory = NotesCategory.TASK;
            if (note) {
                name = note.name;
                category = note.category;
                content = note.content
            }
            return {
                ...state,
                flux: {
                    name: name,
                    category: category,
                    content: content
                }
            }
        case ActionType.RESET_FLUX:

            return {
                ...state,
                flux: {
                    name: '',
                    category: NotesCategory.TASK,
                    content: ''
                }
            }
        case ActionType.TOGGLE_EDITING_NOTE:
            return {
                ...state,
                isEditingNote: action.isEditingNote
            }
        case ActionType.EDIT_NOTE:
            const newFoundDates = findDatesInNote(action.payload.content);
            const new_notes = state.notes.map(n => {
                    if(n.id === action.payload.id){
                        return {
                            ...n,
                            name: action.payload.name,
                            category: action.payload.category,
                            content: action.payload.content,
                            dates: newFoundDates,
                            icon: action.payload.category.toString()
                        }
                    }
                    return n;
                }
            )
            return {
                ...state,
                notes: new_notes,
            }


        default:
            return state;
    }
};

export const fluxOnPageAC = (
    name: string,
    category: NotesCategory,
    content: string,
) => ({type: ActionType.FLUX_ON_PAGE, name, category, content});

export const addNoteAC = (
    payload: {
        name: string,
        category: NotesCategory,
        content: string
    }
) => ({type: ActionType.ADD_NOTE, payload});

export const toggleArchiveNoteAC = (id: number) => ({type: ActionType.TOGGLE_ARCHIVE_NOTE, id});
export const toggleTableTypeAC = (notes_shown: NotesShown) => ({type: ActionType.TOGGLE_TABLE_TYPE, notes_shown});
export const deleteNoteAC = (id: number) => ({type: ActionType.DELETE_NOTE, id});
export const setEditNoteAC = (id: number) => ({type: ActionType.SET_EDIT_NOTE, id});
export const resetFluxAC = () => ({type: ActionType.RESET_FLUX});
export const toggleEditingNoteAC = (isEditingNote: boolean) => ({type: ActionType.TOGGLE_EDITING_NOTE, isEditingNote})
export const editNoteAC = (payload: {
    id:number,
    name: string,
    category: NotesCategory,
    content: string
}) =>  ({
    type: ActionType.EDIT_NOTE, payload})

export default reducer;

