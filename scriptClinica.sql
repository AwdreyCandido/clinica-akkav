begin;
drop schema if exists clinicas_medicas;
create database clinicas_medicas;
use clinicas_medicas;

create table Clinica (
	CodCli CHAR(7) NOT NULL,
	NomeCli VARCHAR(40) NOT NULL,
    Endereco VARCHAR(50),
    Telefone CHAR(16),
    Email VARCHAR(40),
    PRIMARY KEY (CodCli)
);

create table Medico (
	CodMed CHAR(7),
    NomeMed VARCHAR(40) NOT NULL,
    Genero CHAR(1),
	Telefone CHAR(16),
    Email VARCHAR(40),
    CodEspec CHAR(7) DEFAULT 'ESP000' ,
    PRIMARY KEY (CodMed),
    UNIQUE (Email)
);

create table ClinicaMedico (
	CodCli CHAR(7) NOT NULL,
	CodMed CHAR(7) NOT NULL,
    DataIngresso DATE NOT NULL,
    CargaHorariaSemanal DECIMAL(3,1) DEFAULT 20.0,
    PRIMARY KEY (CodCli, CodMed)
);

create table Paciente (
	CpfPaciente CHAR(11),
    NomePac VARCHAR(40) NOT NULL,
    DataNascimento DATE NOT NULL,
    Genero CHAR(1),
	Telefone CHAR(16),
    Email VARCHAR(40),
    PRIMARY KEY (CpfPaciente),
    UNIQUE (Email)
);

create table AgendaConsulta (
	CodCli CHAR(7) NOT NULL,
	CodMed CHAR(7) NOT NULL,
	CpfPaciente CHAR(11) NOT NULL,
	Data_Hora DATETIME NOT NULL,
    PRIMARY KEY (CodCli, CodMed, CpfPaciente, Data_Hora)
);

create table Especialidade (
	CodEspec CHAR(7),
    NomeEspec VARCHAR(15),
    Descricao TEXT NOT NULL,
    PRIMARY KEY (CodEspec)
);

-- Aplicando a restrição de integridade referencial (chaves estrangeiras - FK)

alter table Medico ADD FOREIGN KEY (CodEspec) REFERENCES Especialidade(CodEspec) ON DELETE CASCADE ON UPDATE CASCADE;
alter table ClinicaMedico ADD FOREIGN KEY(CodCli) REFERENCES Clinica(CodCli);
alter table ClinicaMedico ADD FOREIGN KEY(CodMed) REFERENCES Medico(CodMed) ON DELETE CASCADE;
alter table AgendaConsulta ADD FOREIGN KEY(CodCli, CodMed) REFERENCES ClinicaMedico(CodCli, CodMed) ON DELETE CASCADE;
alter table AgendaConsulta ADD FOREIGN KEY(CpfPaciente) REFERENCES Paciente(CpfPaciente) ON DELETE RESTRICT;

-- Inserindo primeira clínica

INSERT INTO Clinica VALUES ('C000001', 'Clínica Sede', 'Av. 17 de Agosto', '(81) 2658-7561', 'clinicasede@email.com');
INSERT INTO Clinica VALUES ('C000002', 'Clínica Acolher', 'Rua das Flores', '(81) 9999-9999', 'clinicaacolher@email.com');
INSERT INTO Clinica VALUES ('C000003', 'Clínica Vida Saudável', 'Rua das Palmeiras', '(81) 8888-8888', 'clinicavida@email.com');
INSERT INTO Clinica VALUES ('C000004', 'Clínica Esperança', 'Rua dos Sonho', '(81) 7777-7777', 'clinicaesperanca@email.com');
INSERT INTO Clinica VALUES ('C000005', 'Clínica Saúde Total', 'Rua das Pedras', '(81) 6666-6666', 'clinicasaudetotal@email.com');
INSERT INTO Clinica VALUES ('C000006', 'Clínica Bem Estar', 'Rua das Águas', '(81) 5555-5555', 'clinicabemestar@email.com');

