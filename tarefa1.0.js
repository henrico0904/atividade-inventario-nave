//Um item duplicado foi detectado no final do inventário Alpha. Remova a cópia.
let inventarioAlpha = [
    ["Cristal Rubion", "Plutão", 4500],
    ["Cápsula de Éter", "Júpiter", 7800],
    ["Nanofibra Luminosa", "Saturno", 12000],
    ["Minério Dourado", "Marte", 8500],
    ["Flor de Andrômeda", "Andrômeda", 13000],
    ["Ampulheta Galáctica", "Vênus", 2200],
    ["Fóssil Estelar", "Lua", 9000],
    ["Orbe do Caos", "Netuno", 9100],
    ["Lente do Vazio", "Buraco Negro X-1", 14300],
    ["Chave de Fóton", "Sol", 2300],
    ["Esfera Sombria", "Nêmesis", 13400],
    ["Granada de Íons", "Marte", 4100],
    ["Tecido Estelar", "Urano", 5300],
    ["Engrenagem Sombria", "Plutão", 6600],
    ["Fragmento Prismático", "Kepler-22b", 6400],
    ["Núcleo de Plasma", "Kepler-452b", 9100],
    ["Anel de Chronos", "Terra", 4900],
    ["Bateria Quântica", "Terra", 4000],
    ["Areia do Tempo", "Terra", 3100],
    ["Escudo de Luz", "Vênus", 4700],
    ["Catalisador Estelar", "Sirius", 12500],
    ["Pó de Cometa", "Netuno", 3000],
    ["Relógio Quântico", "Terra", 5000],
    ["Vórtice Gravitacional", "Saturno", 8800],
    ["Cristal Ômega", "Andrômeda", 13900],
    ["Cristal Ômega", "Andrômeda", 13900]
  ];

  let tarefaRemovida = inventarioAlpha.pop(); //removendo a tarefa duplicada no array
  console.table(inventarioAlpha);
  console.log(`o item duplicado removido foi: ${tarefaRemovida}`);
  console.log("------------------------------------------")

//Um artefato obsoleto foi removido do final da lista Beta após avaliação técnica.
let inventarioBeta = [
  ["Lâmina Solar", "Mercúrio", 6700],
  ["Cometa Engarrafado", "Netuno", 7600],
  ["Relíquia de Zordon", "Elysium", 25000],
  ["Pó Lunar", "Lua", 2900],
  ["Nevoeiro Encapsulado", "Júpiter", 3800],
  ["Chip de Matéria", "Ceres", 4100],
  ["Chave de Portais", "Júpiter", 5900],
  ["Globo de Plasma", "Terra", 7200],
  ["Mapa Estelar", "Vênus", 2100],
  ["Pedra Temporal", "Lua", 7800],
  ["Lanterna Estelar", "Sol", 3200],
  ["Fragmento de Eclipse", "Eclipse E-9", 8300],
  ["Ponte de Gelo", "Hoth", 3900],
  ["Fluido de Saturno", "Saturno", 4400],
  ["Fenda de Tempo", "Marte", 8700],
  ["Condutor Fotônico", "Sol", 3600],
  ["Memória Galáctica", "Terra", 5500],
  ["Livro de Nebulosa", "Andrômeda", 9200],
  ["Túnel Quântico", "Netuno", 4100],
  ["Canhão de Luz", "Vênus", 6800],
  ["Orbe Incandescente", "Sol", 9300],
  ["Matriz de Propulsão", "Vênus", 4500],
  ["Partícula Livre", "Urano", 5400],
  ["Capa de Invisibilidade", "Terra", 3900],
  ["Terminal de Dobra", "Alpha Centauri", 10500]
];
tarefaRemovida = inventarioBeta.pop() //remove o ultimo item do array do inventario beta
console.table(inventarioBeta);
console.log(`o artefato obsoleto removido foi: ${tarefaRemovida}`)

console.log("------------------------------------------")

//Três novos artefatos da Terra foram entregues à nave Alpha. Adicione-os ao final.
inventarioAlpha.push(["Fóssil","Terra",3400]); //adiciona mais um item ao array
inventarioAlpha.push(["Capacete Desconhecido", "Terra",3401]);
inventarioAlpha.push(["Sucata", "Terra", 1402]);

console.table(inventarioAlpha)
console.log("------------------------------------------")

