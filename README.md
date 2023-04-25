# Proyecto 2 OLC1 1S 2023
## Sintaxis del Lenguaje
```java
main inicio();
void inicio() {
    int num = 18;
    print(num + " es " + (odd(num) ? "impar." : "par."));
    num = 13;
    print(num + " es " + (pair(num) ? "par." : "impar."));
    print("-----------Factorial Iterativo---------");
    print("8! = " + iterativeFactorial(8));
    print("-----------Factorial Recursivo---------");
    print("8! = " + recursiveFactorial(8));
}
boolean pair(int n) {
    if(n == 0) {
        return true;
    }
    return odd(n - 1);
}
boolean odd(int n) {
    if(n == 0) {
        return false;
    }
    return pair(n - 1);
}
int iterativeFactorial(int n){
    int resultado = 1;
    for (int i = 1; i <= n; i++) {
        resultado = resultado * i;
    }
    return resultado;
}
int recursiveFactorial(int n) {
    if (n == 0) {
        return 1;
    }
    return n * recursiveFactorial(n - 1);
}
```