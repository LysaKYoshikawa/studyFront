for (let letra of 'ja esta tarde') {
	console.log('essa é a contagem de letra', letra);
}
const items = ['teclado', 'mouse', 'monitor'];
for (let i in items) {
	console.log(i);
}

const assuntosMap = new Map([
	['map', { abordado: true }],
	['set', { abordado: true }],
	['promise', { abordado: false }]
]);

for (let assunto of assuntosMap) {
	console.log('essa são os conteudos ja abordados', assunto);
}

for (let [ch, vl] of assuntosMap.entries()) {
	console.log(ch, vl);
}
