import { IPostInfo } from './IPostInfo';

export interface IPost{
    id: number;
    promoted?: boolean;
    up?: number;
    down?: number;
    created?: number;
    image: string;
    thumb?: string;
    fullsize?: string;
    width?: number;
    height?: number;
    audio?: boolean;
    source?: string;
    flags?: number;
    deleted?: boolean;
    user: string;
    mark?: number;
    info: IPostInfo;
}