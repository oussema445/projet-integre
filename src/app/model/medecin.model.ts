export class Medecin {
    id: number | null;
    nom: string;
    prenom: string;
    tel: string;
    adresse: string;
    dateDeNaissance: string;
    email: string;
    password: string;
    active: boolean;
    code: string;
    diplome: any; // This will hold the image or diplome data
    numCin: number;
  
    constructor(
      id: number | null = null,
      nom: string = '',
      prenom: string = '',
      tel: string = '',
      adresse: string = '',
      dateDeNaissance: string = '',
      email: string = '',
      password: string = '',
      active: boolean = false,
      code: string = '',
      diplome: any = null, // this will be the file or image representation of the diploma
      numCin: number = 0
    ) {
      this.id = id;
      this.nom = nom;
      this.prenom = prenom;
      this.tel = tel;
      this.adresse = adresse;
      this.dateDeNaissance = dateDeNaissance;
      this.email = email;
      this.password = password;
      this.active = active;
      this.code = code;
      this.diplome = diplome;
      this.numCin = numCin;
    }
  }
  