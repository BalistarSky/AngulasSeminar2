export interface IComment{
    id?: number;
    parent?: number;
    content: string;
    created?: number;
    up?: number;
    down?: number;
    confidence?: number;
    name: string;
    mark?: number;
}