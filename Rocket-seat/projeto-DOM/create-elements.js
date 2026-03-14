
// 1. Seleção do "Pai" (Onde o elemento vai morar)
// Antes de tudo, precisamos saber onde vamos colocar o novo item.

const lista = document.querySelector("ul");

// --------------------------------------------------------------------------------------------

// 2. Criação das Peças (O "nascimento" dos elementos)
// Aqui os elementos existem apenas na memória do computador, eles ainda não aparecem no site.

const novoItem = document.createElement("li");   // Cria a linha da lista
const nomeConvidado = document.createElement("span"); // Cria o texto interno

// Configurando as peças
nomeConvidado.textContent = "Cavalo Sabido"; // Define o texto que aparecerá
novoItem.classList.add("guest");       // Adiciona a classe para o CSS estilizar


// --------------------------------------------------------------------------------------------


// 3. Montagem (Colocando um dentro do outro)
// Agora conectamos as peças. O span precisa estar dentro do li.


// O append coloca o elemento como o ÚLTIMO filho
novoItem.append(nomeConvidado); 

// Curiosidade: O prepend que você usou moveria o span para o INÍCIO do li. 
// Como só tem um elemento (o span), o resultado visual é o mesmo aqui.


// --------------------------------------------------------------------------------------------


// 4. Injeção no HTML (O momento em que aparece no site)
// Este é o passo mais importante. Sem o append no elemento pai (ul), nada muda na tela.

lista.append(novoItem);


// Diferença Visual entre append e prepend
// Imagine que sua lista já tem os convidados A e B:

// lista.append(Novo): O resultado será [A, B, Novo]. (Vai para o fim da fila).

// lista.prepend(Novo): O resultado será [Novo, A, B]. (Fura a fila e vai para o topo).

// 🛠️ Uma forma mais "Limpa" (Dica de Desenvolvedor)
// Se você não precisar manipular o span individualmente depois, pode simplificar a criação assim:



const guests = document.querySelector("ul");
const newGuest = document.createElement("li");

newGuest.classList.add("guest");
// Em vez de criar um span, você pode injetar o HTML direto se for simples:
newGuest.innerHTML = `<span>Cavalo Sabido</span>`;

guests.append(newGuest);




























// A Regra de Ouro do DOM:

// Para algo aparecer na tela, ele precisa estar conectado (direta ou indiretamente) ao document.body.

// Vamos analisar o que aconteceu no seu código:

// newGuest.append(guestName): Você colocou o span dentro do li. O li ainda está guardado na memória do JS, fora da tela.

// newGuest.prepend(guestName): Você apenas mudou a posição do span dentro do li. Como o li ainda não está na tela, nada muda para o usuário.

// guests.append(newGuest): AQUI é o momento da mágica. Você pegou o li (que já carregava o span dentro dele) e o pendurou no ul. Como o ul já está "vivo" na página, tudo o que estiver dentro dele aparece instantaneamente.