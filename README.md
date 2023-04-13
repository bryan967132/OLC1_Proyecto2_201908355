# Proyecto 2 OLC1 1S 2023
## Sintaxis del Lenguaje
```java
int a = 70,b = 3,c,d = -(a + b) * 3;
double f = 1.5 + (a * 1.05),g;
char h;
h = (char) a;
boolean comp_1 = !(a > 0 || b <= 5) && d == 100;
String[] nombre = {"201908355","Danny","Tejaxún"};
String edad = "Edad: " + 22;
char inicial = '\\';
boolean izquierda;
List<char> lista1 = new List<char>;
izquierda = a > 70 ? false : true;
boolean derecha = false;
dato[2] = dato[2] + " Pichiyá";
lista1.add('a');
lista1.add((char) 70);
lista1[[2]] = lista1[[1]];
lista1[[1]] = lista1[[0]];
int edad = 18;
edad++; //tiene el valor de 19
edad--; //tiene el valor 18
int anio=2020;
anio = 1 + anio++; //obtiene el valor de 2022
anio = anio--; //obtiene el valor de 2021
lista1[[0]] = 'Z';
if(comp_1 && h > d) {
    while(h > 0) {
        //print("Se cumple");
        if(h % 2 == 0) {continue;}
        else {}
        h --;
    }
}
else if(!izquierda) {
    double r = 5.1;
    for(int i = 0,j = 4; i < ((int) r) && j >= 0; i ++,j = j - 1) {
        String HOLA = "HOLA";
        //print("i = " + i + ", j = " + j);
        if(i == 3) {
            break;
        }
    }
}
else {
    int[] numeros = new int[4];
    switch(nombre[1]) {
        case "201908355":
            numeros[0] = 0;
            break;
        case "Danny":
            numeros[1] = 1;
            break;
        case "Tejaxún":
            numeros[2] = 2;
            break;
        default:
            numeros[3] = 3;
            break;
    }
}
int r = 8;
do {
    if(a>=1 && a <3){
        break;
    }
    else if(a > 3){
        continue;
    }
    r = r - 1;
} while(r > 0);
```