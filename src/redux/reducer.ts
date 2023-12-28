import {Action, ActionType, AppState, NotesCategory, NotesShown} from './types';

const initialState: AppState = {
    notes: [
        {
            id: 0,
            name: "Pokupki1",
            category: NotesCategory.TASK,
            date_created: "3/5/2021",
            content: "Pivo pivo pivo",
            dates: [],
            archived: false
        },

        {
            id: 0,
            name: "Pokupki2",
            category: NotesCategory.TASK,
            date_created: "3/5/2021",
            content: "Pivo pivo pivo",
            dates: [],
            archived: false
        },

        {
            id: 0,
            name: "Pokupki3",
            category: NotesCategory.TASK,
            date_created: "3/5/2021",
            content: "Pivo pivo pivo",
            dates: [],
            archived: false
        },

        {
            id: 0,
            name: "Pokupki4",
            category: NotesCategory.TASK,
            date_created: "3/5/2021",
            content: "Pivo pivo pivo",
            dates: [],
            archived: false
        },

        {
            id: 0,
            name: "Pokupki5",
            category: NotesCategory.TASK,
            date_created: "3/5/2021",
            content: "Pivo pivo pivo",
            dates: [],
            archived: false
        },

        {
            id: 0,
            name: "Pokupki6",
            category: NotesCategory.TASK,
            date_created: "3/5/2021",
            content: "Pivo pivo pivo",
            dates: [],
            archived: false
        },

        {
            id: 0,
            name: "Pokupki7",
            category: NotesCategory.TASK,
            date_created: "3/5/2021",
            content: "Pivo pivo pivo",
            dates: [],
            archived: false
        },

    ],
    notes_shown: NotesShown.NOT_ARCHIVED,
    flux: {
        name: "",
        category: NotesCategory.TASK,
        content: ""
    }
};

const reducer = (state: AppState = initialState, action: Action): AppState => {
    switch (action.type) {
        case ActionType.ADD_NOTE:
            const currentDateTime: Date = new Date();

            const year: number = currentDateTime.getFullYear();
            const month: string = (currentDateTime.getMonth() + 1).toString().padStart(2, '0');
            const day: string = currentDateTime.getDate().toString().padStart(2, '0');
            const hours: string = currentDateTime.getHours().toString().padStart(2, '0');
            const minutes: string = currentDateTime.getMinutes().toString().padStart(2, '0');
            const seconds: string = currentDateTime.getSeconds().toString().padStart(2, '0');

            const currentDateTimeString: string = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;

            const dateRegex = /\b(?:0[1-9]|[12]\d|3[01])\/(?:0[1-9]|1[0-2])\/(?:19|20)\d{2}\b/g;
            const foundDates = action.payload.content.match(dateRegex) || [];
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
                        id: state.notes.length + 1,
                        name: action.payload.name,
                        category: action.payload.category,
                        date_created: currentDateTimeString,
                        content: action.payload.content,
                        dates: foundDates,
                        archived: false,
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

        // case ActionType.TOGGLE_TODO:
        //     return {
        //         ...state,
        //         todos: state.todos.map((todo) =>
        //             todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
        //         ),
        //     };
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
) => ({type: ActionType.ADD_NOTE, payload})

export default reducer;

