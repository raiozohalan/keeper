export enum NoteType {
    Note = "note",
    Todo = "todo",
}
export interface Note {
    id: string;
    title: string;
    content: string;
    type: NoteType;
    create_at: string;
    updated_at: string;
}

export interface Notes {
    list: Note[];
    selectedNote: Note | null;
}