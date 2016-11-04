# Como rodar
Utilizando a versão v6.9.1 do Node.js, ou compatível, e estando na pasta do projeto, rode:

    node main.js

# Decisões de arquitetura
O cliente é responsável por ter os dados, ainda não ordernados, e chamar o serviço de ordenação.

O serviço de ordenação busca a ordem que as ordenações devem ser realizadas, do arquivo de configuração.
Ordena os dados, diversas vezes, da ordenação menos prioritária para a mais prioritária.
Os dados ordenados são retornados.
