DROP database nodeAulas;
CREATE database nodeAulas;
use nodeAulas

CREATE TABLE usuarios(
    id_usu INT NOT NULL AUTO_INCREMENT,
    nome_usu VARCHAR(15) NOT NULL,
    email_usu VARCHAR(35) NOT NULL,
    idade_usu INT NOT NULL,
    primary key (id_usu) 
);

insert into usuarios values (0, "Yuri", "yuri@email.com", 22);
insert into usuarios values (0, "Miguel", "miguel@email.com", 20);
insert into usuarios values (0, "Kevin", "kevin@email.com", 19);

