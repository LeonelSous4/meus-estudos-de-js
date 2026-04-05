/*
  ==========================================
  📚 05 - DATAS E HORAS: GUIA COMPLETO
  ==========================================
  
  Manipulação profunda de datas em JS
  
  Tópicos:
  ✅ Criação de datas
  ✅ Leitura de componentes
  ✅ Escrita e modificação
  ✅ Formatação
  ✅ Cálculos com datas
  ✅ Fuso horário
  ✅ Localização (Intl)
*/

console.log('============== DATAS E HORAS ==============\n');

// ==========================================
// 📅 SEÇÃO 1: CRIAÇÃO DE DATAS
// ==========================================

console.log('--- SEÇÃO 1: Criação de Datas ---\n');

// 1.1 - Data atual
console.log('📌 1.1 - Data Atual\n');

const agora = new Date();
console.log('Data atual:', agora);
// Retorna: Data + hora atual do sistema

// 1.2 - Data específica
console.log('\n📌 1.2 - Data Específica\n');

// Parâmetros: (ano, mês, dia, hora, minuto, segundo, milissegundo)
// ⚠️ ATENÇÃO: Mês começa em 0 (janeiro = 0, dezembro = 11)
const natal = new Date(2024, 11, 25, 10, 30, 0);
console.log('Natal 2024:', natal);

// 1.3 - Data por string ISO
console.log('\n📌 1.3 - Data por String\n');

const fromString = new Date('2024-07-15T14:30:00');
console.log('From string:', fromString);

// 1.4 - Data por timestamp (milissegundos desde 1970)
console.log('\n📌 1.4 - Timestamp\n');

const timestamp = 1721080200000; // milissegundos
const fromTimestamp = new Date(timestamp);
console.log('From timestamp:', fromTimestamp);

// ==========================================
// 🔍 SEÇÃO 2: LEITURA DE COMPONENTES
// ==========================================

console.log('\n--- SEÇÃO 2: Leitura de Componentes ---\n');

const data = new Date('2024-07-15T14:30:45');

// 2.1 - Principais getters
console.log('📌 2.1 - Getters\n');

console.log('getFullYear():', data.getFullYear()); // 2024
console.log('getMonth():', data.getMonth()); // 6 (julho, 0-indexed)
console.log('getDate():', data.getDate()); // 15
console.log('getDay():', data.getDay()); // 1 (segunda-feira, 0=domingo)
console.log('getHours():', data.getHours()); // 14
console.log('getMinutes():', data.getMinutes()); // 30
console.log('getSeconds():', data.getSeconds()); // 45
console.log('getMilliseconds():', data.getMilliseconds()); // 0
console.log('getTime():', data.getTime()); // Timestamp em ms

// 2.2 - Conversão para string
console.log('\n📌 2.2 - Conversão para String\n');

console.log('toString():', data.toString());
console.log('toDateString():', data.toDateString()); // Apenas data
console.log('toTimeString():', data.toTimeString()); // Apenas hora
console.log('toLocaleString():', data.toLocaleString()); // Formatado

// ==========================================
// 🔧 SEÇÃO 3: MODIFICAÇÃO DE DATAS
// ==========================================

console.log('\n--- SEÇÃO 3: Modificação de Datas ---\n');

const dataMutável = new Date('2024-07-15T14:30:00');
console.log('Original:', dataMutável.toLocaleString());

// 3.1 - Setters
console.log('\n📌 3.1 - Setters\n');

dataMutável.setFullYear(2025);
console.log('Após setFullYear(2025):', dataMutável.toLocaleString());

dataMutável.setMonth(11); // Dezembro
console.log('Após setMonth(11):', dataMutável.toLocaleString());

dataMutável.setDate(25);
console.log('Após setDate(25):', dataMutável.toLocaleString());

dataMutável.setHours(23);
console.log('Após setHours(23):', dataMutável.toLocaleString());

// ==========================================
// 🎯 SEÇÃO 4: CÁLCULOS COM DATAS
// ==========================================

console.log('\n--- SEÇÃO 4: Cálculos com Datas ---\n');

// 4.1 - Diferença entre datas
console.log('📌 4.1 - Diferença entre Datas\n');

const data1 = new Date('2024-07-01');
const data2 = new Date('2024-07-15');

const diferençaMs = data2.getTime() - data1.getTime();
const diferençaDias = diferençaMs / (1000 * 60 * 60 * 24);

console.log('Data 1:', data1.toLocaleDateString());
console.log('Data 2:', data2.toLocaleDateString());
console.log('Diferença em milissegundos:', diferençaMs);
console.log('Diferença em dias:', diferençaDias); // 14

// 4.2 - Adicionar/subtrair dias
console.log('\n📌 4.2 - Adicionar/Subtrair Dias\n');

function adicionarDias(data, dias) {
  const resultado = new Date(data);
  resultado.setDate(resultado.getDate() + dias);
  return resultado;
}

const hoje = new Date();
const amanhã = adicionarDias(hoje, 1);
const próximoMês = adicionarDias(hoje, 30);

console.log('Hoje:', hoje.toLocaleDateString());
console.log('Amanhã:', amanhã.toLocaleDateString());
console.log('Próximo mês:', próximoMês.toLocaleDateString());

// 4.3 - Calcular idade
console.log('\n📌 4.3 - Calcular Idade\n');

