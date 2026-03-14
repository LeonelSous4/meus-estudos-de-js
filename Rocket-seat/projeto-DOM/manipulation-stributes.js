const input = document.querySelector("input")

// ("adiciona valor" adiciona nome, ou outros)

input.setAttribute("disabled", true)
// esta desabilitando o input


  
input.setAttribute("type", "file")
// mudando o atributo de text para file









input.setAttribute("disabled", true)




// tem um detalhe curioso sobre como o HTML lida com atributos booleanos (aqueles que ou estão lá ou não estão, como disabled, checked, readonly).

// Como funciona o disabled
// No HTML, o simples fato do atributo disabled existir na tag já faz o campo ficar bloqueado.

// JavaScript
// // Isso funciona perfeitamente:
// input.setAttribute("disabled", true);
// Mas aqui vai uma curiosidade de "bastidores":
// O navegador na verdade transforma isso em <input disabled="true">. Para o HTML, qualquer valor dentro de um disabled (até mesmo se você escrevesse "false" entre aspas) ainda manteria o campo bloqueado.

// Outras formas de fazer a mesma coisa
// Existem jeitos mais curtos e modernos de lidar com isso:

// Direto na propriedade (O mais comum):

// JavaScript
// input.disabled = true;  // Bloqueia
// input.disabled = false; // Desbloqueia (Habilita novamente)
// Essa é a forma preferida porque é mais fácil de alternar entre ligado/desligado.

// Removendo o atributo:

// JavaScript
// input.removeAttribute("disabled"); // Remove o bloqueio completamente
// Onde isso é útil no seu projeto?
// Imagine o seguinte cenário: você quer que o botão "Adicionar" só funcione se o usuário digitar alguma coisa. Você poderia começar com o botão desabilitado e usar o JS para habilitar:

// JavaScript
// const botao = document.querySelector("#btn");
// const campoNome = document.querySelector("#name");

// // Se o campo estiver vazio, bloqueia o botão
// if (campoNome.value === "") {
//     botao.setAttribute("disabled", true);
//     // Ou simplesmente: botao.disabled = true;
// }