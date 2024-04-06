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
export type ReturnType = {value: any,type: Type}