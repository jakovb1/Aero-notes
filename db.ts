import {openDB} from 'idb';
export type Note={id:string,title:string,content:string,folder:string,updated:number,created:number,pinned:boolean,favorite:boolean,archived:boolean,trashed:boolean,tags:string[]};
export type Folder={id:string,name:string,parent:string|null};
export type Doc={id:string,name:string,folder:string,created:number,blob:Blob};
const db=openDB('aero-notes-v1',1,{upgrade(d){d.createObjectStore('notes',{keyPath:'id'});d.createObjectStore('folders',{keyPath:'id'});d.createObjectStore('docs',{keyPath:'id'});}});
export const store={all:async<T>(name:'notes'|'folders'|'docs')=>(await db).getAll(name) as Promise<T[]>,put:async(name:'notes'|'folders'|'docs',value:unknown)=>(await db).put(name,value),remove:async(name:'notes'|'folders'|'docs',id:string)=>(await db).delete(name,id),clear:async(name:'notes'|'folders'|'docs')=>(await db).clear(name)};
