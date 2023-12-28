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
    DELETE_NOTE = 'DELETE_NOTE'
}

export interface AppState {
    notes: Note[];
    notes_shown: NotesShown;
    flux: {
        name: string;
        category: NotesCategory;
        content: string;
    }
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

export type Action = AddNoteAction | ArchiveNoteAction | FluxOnPage | ToggleTableType | DeleteNote;