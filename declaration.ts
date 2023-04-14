export interface ClinicData {
  CodCli: string | any;
  NomeCli: string | undefined;
  Endereco: string | undefined;
  Telefone: string | undefined;
  Email: string | undefined;
}

export interface DoctorData {
  CodMed: string | any;
  NomeMed: string | undefined;
  Genero: string | undefined;
  Telefone: string | undefined;
  Email: string | undefined;
  CodEspec: number | string | undefined;

  NomeEspec?: string;
  CodCli?: string;
}

export interface PacientData {
  Data_Hora: Date;
  CpfPaciente: string;
  NomePac: string;
  DataNascimento: string;
  Genero: string;
  Telefone: string;
  Email: string;
}
