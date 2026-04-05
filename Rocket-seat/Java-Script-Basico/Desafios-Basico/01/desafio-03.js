
let cargo = "admin"

switch (cargo) {
    case "admin" :
        console.log("Controle total do sistema")
        
        break;
        
    case "editor" :
        console.log("Pode editar conteúdo")
        
            break;

    case "visitante" :
        console.log("Pode apenas visualizar")

            break;

    default:
        console.log("Usuário não reconhecido")
        
    
}