export class Agent {
  id?: number; // Identifiant unique (facultatif)
  nom: string;
  prenom: string;
  tel: string;
  adresse: string;
  dateDeNaissance: Date; // Utilisation de Date pour correspondre au type JavaScript
  email: string;
  password: string;
  service: string;

  constructor(
    nom: string,
    prenom: string,
    tel: string,
    adresse: string,
    dateDeNaissance: Date,
    email: string,
    password: string,
    service: string,
    id?: number
  ) {
    this.nom = nom;
    this.prenom = prenom;
    this.tel = tel;
    this.adresse = adresse;
    this.dateDeNaissance = dateDeNaissance;
    this.email = email;
    this.password = password;
    this.service = service;
    if (id) this.id = id;
  }
}