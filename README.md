# 🎯 Desafio Target - Sistema Completo

## 📋 Sobre o Projeto

Sistema fullstack completo desenvolvido para o desafio técnico, contendo **3 funcionalidades principais** integradas entre backend C# .NET e frontend Angular.

### 🚀 Funcionalidades Implementadas

| Módulo | Descrição | Status |
|--------|-----------|---------|
| **💰 Cálculo de Comissões** | Calcula comissões de vendedores baseado em faixas de valor | ✅ Completo |
| **📦 Controle de Estoque** | Gerencia movimentações de produtos com ID único | ✅ Completo |
| **⏰ Calculadora de Juros** | Calcula multas de 2,5% ao dia em pagamentos atrasados | ✅ Completo |

---

## 🛠️ Tecnologias Utilizadas

### 🔧 Backend
- **.NET 9.0**  
- **ASP.NET Core Web API**  
- **C# 12.0**  
- **Swagger/OpenAPI** para documentação  

### 🎨 Frontend
- **Angular 16**  
- **TypeScript**  
- **RxJS**  
- **CSS3**  

### 🧰 Ferramentas
- **Git & GitHub**  
- **Visual Studio Code**  
- **Postman/REST Client**  

---

## 📥 Pré-requisitos

Para executar o projeto completo:

- [.NET SDK 9.0](https://dotnet.microsoft.com/download/dotnet/9.0)
- [Node.js 18+](https://nodejs.org/)
- [Angular CLI 16+](https://angular.io/cli)
- Git

### Verificar instalações:

```bash
dotnet --version     # Deve retornar 9.x.x
node --version       # Deve retornar 18.x.x ou superior
ng version           # Deve retornar Angular CLI: 16.x.x




🚀 Como Executar
📋 Opção 1: Apenas o Backend (API)
1. Entrar na pasta da API:
cd DesafioTarget.API

2. Executar a API:
dotnet run

3. A API estará disponível em:
http://localhost:5297

Endpoints disponíveis:
Endpoint	Método	Descrição
/api/comissoes/calcular	POST	Cálculo de comissões
/api/estoque/produtos	GET	Lista produtos
/api/estoque/movimentar	POST	Movimenta estoque
/api/juros/calcular	POST	Cálculo de juros

4. Acessar Swagger:
http://localhost:5297/swagger

🎨 Opção 2: Backend + Frontend (Sistema Completo)
1. Executar o Backend:
cd DesafioTarget.API
dotnet run

2. Executar o Frontend:
cd desafio-target-frontend
npm install
ng serve

3. Acessar a aplicação:
http://localhost:4200


🧪 Testes dos 3 Desafios
🏆 Desafio 1: Cálculo de Comissões
✔ Via Frontend:
Acessar o card "Sistema de Comissões"
Adicionar vendas → Calcular comissões

Regras:
< R$ 100: 0%

R$ 100 a R$ 499,99: 1%

>= R$ 500: 5%

✔ Via API:
POST http://localhost:5297/api/comissoes/calcular
Content-Type: application/json

{
  "vendas": [
    { "vendedor": "João Silva", "valor": 1200.50 },
    { "vendedor": "João Silva", "valor": 250.30 },
    { "vendedor": "Maria Souza", "valor": 800.00 }
  ]
}


📦 Desafio 2: Controle de Estoque
✔ Via Frontend:
Card "Controle de Estoque"
Movimentação de entrada/saída

Produtos Iniciais:
Código	Descrição	Quantidade
101	Caneta Azul	150
102	Caderno Universitário	75
103	Borracha Branca	200
104	Lápis Preto HB	320
105	Marcador Amarelo	90

✔ Via API:
GET http://localhost:5297/api/estoque/produtos

POST http://localhost:5297/api/estoque/movimentar
Content-Type: application/json

{
  "codigoProduto": 101,
  "descricao": "Compra de fornecedor",
  "quantidade": 50,
  "tipoMovimentacao": "ENTRADA"
}

⏰ Desafio 3: Calculadora de Juros
✔ Via Frontend:
Card "Calculadora de Juros"

Regra:
Multa: 2,5% ao dia

Aplicado apenas sobre dias de atraso

✔ Via API:
POST http://localhost:5297/api/juros/calcular
Content-Type: application/json

{
  "valorOriginal": 1000.00,
  "dataVencimento": "2024-11-20"
}



📁 Estrutura do Projeto
DesafioTarget/
├── DesafioTarget.API/                 # Backend C#
│   ├── Controllers/
│   ├── Models/
│   ├── Services/
│   └── Program.cs
│
├── desafio-target-frontend/           # Frontend Angular
│   ├── src/app/
│   │   ├── components/                # Componentes
│   │   ├── services/                  # Serviços API
│   │   └── app.module.ts
│   └── angular.json
│
└── README.md                          # Este arquivo



🔧 Configurações Técnicas
Backend
Porta: 5297

CORS liberado para: http://localhost:4200

Persistência: In-Memory

Frontend
Porta: 4200

API URL: http://localhost:5297

📞 Contato
Desenvolvido por: Thiago Oliveira
LinkedIn: https://www.linkedin.com/in/t-arievilo
Email: thiago.math@hotmail.com
