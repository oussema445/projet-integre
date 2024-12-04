import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router'; // Pour la navigation après la soumission

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  selectedRole: string = '';  // Rôle sélectionné
  nom: string = '';           // Nom de l'utilisateur
  prenom: string = '';        // Prénom de l'utilisateur
  tel: string = '';           // Téléphone de l'utilisateur
  email: string = '';         // Email de l'utilisateur
  code?: string;              // Code pour le médecin
  diplomeFile?: File;         // Fichier pour le diplôme
  diplomePreview: string | ArrayBuffer | null = null;  // Prévisualisation du diplôme
  numCIN?: string;            // Numéro CIN pour le médecin
  genre?: string;             // Genre pour le laveur
  description?: string;       // Description pour l'agence
  prix?: number;              // Prix pour l'agence
  service?: string;           // Service pour l'agence
  errorMessage: string = '';  // Message d'erreur

  constructor(private userService: UserService, private router: Router) {}

  // Méthode pour gérer le fichier téléchargé
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.diplomeFile = input.files[0];
      // Prévisualisation du fichier (image)
      const reader = new FileReader();
      reader.onload = () => {
        this.diplomePreview = reader.result;
      };
      reader.readAsDataURL(this.diplomeFile);
    }
  }

  // Méthode pour gérer la soumission
  onRegister(): void {
    // Validation du rôle
    if (!this.selectedRole) {
      this.errorMessage = 'Veuillez choisir un rôle!';
      return;
    }

    // Validation des champs communs
    if (!this.nom || !this.prenom || !this.tel || !this.email) {
      this.errorMessage = 'Veuillez remplir tous les champs obligatoires!';
      return;
    }

    // Validation spécifique au rôle sélectionné
    if (this.selectedRole === 'medecin' && (!this.code || !this.numCIN)) {
      this.errorMessage = 'Pour un médecin, le code et le numéro CIN sont obligatoires!';
      return;
    }

    if (this.selectedRole === 'agence' && (!this.description || !this.prix || !this.service)) {
      this.errorMessage = 'Pour une agence, la description, le prix et le service sont obligatoires!';
      return;
    }

    // Préparation des données pour l'API sous forme de FormData
    const formData = new FormData();
    formData.append('role', this.selectedRole);
    formData.append('nom', this.nom);
    formData.append('prenom', this.prenom);
    formData.append('tel', this.tel);
    formData.append('email', this.email);

    if (this.selectedRole === 'medecin') {
      formData.append('code', this.code || '');
      if (this.diplomeFile) {
        formData.append('diplome', this.diplomeFile);
      }
      formData.append('numCIN', this.numCIN || '');
    } else if (this.selectedRole === 'laveur') {
      formData.append('genre', this.genre || '');
    } else if (this.selectedRole === 'agence') {
      formData.append('description', this.description || '');
      formData.append('prix', this.prix?.toString() || '');
      formData.append('service', this.service || '');
    }

    // Envoi des données au backend via UserService
    this.userService.registerMedecin(formData).subscribe(
      (response) => {
        console.log('Utilisateur enregistré avec succès:', response);
        this.router.navigate(['/#/payment']), {
          queryParams: { data: JSON.stringify(formData) }}; // Redirection vers la page d'accueil ou une autre page après l'inscription
      },
      (error) => {
        console.error('Erreur lors de l\'enregistrement:', error);
        this.errorMessage = 'Erreur lors de l\'enregistrement. Veuillez réessayer.';
      }
    );
  }
}
