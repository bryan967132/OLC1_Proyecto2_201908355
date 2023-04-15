export enum Type {
    INT,
    DOUBLE,
    BOOLEAN,
    CHAR,
    STRING,
    ARRAY,
    LIST,
    NULL
}
export type Return = {value: any,type: Type}