INSERT INTO Especialidade VALUES ('ESP000', 'Plantonista', 'Formação geral que auxilia no diagnóstico, cirurgias e atendimento');
INSERT INTO Especialidade VALUES ('ESP001', 'Cardiologia', 'Especialidade médica que trata doenças do coração.');
INSERT INTO Especialidade VALUES ('ESP002', 'Ginecologia', 'Especialidade médica que trata de doenças relacionadas ao sistema reprodutor feminino.');
INSERT INTO Especialidade VALUES ('ESP003', 'Ortopedia', 'Especialidade médica que trata lesões e doenças do sistema musculoesquelético.');
INSERT INTO Especialidade VALUES ('ESP004', 'Pediatria', 'Especialidade médica que trata de doenças e cuidados com crianças e adolescentes.');
INSERT INTO Especialidade VALUES ('ESP005', 'Psicologia', 'Especialidade que cuida da saúde mental e emocional das pessoas.');
INSERT INTO Especialidade VALUES ('ESP006', 'Oftalmologia', 'Especialidade médica que cuida dos olhos e problemas relacionados à visão.');

INSERT INTO Medico VALUES ('M000001', 'João da Silva', 'M', '(11) 9999-9999', 'joao.silva@email.com', 'ESP001');
INSERT INTO Medico VALUES ('M000002', 'Maria Souza', 'F', '(11) 8888-8888', 'maria.souza@email.com', 'ESP002');
INSERT INTO Medico VALUES ('M000003', 'Pedro Alves', 'M', '(11) 7777-7777', 'pedro.alves@email.com', 'ESP003');
INSERT INTO Medico VALUES ('M000004', 'Ana Paula Santos', 'F', '(11) 6666-6666', 'ana.santos@email.com', 'ESP004');
INSERT INTO Medico VALUES ('M000005', 'Paula Ana Santos', 'T', '(11) 6666-8888', 'santos2.ana@email.com', 'ESP005');
INSERT INTO Medico VALUES ('M000006', 'Santos Paula Ana', 'J', '(22) 8888-8888', 'paula.santos3@email.com', 'ESP005');

INSERT INTO ClinicaMedico VALUES ('C000001', 'M000001', '2022-01-01', 30.0);
INSERT INTO ClinicaMedico VALUES ('C000001', 'M000002', '2022-01-01', 20.0);
INSERT INTO ClinicaMedico VALUES ('C000002', 'M000001', '2022-01-01', 25.0);
INSERT INTO ClinicaMedico VALUES ('C000002', 'M000003', '2022-01-01', 20.0);
INSERT INTO ClinicaMedico VALUES ('C000002', 'M000004', '2022-01-01', 24.0);
INSERT INTO ClinicaMedico VALUES ('C000004', 'M000004', '2022-01-01', 30.0);
INSERT INTO ClinicaMedico VALUES ('C000003', 'M000003', '2022-01-01', 25.0);

INSERT INTO Paciente VALUES ('11122233344', 'Maria Santos', '1990-05-15', 'F', '(11) 8888-8888', 'maria.santos@email.com');
INSERT INTO Paciente VALUES ('22233344455', 'José da Silva', '1985-03-25', 'M', '(11) 7777-7777', 'jose.silva@email.com');
INSERT INTO Paciente VALUES ('33344455566', 'Amanda Souza', '1995-12-10', 'F', '(11) 6666-6666', 'amanda.souza@email.com');
INSERT INTO Paciente VALUES ('44455566677', 'Roberto Ferreira', '1980-08-22', 'M', '(11) 5555-5555', 'roberto.ferreira@email.com');

INSERT INTO AgendaConsulta VALUES ('C000001', 'M000002', '11122233344', '2023-04-10 08:00:00');
INSERT INTO AgendaConsulta VALUES ('C000002', 'M000001', '22233344455', '2023-04-10 09:00:00');
INSERT INTO AgendaConsulta VALUES ('C000003', 'M000003', '44455566677', '2023-04-11 10:00:00');
INSERT INTO AgendaConsulta VALUES ('C000004', 'M000004', '33344455566', '2023-04-12 11:00:00');
INSERT INTO AgendaConsulta VALUES ('C000003', 'M000003', '22233344455', '2023-04-13 12:00:00');


DELIMITER $$
CREATE TRIGGER Gatilho_IAAD AFTER INSERT ON Medico
FOR EACH ROW
BEGIN
	INSERT INTO ClinicaMedico VALUES('C000001', NEW.CodMed, NOW(), DEFAULT);
END $$

COMMIT;