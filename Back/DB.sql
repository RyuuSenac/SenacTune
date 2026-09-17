DROP DATABASE IF EXISTS senactune;

CREATE DATABASE senactune;

USE senactune;

DROP TABLE IF EXISTS musicas;

CREATE TABLE musicas (
    id_musica INT AUTO_INCREMENT PRIMARY KEY NOT NULL,

    titulo VARCHAR(150) NOT NULL,
    artista VARCHAR(100) NOT NULL,
    genero VARCHAR(100) NOT NULL,

    duracao TIME NOT NULL,

    ano_lancamento INT
);

-- INSERTANDO DADOS:
INSERT INTO musicas (
    titulo,
    artista,
    genero,
    duracao,
    ano_lancamento
)
VALUES
    (
        'Covet',
        'Basement',
        'Indie Rock',
        '00:03:47',
        2012
    ),
    (
        'Decode',
        'Paramore',
        'Alternative Rock',
        '00:04:21',
        2008
    ),
    (
        'Numb',
        'Linkin Park',
        'Nu Metal',
        '00:03:07',
        2003
    ),
    (
        'Entombed',
        'Deftones',
        'Alternative Metal',
        '00:04:59',
        2012
    ),
    (
        'Cherry Waves',
        'Deftones',
        'Alternative Metal',
        '00:05:17',
        2006
    ),
    (
        'Change',
        'Deftones',
        'Alternative Metal',
        '00:04:59',
        2000
    ),
    (
        'Beauty School',
        'Deftones',
        'Alternative Metal',
        '00:04:47',
        2010
    ),
    (
        'Sextape',
        'Deftones',
        'Shoegaze',
        '00:04:01',
        2010
    ),
    (
        'Rosemary',
        'Deftones',
        'Alternative Metal',
        '00:06:53',
        2012
    ),
    (
        'Black Fingernails',
        'sowhatimdead',
        'Emo Rap',
        '00:03:04',
        2015
    ),
    (
        'Youngest Daughter',
        'Superheaven',
        'Grunge',
        '00:04:09',
        2013
    );



DROP TABLE IF EXISTS usuario;

CREATE TABLE usuario(
    id_usuario INT AUTO_INCREMENT PRIMARY KEY NOT NULL,

    nome VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    senha VARCHAR(150) NOT NULL,
    
    perfil ENUM('ouvinte', 'artista') NOT NULL,

    created_at DATETIME DEFAULT CURRENT_TIMESTAMP

);



INSERT INTO
    usuario (
        nome,
        email,
        senha,
        perfil
    )
VALUES (
        'Rafael',
        'rafael@gmail.com',
        'senhamuitoboa123',
        'artista'
    ),
    (
        'Daniel',
        'daniel@gmail.com',
        'senhamuitoruim123',
        'ouvinte'
    ),
    (
        'Lucas',
        'lucas@gmail.com',
        'senha123',
        'ouvinte'
    ),
    (
        'Gabriel',
        'gabriel@gmail.com',
        'gabriel123',
        'ouvinte'
    ),
    (
        'Matheus',
        'matheus@gmail.com',
        'matheus123',
        'artista'
    ),
    (
        'Pedro',
        'pedro@gmail.com',
        'pedro123',
        'ouvinte'
    ),
    (
        'João',
        'joao@gmail.com',
        'joao123',
        'ouvinte'
    ),
    (
        'Carlos',
        'carlos@gmail.com',
        'carlos123',
        'ouvinte'
    ),
    (
        'Marcos',
        'marcos@gmail.com',
        'marcos123',
        'artista'
    ),
    (
        'Felipe',
        'felipe@gmail.com',
        'felipe123',
        'ouvinte'
    ),
    (
        'Gustavo',
        'gustavo@gmail.com',
        'gustavo123',
        'ouvinte'
    ),
    (
        'Bruno',
        'bruno@gmail.com',
        'bruno123',
        'ouvinte'
    ),
    (
        'André',
        'andre@gmail.com',
        'andre123',
        'ouvinte'
    ),
    (
        'Thiago',
        'thiago@gmail.com',
        'thiago123',
        'artista'
    ),
    (
        'Henrique',
        'henrique@gmail.com',
        'henrique123',
        'ouvinte'
    ),
    (
        'Rodrigo',
        'rodrigo@gmail.com',
        'rodrigo123',
        'ouvinte'
    ),
    (
        'Eduardo',
        'eduardo@gmail.com',
        'eduardo123',
        'ouvinte'
    ),
    (
        'Vinicius',
        'vinicius@gmail.com',
        'vinicius123',
        'ouvinte'
    ),
    (
        'Diego',
        'diego@gmail.com',
        'diego123',
        'artista'
    ),
    (
        'Leonardo',
        'leonardo@gmail.com',
        'leonardo123',
        'ouvinte'
    );




-- LISTANDO AS MÚSICAS
SELECT * FROM musicas;

SELECT * FROM usuario;