//Dois artefatos especiais de Kepler foram coletados e adicionados à nave Beta.
inventarioBeta.push(["Xbox 3600","Kepler", 2340]); //adiciona mais itens ao array 
inventarioBeta.push(["Playstation 6","Kepler",2341]);

console.table(inventarioBeta);
console.log("------------------------------------------")

//Um item da Alpha precisa aparecer no topo da lista para ser destacado na vitrine.
let itemDestacado = inventarioAlpha[3]
console.log(`o item destacado na lista ALPHA é: ${itemDestacado}`);
inventarioAlpha.unshift(itemDestacado);//adicionei o item escolhido no array e exclui a copia que não estava no começo;
inventarioAlpha.splice(3,1)
console.table(inventarioAlpha)
console.log("------------------------------------------")

//Um item da Beta deve ser promovido para o início da lista para estudo prioritário.
itemDestacado = inventarioBeta[8];
console.log(`o item destacado na lista BETA é:${itemDestacado}`);
inventarioBeta.unshift(itemDestacado); // utilizei o mesmo raciocinio que a tarefa amterior
inventarioBeta.splice(8,1);
console.table(inventarioBeta);
console.log("------------------------------------------")

//Um artefato incorreto foi inserido no topo da Alpha por engano. Ele deve ser excluído.
let artefatoIncorreto = inventarioAlpha.shift()//removi o primeiro item do array
console.table(inventarioAlpha)
console.log(`o artefato incorreto foi removido:${artefatoIncorreto}`)

//O primeiro item da Beta pertence a um museu e deve ser removido.
artefatoIncorreto = inventarioBeta.shift();
console.table(inventarioBeta);
console.log(`o item ${artefatoIncorreto} foi enviado a um museu`);
console.log("------------------------------------------")

//Verifique se a “Relíquia de Zordon” está presente no inventário Beta.(pulada)



//Verifique se o item “Nanofibra Luminosa” ainda está disponível na Alpha (pulada)




//Gere uma string com todos os planetas do inventário Alpha, separados por um delimitador.(pulada)


//Crie um texto com os nomes dos 10 primeiros itens da Beta, separados por vírgulas.(pulada)
let nomes10 = inventarioBeta.slice(0,10);
console.log(nomes10.join(" ,"));
console.log("------------------------------------------")
//Gere uma nova lista com os 5 primeiros itens da nave Beta para inspeção.
let listaTopCinco = inventarioBeta.slice(0,5);
console.table(listaTopCinco);
console.log("------------------------------------------")
//Separe os 10 últimos itens do inventário Alpha para estudo temporal.
console.log(inventarioAlpha.length);
let dezUltimos = inventarioAlpha.slice(17,27)
console.table(dezUltimos);
console.log("------------------------------------------")

//O quinto item da Alpha foi substituído por uma versão mais moderna. Atualize.
let itemSubistituido = inventarioAlpha.splice(4, 1)
console.log(`item a atualizar: ${itemSubistituido}`)
let itemAtualizado = inventarioAlpha.splice(4,0, ["Ampulheta Galática 2.0", "Vênus", 2200]);
console.log("Lista Atualizada")
console.table(inventarioAlpha)
console.log("------------------------------------------")

//Dois itens no meio do inventário Beta foram contaminados e precisam ser removidos.
let meio = inventarioBeta.length/2
console.log(meio)
let itemContaminado = inventarioBeta.splice(11, 2)
console.log(`os itens contaminados [${itemContaminado.join(" /")}] foram excluidos`)
console.log("Lista Atualizada")
console.table(inventarioBeta)
console.log("------------------------------------------")

//Unifique os inventários Alpha e Beta em uma única estrutura.
let listaUnida = inventarioAlpha.concat(inventarioBeta);
console.log("Lista Unida")
console.log(listaUnida);
console.log("------------------------------------------")

//Junte os cinco primeiros itens de cada nave em uma nova vitrine de destaques.
let alpha5 = inventarioAlpha.slice(0,5)
let beta5 = inventarioBeta.slice(0,5)
listaUnida = alpha5.concat(beta5);
console.log(listaUnida)
console.log("------------------------------------------")

//Crie uma versão com os nomes de todos os itens da Beta em letras maiúsculas.
let betaMaiusculo = inventarioBeta.map(itens => itens.map(item => item.toUpperCase()))
console.log(betaMaiusculo)
//pulado