function calcularIdade(dataNascimento) {
  const hoje = new Date();
  let idade = hoje.getFullYear() - dataNascimento.getFullYear();
  
  const mesAtual = hoje.getMonth();
  const diaAtual = hoje.getDate();
  const mesNasc = dataNascimento.getMonth();
  const diaNasc = dataNascimento.getDate();
  
  if (mesAtual < mesNasc || (mesAtual === mesNasc && diaAtual < diaNasc)) {
    idade--;
  }
  
  return idade;
}

const dataNasc = new Date('1995-05-15');
const idade = calcularIdade(dataNasc);
console.log('Data de nascimento:', dataNasc.toLocaleDateString());
console.log('Idade:', idade, 'anos');

// 4.4 - Próxima data especial
console.log('\n📌 4.4 - Próximo Evento\n');

function diasAté(mês, dia) {
  const hoje = new Date();
  let próximo = new Date(hoje.getFullYear(), mês, dia);
  
  if (próximo < hoje) {
    próximo.setFullYear(próximo.getFullYear() + 1);
  }
  
  const diferença = próximo.getTime() - hoje.getTime();
  return Math.ceil(diferença / (1000 * 60 * 60 * 24));
}

console.log('Dias até Natal:', diasAté(11, 25), 'dias');
console.log('Dias até Ano Novo:', diasAté(0, 1), 'dias');

// ==========================================
// 🌍 SEÇÃO 5: FORMATAÇÃO E LOCALIZAÇÃO
// ==========================================

console.log('\n--- SEÇÃO 5: Formatação e Localização ---\n');

const data5 = new Date('2024-07-15T14:30:45');

// 5.1 - toLocaleString()
console.log('📌 5.1 - toLocaleString()\n');

console.log('Padrão:', data5.toLocaleString());
console.log('pt-BR:', data5.toLocaleString('pt-BR'));
console.log('en-US:', data5.toLocaleString('en-US'));
console.log('fr-FR:', data5.toLocaleString('fr-FR'));

// 5.2 - Opções de formatação
console.log('\n📌 5.2 - Opções de Formatação\n');

const opcões = {
  weekday: 'long', // 'long', 'short', 'narrow'
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

console.log('Completo:', data5.toLocaleString('pt-BR', opcões));

const opçõesHora = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false // 24h
};

console.log('Hora:', data5.toLocaleString('pt-BR', opçõesHora));

// 5.3 - Intl.DateTimeFormat
console.log('\n📌 5.3 - Intl.DateTimeFormat\n');

const formatador = new Intl.DateTimeFormat('pt-BR', {
  dateStyle: 'long', // 'full', 'long', 'medium', 'short'
  timeStyle: 'medium'
});

console.log('Formatado:', formatador.format(data5));

// ==========================================
// 🕐 SEÇÃO 6: FUSO HORÁRIO
// ==========================================

console.log('\n--- SEÇÃO 6: Fuso Horário ---\n');

// 6.1 - getTimezoneOffset()
console.log('📌 6.1 - Fuso Horário Atual\n');

const agora2 = new Date();
const offsetMinutos = agora2.getTimezoneOffset();
const offsetHoras = offsetMinutos / 60;

console.log('Offset em minutos:', offsetMinutos);
console.log('Offset em horas:', offsetHoras);

// Negativo = leste de Greenwich, positivo = oeste
if (offsetMinutos < 0) {
  console.log(`Você está ${Math.abs(offsetHoras)} horas ADIANTADO de GMT`);
} else {
  console.log(`Você está ${offsetHoras} horas ATRASADO de GMT`);
}

// ==========================================
// 🎯 SEÇÃO 7: CASOS PRÁTICOS
// ==========================================

console.log('\n--- SEÇÃO 7: Casos Práticos ---\n');

// 7.1 - Cronômetro simples
console.log('📌 7.1 - Cronômetro\n');

class Cronômetro {
  constructor() {
    this.inicio = null;
    this.pausado = null;
  }
  
  iniciar() {
    if (this.inicio === null) {
      this.inicio = new Date();
      console.log('Cronômetro iniciado');
    }
  }
  
  pausar() {
    if (this.inicio && !this.pausado) {
      this.pausado = new Date();
      console.log('Cronômetro pausado');
    }
  }
  
  retomar() {
    if (this.pausado) {
      const pausa = this.pausado.getTime() - this.inicio.getTime();
      this.inicio = new Date(new Date().getTime() - pausa);
      this.pausado = null;
      console.log('Cronômetro retomado');
    }
  }
  
  temporDecorrido() {
    if (!this.inicio) return 'Cronômetro não iniciado';
    
    const agora = new Date();
    const final = this.pausado || agora;
    const ms = final.getTime() - this.inicio.getTime();
    const segundos = Math.floor(ms / 1000);
    const minutos = Math.floor(segundos / 60);
    
    return `${minutos}m ${segundos % 60}s`;
  }
}

const crono = new Cronômetro();
crono.iniciar();
console.log('Tempo:', crono.temporDecorrido());

// ==========================================
// 🏁 CONCLUSÃO
// ==========================================

console.log('\n=== RESUMO FINAL ===\n');
console.log(`
  ✅ Date é poderosa mas tem peculiaridades
  ✅ Cuidado com mês: começa em 0!
  ✅ Timestamps são úteis para cálculos
  ✅ Use toLocaleString() para exibição
  ✅ Intl.DateTimeFormat para locales específicos
  ✅ Calcule diferenças em milissegundos
  ✅ Para datas complexas, considere libraries (date-fns, moment)
  
  PRÓXIMO: Combine com classes para calendários!
`);
