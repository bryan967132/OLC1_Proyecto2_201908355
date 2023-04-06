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
izquierda = a > 70 ? false : true;
boolean derecha = false;
if(comp_1 && h > d) {
    while(h > 0) {
        print("Se cumple");
        h --;
    }
}
else if(!izquierda) {
    for(int i = 0; i < (int) inicial; i ++) {
        print("izquierda");
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
```