# Pokedex-API

![GitHub repo size](https://img.shields.io/github/repo-size/UesleiAmaral/pokedex)
![express](https://img.shields.io/badge/-EXPRESS-red)
![supabase](https://img.shields.io/badge/-SUPABASE-blueviolet)
![swaggerUI](https://img.shields.io/badge/-SWAGGERUI-brightgreen)
![javascript](https://img.shields.io/badge/-JAVASCRIPT-yellow)
![axios](https://img.shields.io/badge/-AXIOS-black)
![.env](https://img.shields.io/badge/.ENV-orange)
![NODE](https://img.shields.io/badge/-NODE-brightgreen)

<img src="https://i.ibb.co/FK8WJFv/image-2.png" alt="image-2" border="0">


> Projeto Pessoal, dados retirados da API [ <a href="https://pokeapi.co" target="blank_">pokeapi.co</a> ]. Filtrado e organizado por mim. 😃

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

1. Você instalou a versão mais recente do:
```
Nodejs: https://nodejs.org/en
```

2. Uma IDE:
```
VSCode: https://code.visualstudio.com/ 
```

## 🚀 Download pokedex

Para fazer o download do pokedex-API, siga estas etapas:

```
git clone https://github.com/UesleiAmaral/pokedex.git
```

## ☕ Usando Pokedex

Para usar pokedex, siga estas etapas:


1. Abra o Terminal e digite o comando a seguir.
```
npm install
```
2. Após a intalação de todas as dependençias digite.

```
npm start
```

3. Abra o navegador e digite:

```
localhost:8080
```
## ✈️ Rotas Pokedex

<a href="https://pokedex-api-4hn5.onrender.com/" target="blank_">URL-BASE [ https://pokedex-api-4hn5.onrender.com/ ] </a>

### Essa rota será responsável por listar todos os pokémons:
` v1/pokemons`

> <img src="https://i.ibb.co/Ctn1hFk/image-3.png" alt="image-3" border="0">

### Essa rota será responsável por buscar por sequência de caracteres. 
` v1/pokemons/{name}`

> <img src="https://i.ibb.co/wJy9pk7/image-4.png" alt="image-4" border="0">

### Essa rota será responsável por buscar por um pokémon pelo ID. 
` v1/pokemon/{id}`

> <img src="https://i.ibb.co/5XQ6XGH/image-5.png" alt="image-5" border="0">

### Essa rota será responsável por criar um pokémon personalizado para o usuário. 
` v1/createNewPokemon/`

> <img src="https://i.ibb.co/JFsnmv8/image-8.png" alt="image-8" border="0">

### Essa rota será responsável por DELETAR um item buscando pelo ID. 
### ⚠️ Atenção delete apenas se tiver certeza, essa operação é irreversível. 
` v1/deletePokemon/{id}`

> <img src="https://i.ibb.co/9WZqgPb/image-9.png" alt="image-9" border="0">

### Essa rota será responsável por Atualizar um pokémon, buscando pelo ID. 
` /updatePokemon/`

> <img src="https://i.ibb.co/1bm7PPC/image-10.png" alt="image-10" border="0">



[⬆ Voltar ao topo](#pokedex-API)
