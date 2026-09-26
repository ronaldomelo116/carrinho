# 🛒 Carrinho de Compras com Desconto

Projeto simples de carrinho de compras desenvolvido com **HTML**, **CSS** e **JavaScript puro**, criado como exercício de aula para praticar manipulação do DOM e lógica de cálculo com JavaScript.

---

## 📋 Sobre o Projeto

A aplicação exibe uma lista de produtos em um carrinho de compras e aplica automaticamente um **desconto de 10%** para produtos com valor acima de R\$ 30,00. Ao final, é exibido um resumo com o valor original, o desconto aplicado e o valor total com desconto.

---

## ✨ Funcionalidades

- Listagem dinâmica de produtos via JavaScript
- Cálculo automático do valor total sem desconto
- Aplicação de **10% de desconto** em itens com valor superior a R\$ 30,00
- Exibição do valor de desconto em reais e em porcentagem
- Exibição do total final com desconto aplicado

---

## 🛍️ Produtos do Carrinho

| Produto | Preço | Tem Desconto? |
|---|---|---|
| 🍬 Um pacote de balas | R\$ 2,00 | Não |
| 📓 Um caderno pequeno | R\$ 10,00 | Não |
| 🎧 Um fone de ouvido Bluetooth | R\$ 244,00 | Sim (10%) |
| 👕 Uma camiseta de marca | R\$ 99,00 | Sim (10%) |
| 🍕 Uma pizza individual | R\$ 20,00 | Não |
| 📐 Um estojo de material escolar | R\$ 33,00 | Sim (10%) |
| 🎮 Um controle de videogame | R\$ 250,00 | Sim (10%) |

---

## 🗂️ Estrutura de Arquivos

```
carrinho/
├── index.html   # Estrutura da página
├── style.css    # Estilos e layout visual
├── app.js       # Lógica do carrinho e manipulação do DOM
└── README.md    # Documentação do projeto
```

---

## 🚀 Como Executar

1. Clone ou baixe o repositório
2. Abra o arquivo `index.html` diretamente no navegador

Não é necessário instalar dependências ou servidor — é um projeto estático puro.

---

## 🧠 Conceitos Praticados

- Manipulação do **DOM** com JavaScript (`getElementById`, `createElement`, `appendChild`)
- Uso de **`forEach`** para percorrer arrays
- **Funções** e cálculo de porcentagem
- Uso de **objetos** como dicionário (mapeamento de preço → nome do produto)
- **Template literals** para interpolação de strings
- Estilização com **Flexbox** no CSS

---

## 🎨 Visual

- Fundo azul escuro com layout centralizado
- Cards com bordas arredondadas para separar a lista de produtos do resumo
- Layout responsivo com largura máxima de 500px

---

## 📚 Tecnologias Utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
