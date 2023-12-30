export interface Note {
    id: number;
    name: string;
    category: NotesCategory;
    date_created: string;
    content: string;
    dates: string[];
    archived: boolean;
}

export enum NotesShown {
    ARCHIVED = 'ARCHIVED',
    NOT_ARCHIVED = 'NOT_ARCHIVED',
}

export enum NotesCategory {
    TASK = "Task",
    RANDOM_THOUGHT = "Random Thought",
    IDEA = "Idea"

}

export enum ActionType {
    ADD_NOTE = 'ADD_NOTE',
    TOGGLE_ARCHIVE_NOTE = 'TOGGLE_ARCHIVE_NOTE',
    FLUX_ON_PAGE = 'FLUX_ON_PAGE',
    TOGGLE_TABLE_TYPE = 'TOGGLE_TABLE_TYPE',
    DELETE_NOTE = 'DELETE_NOTE',
    SET_EDIT_NOTE = 'SET_EDIT_NOTE',
    RESET_FLUX = 'RESET_FLUX',
    // TOGGLE_CREATING_NOTE = 'TOGGLE_CREATING_NOTE',
    TOGGLE_EDITING_NOTE = 'TOGGLE_EDITING_NOTE',
    EDIT_NOTE = 'EDIT_NOTE'
}

export interface AppState {
    notes: Note[];
    notes_shown: NotesShown;
    flux: {
        name: string;
        category: NotesCategory;
        content: string;
    };
    isEditingNote: boolean;
}

export interface AddNoteAction {
    type: ActionType.ADD_NOTE;
    payload: {
        id: number
        name: string;
        category: NotesCategory;
        date_created: string;
        content: string;
        dates: string[];
        archived: boolean;
    };
}

export interface ArchiveNoteAction {
    type: ActionType.TOGGLE_ARCHIVE_NOTE;
    id: number;
}

export interface FluxOnPage {
    type: ActionType.FLUX_ON_PAGE;
    name: string;
    category: NotesCategory;
    content: string;
}

export interface ToggleTableType {
    type: ActionType.TOGGLE_TABLE_TYPE;
    notes_shown: NotesShown;
}

export interface DeleteNote {
    type: ActionType.DELETE_NOTE;
    id: number;
}

export interface SetEditNote {
    type: ActionType.SET_EDIT_NOTE;
    id: number
}

export interface ResetFlux {
    type: ActionType.RESET_FLUX;
}

export interface ToggleEditingNote {
    type: ActionType.TOGGLE_EDITING_NOTE;
    isEditingNote: boolean
}

export interface EditNote {
    type: ActionType.EDIT_NOTE;
    payload: {
        id:number;
        name: string;
        category: NotesCategory;
        content: string;
    };
}

export type Action = AddNoteAction |
    ArchiveNoteAction |
    FluxOnPage |
    ToggleTableType |
    DeleteNote |
    SetEditNote |
    ResetFlux |
    ToggleEditingNote |
    EditNote;