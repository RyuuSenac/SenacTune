# SenacTune — atividade de recuperação

## API

| Método | Rota | Acesso |
| --- | --- | --- |
| POST | `/api/auth/register` | público; cria ouvinte |
| POST | `/api/auth/login` | público |
| GET | `/api/musicas` | autenticado |
| GET | `/api/usuarios` | artista; ouvinte recebe 403 |
| GET | `/api/usuarios/perfil` | autenticado; dados próprios |

Usei o Codex para tirar as prints e postar no github tudo certinho. 👍
