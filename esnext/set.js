// Não aceita repetição e não é indexado ou seja ele não segue uma sequencia de index como um array

const sacola = new Set();

sacola.add('limão');
sacola.add('leite').add('feijão').add('pão');
sacola.add('acucar');
sacola.add('limão');
//no console de baixo não ira imprimir o limão que foi repetido
console.log(sacola);
console.log(sacola.size); // vai verificar o tamanho
console.log(sacola.has('acucar')); // vai verificar se existe dentro do set
sacola.delete('feijão'); // vai deletar
console.log(sacola.has('feijão')); //vai retornar false porque não existe
console.log(sacola); // retorna a atual estrutura

const cores = ['vermelho', 'branco', 'azul', 'verde', 'branco'];
const coresSet = new Set(cores);
console.log(coresSet);
//não tera a repetição da cor branco
