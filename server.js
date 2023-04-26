const express = require('express');
const Produtorio = require('./controllers/Produtorio')


const app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/newRecursivoProdutorio/:m/:n', (req, res) => {
   const m = parseFloat(req.params.m);
   const n = parseFloat(req.params.n);
 
   function Recursivo(m, n) {
     if (m > 0) {
       let resultado;
       if (m === n) {
         resultado = m + (1 / m);
       } else {
         resultado = (m + (1 / m)) * Recursivo(m + 1, n);
       }
       return resultado;
     }
   }
 
   const result = Recursivo(m, n);
   res.json(result);
 });
 

 app.post('/newIterativoProdutorio/:m/:n', (req, res) => {
   var m =parseFloat(req.params.m); 
   var n = parseFloat(req.params.n);

   function iterativo(m, n) {
      
      if (!m || !n) {
         return null;
      } 
      if (m > n) {
         return null;
      } 
      if (m < 0 || n < 0) {
         return null;
      } 
  
      let resultado = 1;
      let i = m;
      while (i <= n){
          resultado *= i + (1 / i);
          i++;
      }
      return res.json(resultado);
  }
  
  const result = iterativo(m, n);
  res.json(result);
  

 });

app.listen(3000, () => console.log('Example app is listening on port 3000.'));