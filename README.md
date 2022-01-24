# winnin-challenge

1. Baixe o projeto e certifique-se que está na branch main.
2. Você precisará do docker instalado na sua CLI. Caso não tenha, instale e siga as demais instruções. https://docs.docker.com/get-docker/
3. Rode em seu terminal o seguinte comando. **docker-compose up --build**
4. Agora o projeto esta rodando localmente em https://localhost:3000/
5. O .env do projeto está no git somente por facilidade! Estou ciente que não é uma boa pratica de segurança!

# Endpoints
1. https://localhost:3000/redit/hot/artificial - **GET**
- Endpoint criado somente para facilitar o desenvolvimento. Responsavél por pegar os posts na API do reddit e salva-los no banco.
- Não Possui parametros.

2. https://localhost:3000/post/by-date?order=String&initDate=Date&endDate=Date - **GET**
- Endpoint responsável por pegar os posts dentro de um range de datas e ordena-los de acordo com o parametro passado em order (ups ou comments).
- Parametro order: Obrigatório. Type: String. Values: "ups" ou "comments".
- Parametro initDate e endDate: Obrigatório. Type: String. Formato: YYYY/MM/DD.
