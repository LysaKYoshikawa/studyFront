const tecnologias = new Map();
tecnologias.set('react', { framework: false });
tecnologias.set('vue', { framework: true });

console.log(tecnologias.react);
console.log(tecnologias.get('react').framework);

const chavesVariadas = new Map([
	[function () {}, 'função'],
	[{}, 'objeto'],
	[123, 'numero']
]);

chavesVariadas.forEach((vl, ch) => {
	console.log('aqui', ch, vl);
});
console.log(chavesVariadas.has(123));
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size);

chavesVariadas.set(123, 'a');
chavesVariadas.set(852, 'b');
chavesVariadas.set(456, 'c');
console.log(chavesVariadas);
