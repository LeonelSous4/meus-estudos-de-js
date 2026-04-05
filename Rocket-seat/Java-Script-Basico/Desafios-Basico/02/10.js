
const alunos = [
  { nome: 'Ana', idade: 17, nota: 8.5, status: 'aprovado' },
  { nome: 'Bruno', idade: 16, nota: 6.0, status: 'reprovado' },
  { nome: 'Carla', idade: 18, nota: 9.2, status: 'aprovado' },
  { nome: 'Daniel', idade: 17, nota: 5.5, status: 'reprovado' },
  { nome: 'Eduardo', idade: 16, nota: 7.8, status: 'aprovado' }
];

// Função para cadastrar aluno (com validação e status automático)
function cadastrarAluno(nome, idade, nota) {
  try {
    if (typeof nome !== 'string' || nome.trim() === '') {
      throw new Error('Nome deve ser uma string não vazia.');
    }
    if (typeof idade !== 'number' || idade < 0) {
      throw new Error('Idade deve ser um número positivo.');
    }
    if (typeof nota !== 'number' || nota < 0 || nota > 10) {
      throw new Error('Nota deve ser um número entre 0 e 10.');
    }

    const status = nota >= 7 ? 'aprovado' : 'reprovado';
    alunos.push({ nome: nome.trim(), idade, nota, status });
    console.log(`Aluno ${nome} cadastrado com sucesso!`);
  } catch (error) {
    console.error(`Erro ao cadastrar aluno: ${error.message}`);
  }
}

// Função para listar alunos com callback
function listarAlunos(callback) {
  alunos.forEach(callback);
}

// Função para listar aprovados
function listarAprovados() {
  console.log('Alunos aprovados:');
  listarAlunos(aluno => {
    if (aluno.status === 'aprovado') {
      console.log(`${aluno.nome} - Idade: ${aluno.idade}, Nota: ${aluno.nota}`);
    }
  });
}

// Função para calcular média da turma
function calcularMedia() {
  const totalNotas = alunos.reduce((soma, aluno) => soma + aluno.nota, 0);
  return totalNotas / alunos.length;
}

// Função para encontrar maior nota
function maiorNota() {
  return alunos.reduce((max, aluno) => aluno.nota > max.nota ? aluno : max);
}

// Exemplo de uso
cadastrarAluno('Fábio', 17, 2); // Agora status será 'reprovado' automaticamente

try {
  // Validação geral
  for (const aluno of alunos) {
    if (aluno.nota < 0) {
      throw new Error(`Nota inválida para ${aluno.nome}: ${aluno.nota}`);
    }
  }

  console.log('Todos os alunos:');
  listarAlunos(aluno => console.log(`${aluno.nome} - Idade: ${aluno.idade}, Nota: ${aluno.nota}, Status: ${aluno.status}`));

  listarAprovados();

  console.log(`Média da turma: ${calcularMedia().toFixed(2)}`);

  const melhor = maiorNota();
  console.log(`Maior nota: ${melhor.nome} com ${melhor.nota}`);

} catch (error) {
  console.error(error.message);
}