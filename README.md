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
- Parametro initDate e endDate: Obrigatório. Type: String. Formato: YYYY-MM-DD.
- Tratamento de erro para ausencia desses parametros, para caso initDate seja maior que endDate e para valores diferentes de "ups" e "comments" em order.

3. https://localhost:3000/post/by-author?order=String - **GET**
- Endpoint responsavel por trazer uma lista de autores com seus numeros de ups/comments relacionados ao determinado post.
- Parametro order: Obrigatório. Type: String. Values: "ups" ou "comments".
- Tratamento de erro caso order seja undefined ou difetente de "ups" ou "comments"

# Cronjob
- Essa é a variavel de ambiente responsável por rodar o cronjob. CRON_JOB_REDDIT='00 06 19 * * *'. Nessa configuração o cronjob rodará todo dia as 19:06:00
- O primeiro parametro são os segundos, não vejo nescessidade de trocar pra outro numero.
- O segundo e o terceiro parametro são os minutos e as horas. Mudem-os de acordo com a hora que estiverem testando. Obs: Eu notei um adiatamento de aproximadamente 7 segundos do cronjob pra hora do meu sistema.
- Exemplo: Caso quando estiverem testando seja 14:03 hrs, coloque a variavel de ambiente para  CRON_JOB_REDDIT='00 04 14 * * *'
- Quando o cronjob for chamado vc verá um "Started" no terminal e logo em seguida logs da query feita para salvar os posts no banco.
