import { Type } from './Type';
export const plus: Type[][] = [
    [Type.INT,      Type.DOUBLE,    Type.INT,       Type.INT,       Type.STRING],
    [Type.DOUBLE,   Type.DOUBLE,    Type.DOUBLE,    Type.DOUBLE,    Type.STRING],
    [Type.INT,      Type.DOUBLE,    Type.NULL,      Type.NULL,      Type.STRING],
    [Type.INT,      Type.DOUBLE,    Type.NULL,      Type.STRING,    Type.STRING],
    [Type.STRING,   Type.STRING,    Type.STRING,    Type.STRING,    Type.STRING]
]
export const minus: Type[][] = [
    [Type.INT,      Type.DOUBLE,    Type.INT,       Type.INT,       Type.NULL],
    [Type.DOUBLE,   Type.DOUBLE,    Type.DOUBLE,    Type.DOUBLE,    Type.NULL],
    [Type.INT,      Type.DOUBLE,    Type.NULL,      Type.NULL,      Type.NULL],
    [Type.INT,      Type.DOUBLE,    Type.NULL,      Type.NULL,      Type.NULL],
    [Type.NULL,     Type.NULL,      Type.NULL,      Type.NULL,      Type.NULL]
]
export const mult: Type[][] = [
    [Type.INT,      Type.DOUBLE,    Type.NULL,      Type.INT,       Type.NULL],
    [Type.DOUBLE,   Type.DOUBLE,    Type.NULL,      Type.DOUBLE,    Type.NULL],
    [Type.NULL,     Type.NULL,      Type.NULL,      Type.NULL,      Type.NULL],
    [Type.INT,      Type.DOUBLE,    Type.NULL,      Type.NULL,      Type.NULL],
    [Type.NULL,     Type.NULL,      Type.NULL,      Type.NULL,      Type.NULL]
]
export const div: Type[][] = [
    [Type.DOUBLE,   Type.DOUBLE,    Type.NULL,      Type.DOUBLE,    Type.NULL],
    [Type.DOUBLE,   Type.DOUBLE,    Type.NULL,      Type.DOUBLE,    Type.NULL],
    [Type.NULL,     Type.NULL,      Type.NULL,      Type.NULL,      Type.NULL],
    [Type.DOUBLE,   Type.DOUBLE,    Type.NULL,      Type.NULL,      Type.NULL],
    [Type.NULL,     Type.NULL,      Type.NULL,      Type.NULL,      Type.NULL]
]
export const pow: Type[][] = [
    [Type.INT,      Type.DOUBLE,    Type.NULL,      Type.NULL,      Type.NULL],
    [Type.DOUBLE,   Type.DOUBLE,    Type.NULL,      Type.NULL,      Type.NULL],
    [Type.NULL,     Type.NULL,      Type.NULL,      Type.NULL,      Type.NULL],
    [Type.NULL,     Type.NULL,      Type.NULL,      Type.NULL,      Type.NULL],
    [Type.NULL,     Type.NULL,      Type.NULL,      Type.NULL,      Type.NULL]
]
export const mod: Type[][] = [
    [Type.DOUBLE,   Type.DOUBLE,    Type.NULL,      Type.NULL,      Type.NULL],
    [Type.DOUBLE,   Type.DOUBLE,    Type.NULL,      Type.NULL,      Type.NULL],
    [Type.NULL,     Type.NULL,      Type.NULL,      Type.NULL,      Type.NULL],
    [Type.NULL,     Type.NULL,      Type.NULL,      Type.NULL,      Type.NULL],
    [Type.NULL,     Type.NULL,      Type.NULL,      Type.NULL,      Type.NULL]
]