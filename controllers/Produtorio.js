function recursivo(m, n) {
    /*if (!m || !n) return null;
    if (m > n) return null;
    if (m < 0 || n < 0) return null;*/

    if(m > 0){
        if (m == n) {
            resultado = m + (1 / n)
        }
        else{
            resultado = m + (1 / n) * recursivo(m+1,n)
        }
    }   

    return resultado;
}

function iterativo(m, n) {
    if (!m || !n) return null;
    if (m > n) return null;
    if (m < 0 || n < 0) return null;

    let resultado = 1;
    let i = m;
    while (i <= n){
        resultado *= i + (1 / i);
        i++;
    }
    return resultado;
}

