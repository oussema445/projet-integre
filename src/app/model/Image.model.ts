export class Image {
    idImage?: number; // Identifiant unique (facultatif)
    name: string; // Nom de l'image
    type: string; // Type de fichier (ex : "image/png", "image/jpeg")
    image: Uint8Array | null; // Contenu de l'image au format binaire (base64)
    medecinId?: number; // ID du médecin associé (facultatif pour éviter la dépendance circulaire)
  
    constructor(
      name: string,
      type: string,
      image: Uint8Array | null,
      medecinId?: number,
      idImage?: number
    ) {
      this.name = name;
      this.type = type;
      this.image = image;
      if (medecinId) this.medecinId = medecinId;
      if (idImage) this.idImage = idImage;
    }
  }
  