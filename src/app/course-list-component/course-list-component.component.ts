import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink,Router } from '@angular/router';
import { RegistrationFormComponentComponent } from '../registration-form-component/registration-form-component.component';
import { SearchCourseComponent } from '../search-course/search-course.component';
export interface lieux {
  adresse:string; 
  ville:string; 
  
}
export interface Course {
  image:string; 
  nom:string;  
  stackTechnique:string;  
  dates:string; 
  titre:string;  
  nombrePlaces: number; 
  tarif:string;
  lieux: lieux[]; 
}
@Component({
  selector: 'app-course-list-component',
  standalone: true,
  imports: [CommonModule,RouterLink,RegistrationFormComponentComponent,SearchCourseComponent],
  templateUrl: './course-list-component.component.html',
  styleUrl: './course-list-component.component.css'
})
export class CourseListComponentComponent {
   
    //IT, Design ou Dev
FORMATIONS: Course[] = [
    {
        "image": "url_image_1.jpg",
        "nom": "Formation React Avancé",
        "stackTechnique": "Dev",
        "dates": "2023-09-01 à 2023-09-10",
        "titre": "Développeur Frontend React",
        "nombrePlaces": 15,
        "tarif": "1500 EUR",
        "lieux": [
            {
                "adresse": "10 rue de la paix",
                "ville":"Paris"
                 
            },
            {
                "adresse": "11 rue de la paix",
                "ville":"Lyon"
                 
            }
        ],
             
    },
    {
        "image": "url_image_2.jpg",
        "nom": "Introduction à Python",
        "stackTechnique": "Dev",
        "dates": "2023-10-05 à 2023-10-14",
        "titre": "Data Analyst Python",
        "nombrePlaces": 20,
        "tarif": "1300 EUR","lieux": [
            {
                "adresse": "10 rue de la paix",
                "ville":"Paris"
                 
            },
            {
                "adresse": "11 rue de la paix",
                "ville":"Lyon"
                 
            }
        ],
    },
    {
        "image": "url_image_3.jpg",
        "nom": "Formation Java Complète",
        "stackTechnique": "Dev",
        "dates": "2023-11-15 à 2023-11-25",
        "titre": "Développeur Backend Java",
        "nombrePlaces": 12,
        "tarif": "1800 EUR","lieux": [
            {
                "adresse": "10 rue de la paix",
                "ville":"Paris"
                 
            },
            {
                "adresse": "11 rue de la paix",
                "ville":"Lyon"
                 
            }
        ],
    },
    {
        "image": "url_image_4.jpg",
        "nom": "Sécurité Cybernétique 101",
        "stackTechnique": "Dev",
        "dates": "2023-12-01 à 2023-12-10",
        "titre": "Expert en Sécurité Informatique",
        "nombrePlaces": 10,
        "tarif": "2000 EUR","lieux": [
            {
                "adresse": "10 rue de la paix",
                "ville":"Paris"
                 
            },
            {
                "adresse": "11 rue de la paix",
                "ville":"Lyon"
                 
            }
        ],
    },
    {
        "image": "url_image_5.jpg",
        "nom": "Cours intensif de Node.js",
        "stackTechnique": "Dev",
        "dates": "2024-01-07 à 2024-01-17",
        "titre": "Développeur Full Stack JS",
        "nombrePlaces": 15,
        "tarif": "1600 EUR","lieux": [
            {
                "adresse": "10 rue de la paix",
                "ville":"Paris"
                 
            },
            {
                "adresse": "11 rue de la paix",
                "ville":"Lyon"
                 
            }
        ],
    },
    {
        "image": "url_image_6.jpg",
        "nom": "UX/UI Design pour Débutants",
        "stackTechnique": "Design",
        "dates": "2024-02-11 à 2024-02-20",
        "titre": "Designer UX/UI",
        "nombrePlaces": 18,
        "tarif": "1400 EUR","lieux": [
            {
                "adresse": "10 rue de la paix",
                "ville":"Paris"
                 
            },
            {
                "adresse": "11 rue de la paix",
                "ville":"Lyon"
                 
            }
        ],
    },
    {
        "image": "url_image_7.jpg",
        "nom": "Blockchain et Cryptomonnaies",
        "stackTechnique": "Dev",
        "dates": "2024-03-05 à 2024-03-15",
        "titre": "Développeur Blockchain",
        "nombrePlaces": 10,
        "tarif": "2200 EUR",
        "lieux": [
            {
                "adresse": "10 rue de la paix",
                "ville":"Paris"
                 
            },
            {
                "adresse": "11 rue de la paix",
                "ville":"Lyon"
                 
            }
        ],
    },
    {
        "image": "url_image_8.jpg",
        "nom": "Big Data avec Hadoop",
        "stackTechnique": "Dev",
        "dates": "2024-04-01 à 2024-04-11",
        "titre": "Ingénieur Big Data",
        "nombrePlaces": 12,
        "tarif": "2500 EUR",
        "lieux": [
            {
                "adresse": "10 rue de la paix",
                "ville":"Paris"
                 
            },
            {
                "adresse": "11 rue de la paix",
                "ville":"Lyon"
                 
            }
        ],
    },
    {
        "image": "url_image_9.jpg",
        "nom": "Cours avancé de machine learning",
        "stackTechnique": "Dev",
        "dates": "2024-05-06 à 2024-05-16",
        "titre": "Spécialiste en Machine Learning",
        "nombrePlaces": 8,
        "tarif": "2700 EUR",
        "lieux": [
            {
                "adresse": "10 rue de la paix",
                "ville":"Paris"
                 
            },
            {
                "adresse": "11 rue de la paix",
                "ville":"Lyon"
                 
            }
        ],
    },
    {
        "image": "url_image_10.jpg",
        "nom": "Introduction à Docker et Kubernetes",
        "stackTechnique": "Dev",
        "dates": "2024-06-10 à 2024-06-20",
        "titre": "DevOps",
        "nombrePlaces": 20,
        "tarif": "1900 EUR",
        "lieux": [
            {
                "adresse": "10 rue de la paix",
                "ville":"Paris"
                 
            },
            {
                "adresse": "11 rue de la paix",
                "ville":"Lyon"
                 
            }
        ],
    },
    {
        "image": "url_image_11.jpg",
        "nom": "Formation avancée en CSS",
        "stackTechnique": "Design",
        "dates": "2024-07-15 à 2024-07-25",
        "titre": "Développeur Frontend Avancé",
        "nombrePlaces": 15,
        "tarif": "1200 EUR",
        "lieux": [
            {
                "adresse": "10 rue de la paix",
                "ville":"Paris"
                 
            },
            {
                "adresse": "11 rue de la paix",
                "ville":"Lyon"
                 
            }
        ],
    },
    {
        "image": "url_image_12.jpg",
        "nom": "Développement de jeux avec Unity",
        "stackTechnique": "Infra",
        "dates": "2024-08-01 à 2024-08-11",
        "titre": "Développeur de Jeux",
        "nombrePlaces": 14,
        "tarif": "2100 EUR",
        "lieux": [
            {
                "adresse": "10 rue de la paix",
                "ville":"Paris"
                 
            },
            {
                "adresse": "11 rue de la paix",
                "ville":"Lyon"
                 
            }
        ],
    },
    {
        "image": "url_image_13.jpg",
        "nom": "Expertise en SQL et Bases de Données",
        "stackTechnique": "Dev",
        "dates": "2024-09-05 à 2024-09-15",
        "titre": "Analyste de Bases de Données",
        "nombrePlaces": 12,
        "tarif": "1100 EUR",
        "lieux": [
            {
                "adresse": "10 rue de la paix",
                "ville":"Paris"
                 
            },
            {
                "adresse": "11 rue de la paix",
                "ville":"Lyon"
                 
            }
        ],
    },
    {
        "image": "url_image_14.jpg",
        "nom": "Conception et développement de microservices",
        "stackTechnique": "Infra",
        "dates": "2024-10-10 à 2024-10-20",
        "titre": "Architecte Microservices",
        "nombrePlaces": 9,
        "tarif": "2300 EUR",
        "lieux": [
            {
                "adresse": "10 rue de la paix",
                "ville":"Paris"
                 
            },
            {
                "adresse": "11 rue de la paix",
                "ville":"Lyon"
                 
            }
        ],
    },
    {
        "image": "url_image_15.jpg",
        "nom": "Gestion de projet Agile",
        "stackTechnique": "Design",
        "dates": "2024-11-01 à 2024-11-11",
        "titre": "Scrum Master",
        "nombrePlaces": 20,
        "tarif": "1000 EUR",
        "lieux": [
            {
                "adresse": "10 rue de la paix",
                "ville":"Paris"
                 
            },
            {
                "adresse": "11 rue de la paix",
                "ville":"Lyon"
                 
            }
        ],
    },
    {
        "image": "url_image_16.jpg",
        "nom": "Deep Learning pour la vision par ordinateur",
        "stackTechnique": "Infra",
        "dates": "2024-12-07 à 2024-12-17",
        "titre": "Expert en Vision par Ordinateur",
        "nombrePlaces": 10,
        "tarif": "3000 EUR",
        "lieux": [
            {
                "adresse": "10 rue de la paix",
                "ville":"Paris"
                 
            },
            {
                "adresse": "11 rue de la paix",
                "ville":"Lyon"
                 
            }
        ],
    },
    {
        "image": "url_image_17.jpg",
        "nom": "Automatisation des tests logiciels",
        "stackTechnique": "Infra",
        "dates": "2025-01-12 à 2025-01-22",
        "titre": "Ingénieur QA Automatisation",
        "nombrePlaces": 13,
        "tarif": "1600 EUR",
        "lieux": [
            {
                "adresse": "10 rue de la paix",
                "ville":"Paris"
                 
            },
            {
                "adresse": "11 rue de la paix",
                "ville":"Lyon"
                 
            }
        ],
    },
    {
        "image": "url_image_18.jpg",
        "nom": "Développement Web Full Stack avec Angular",
        "stackTechnique": "Dev",
        "dates": "2025-02-15 à 2025-02-25",
        "titre": "Développeur Full Stack Angular",
        "nombrePlaces": 12,
        "tarif": "1700 EUR",
        "lieux": [
            {
                "adresse": "10 rue de la paix",
                "ville":"Paris"
                 
            },
            {
                "adresse": "11 rue de la paix",
                "ville":"Lyon"
                 
            }
        ],
    },
    {
        "image": "url_image_19.jpg",
        "nom": "Création de contenu et Marketing Digital",
        "stackTechnique": "Infra",
        "dates": "2025-03-10 à 2025-03-20",
        "titre": "Spécialiste Marketing Digital",
        "nombrePlaces": 15,
        "tarif": "1400 EUR",
        "lieux": [
            {
                "adresse": "10 rue de la paix",
                "ville":"Paris"
                 
            },
            {
                "adresse": "11 rue de la paix",
                "ville":"Lyon"
                 
            }
        ],
    },
    {
        "image": "url_image_20.jpg",
        "nom": "Introduction à l'IA pour les affaires",
        "stackTechnique": "Infra",
        "dates": "2025-04-04 à 2025-04-14",
        "titre": "Consultant en Intelligence Artificielle",
        "nombrePlaces": 8,
        "tarif": "2500 EUR",
        "lieux": [
            {
                "adresse": "10 rue de la paix",
                "ville":"Paris"
                 
            },
            {
                "adresse": "11 rue de la paix",
                "ville":"Lyon"
                 
            }
        ],
    }
];
    ArrayStackTechnique:  string[] = ['Tout','Infra','Dev','Design'];    
    selectedStackTechnique:string='';  
    ArrayFormationFilter: Course[] = this.FORMATIONS;  
    recevSelectedFormation(nameFormation: string) { 
        this.selectedStackTechnique = nameFormation; 
        if (nameFormation === 'Tout') {
            this.ArrayFormationFilter = this.FORMATIONS;
            //console.log(this.ArrayFormationFilter );            
        } else {            
             this.ArrayFormationFilter = this.FORMATIONS.filter((formation) => formation.stackTechnique === nameFormation);
             
             //console.log(this.ArrayFormationFilter );            
        }
    }
    onSubmit(lieux: Array<lieux>) {
        let message='Lieux des course : \n';
        for(let i = 0; i < lieux.length; i++) {
            message +=lieux[i].adresse +' '+ lieux[i].ville+'\n';           
        }
        alert(message);
    }

}
