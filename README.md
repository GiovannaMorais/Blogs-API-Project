
# API de Blog

Este projeto é uma API construída em Node.js com o pacote Sequelize para interagir com um banco de dados. Seu objetivo é gerenciar um sistema de conteúdo de blog fornecendo endpoints que seguem os princípios REST para realizar operações CRUD (Create, Read, Update e Delete) em posts.




## Instalação

Para começar com este projeto, clone o repositório e instale suas dependências:

```bash
  git clone git@github.com:GiovannaMorais/Blogs-API-Project.git
  cd Blogs-API-Project
  npm install
```
    
## Executando a Aplicação


O projeto pode ser executado de duas formas: com Docker ou sem Docker.

### Com Docker
- Certifique-se de ter o docker-compose instalado na versão 1.29 ou superior. Em seguida, rode os serviços node e db com o comando:

```bash
docker-compose up -d --build
```

- Caso esteja utilizando o MySQL localmente na porta padrão (3306), é necessário pará-lo antes de executar os serviços. Os serviços irão inicializar um container chamado blogs_api e outro chamado blogs_api_db.

- Para rodar o container blogs_api, execute o comando:
```bash
docker exec -it blogs_api bash
```
- Isso dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

- Atenção: Todos os comandos disponíveis no package.json devem ser executados dentro do container.

- Instale as dependências (caso existam) com npm install. Lembre-se de não rodar o comando npm audit fix, pois isso pode gerar conflitos com o avaliador.


### Sem Docker
- Para executar o projeto sem Docker, é necessário ter o Node instalado em sua máquina (a versão 16).Em seguida, instale as dependências (caso existam) com npm install. Lembre-se de não rodar o comando npm audit fix, pois isso pode gerar conflitos com o avaliador.
## Endpoints

Os seguintes endpoints estão disponíveis na API:


#### POST /login

Autentica um usuário pelo seu e-mail e senha. Retorna um token de acesso.

#### POST /user

Cria um novo usuário com o e-mail, nome e senha fornecidos.

#### GET /user

Obtém uma lista de todos os usuários.

#### GET /user/:id

Obtém o usuário com o ID especificado.

#### POST /categories

Cria uma nova categoria com o nome fornecido.

#### GET /categories

Obtém uma lista de todas as categorias.

#### POST /post

Cria uma nova postagem de blog com o título, conteúdo e IDs de categoria fornecidos.

#### GET /post

Obtém uma lista de todas as postagens de blog.

#### GET /post/:id

Obtém a postagem de blog com o ID especificado.

#### PUT /post/:id

Atualiza a postagem de blog com o ID especificado.

#### DELETE /post/:id 

Exclui a postagem de blog com o ID especificado.

#### DELETE /user/me 

Exclui a conta do usuário autenticado.

#### GET /post/search?q=:searchTerm 

Pesquisa por posts do blog que contenham o termo de pesquisa fornecido em seu título ou conteúdo.
## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:


- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [jsonwebtoken - JWT](https://www.npmjs.com/package/jsonwebtoken)
- [Sequelize](https://sequelize.org/)
## Conclusão

Este projeto forneceu um ponto de partida para a construção de uma API para gerenciar o conteúdo do blog. Você pode continuar a construir sobre este projeto e personalizá-lo para atender às suas necessidades específicas.

