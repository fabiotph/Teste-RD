# Teste-RD


## :arrow_forward: Como executar
* É necessário ter o [Docker](https://www.docker.com/) instalado.

Execute o comando abaixo dentro da pasta do projeto:

`docker-compose up`

## :computer: Tecnologias usadas
* Node
* Express
* Mocha
* Docker


## :link: Endpoints
Rota                                | Método |  Descrição
------------------------------------ | ------  | -----
/route/                         |  POST  | Adiciona rotas
/route?from={value1}&to={value2}  |  GET   |  Retorna o caminho e baseado no menor preço

## :book: Exemplos

### POST /route/
#### Exemplo de corpo da Requisição:
```json
{
  "from": "BRC",
	"to": "ORL",
	"price": 20
}
```

### GET /route/
#### Exemplo de requisição:  
`/route?from=GRU&to=ORL`
#### Resposta de sucesso:
```json
{
  "route": [
    "GRU",
    "BRC",
    "SCL",
    "ORL"
  ],
  "price": 35
}  
```

## :white_check_mark: Tests
Execute o comando abaixo dentro da pasta do projeto:  
`docker-compose run server npm test`

## Utilização de cache
Como uma forma de melhorar o desempenho, foi adicionado um cache simples, pois não há necessidade de calcular novamente uma rota que ja foi calculada.
Quando houver uma requisição post para adicionar uma nova rota o Observable notifica o cache a ser limpado.
