import { NgFor, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink,Router } from '@angular/router';
import { RegistrationFormComponentComponent } from '../registration-form-component/registration-form-component.component';
export interface Course {
  image:string; 
  nom:string;  
  stackTechnique:string;  
  dates:string; 
  titre:string;  
  nombrePlaces: number; 
  tarif:string; 
}
@Component({
  selector: 'app-course-list-component',
  standalone: true,
  imports: [NgFor,RouterLink,RegistrationFormComponentComponent],
  templateUrl: './course-list-component.component.html',
  styleUrl: './course-list-component.component.css'
})
export class CourseListComponentComponent {
    onSubmit() {
        alert('Form submitted!');
    }
formations: Course[] = [
    {
        "image": "url_image_1.jpg",
        "nom": "Formation React Avancé",
        "stackTechnique": "React, Redux, TypeScript",
        "dates": "2023-09-01 à 2023-09-10",
        "titre": "Développeur Frontend React",
        "nombrePlaces": 15,
        "tarif": "1500 EUR"
    },
    {
        "image": "url_image_2.jpg",
        "nom": "Introduction à Python",
        "stackTechnique": "Python, Pandas, Jupyter",
        "dates": "2023-10-05 à 2023-10-14",
        "titre": "Data Analyst Python",
        "nombrePlaces": 20,
        "tarif": "1300 EUR"
    },
    {
        "image": "url_image_3.jpg",
        "nom": "Formation Java Complète",
        "stackTechnique": "Java, Spring Boot, Hibernate",
        "dates": "2023-11-15 à 2023-11-25",
        "titre": "Développeur Backend Java",
        "nombrePlaces": 12,
        "tarif": "1800 EUR"
    },
    {
        "image": "url_image_4.jpg",
        "nom": "Sécurité Cybernétique 101",
        "stackTechnique": "OWASP, Kali Linux, Wireshark",
        "dates": "2023-12-01 à 2023-12-10",
        "titre": "Expert en Sécurité Informatique",
        "nombrePlaces": 10,
        "tarif": "2000 EUR"
    },
    {
        "image": "url_image_5.jpg",
        "nom": "Cours intensif de Node.js",
        "stackTechnique": "Node.js, Express, MongoDB",
        "dates": "2024-01-07 à 2024-01-17",
        "titre": "Développeur Full Stack JS",
        "nombrePlaces": 15,
        "tarif": "1600 EUR"
    }/*,
    {
        "image": "url_image_6.jpg",
        "nom": "UX/UI Design pour Débutants",
        "stackTechnique": "Sketch, Figma, Adobe XD",
        "dates": "2024-02-11 à 2024-02-20",
        "titre": "Designer UX/UI",
        "nombrePlaces": 18,
        "tarif": "1400 EUR"
    },
    {
        "image": "url_image_7.jpg",
        "nom": "Blockchain et Cryptomonnaies",
        "stackTechnique": "Ethereum, Solidity, Smart Contracts",
        "dates": "2024-03-05 à 2024-03-15",
        "titre": "Développeur Blockchain",
        "nombrePlaces": 10,
        "tarif": "2200 EUR"
    },
    {
        "image": "url_image_8.jpg",
        "nom": "Big Data avec Hadoop",
        "stackTechnique": "Hadoop, Spark, Hive",
        "dates": "2024-04-01 à 2024-04-11",
        "titre": "Ingénieur Big Data",
        "nombrePlaces": 12,
        "tarif": "2500 EUR"
    },
    {
        "image": "url_image_9.jpg",
        "nom": "Cours avancé de machine learning",
        "stackTechnique": "TensorFlow, Keras, Scikit-learn",
        "dates": "2024-05-06 à 2024-05-16",
        "titre": "Spécialiste en Machine Learning",
        "nombrePlaces": 8,
        "tarif": "2700 EUR"
    },
    {
        "image": "url_image_10.jpg",
        "nom": "Introduction à Docker et Kubernetes",
        "stackTechnique": "Docker, Kubernetes, CI/CD",
        "dates": "2024-06-10 à 2024-06-20",
        "titre": "DevOps",
        "nombrePlaces": 20,
        "tarif": "1900 EUR"
    },
    {
        "image": "url_image_11.jpg",
        "nom": "Formation avancée en CSS",
        "stackTechnique": "CSS3, SASS, Flexbox",
        "dates": "2024-07-15 à 2024-07-25",
        "titre": "Développeur Frontend Avancé",
        "nombrePlaces": 15,
        "tarif": "1200 EUR"
    },
    {
        "image": "url_image_12.jpg",
        "nom": "Développement de jeux avec Unity",
        "stackTechnique": "Unity, C#, AR/VR",
        "dates": "2024-08-01 à 2024-08-11",
        "titre": "Développeur de Jeux",
        "nombrePlaces": 14,
        "tarif": "2100 EUR"
    },
    {
        "image": "url_image_13.jpg",
        "nom": "Expertise en SQL et Bases de Données",
        "stackTechnique": "SQL, PostgreSQL, Database Design",
        "dates": "2024-09-05 à 2024-09-15",
        "titre": "Analyste de Bases de Données",
        "nombrePlaces": 12,
        "tarif": "1100 EUR"
    },
    {
        "image": "url_image_14.jpg",
        "nom": "Conception et développement de microservices",
        "stackTechnique": "Microservices, Docker, Spring Boot",
        "dates": "2024-10-10 à 2024-10-20",
        "titre": "Architecte Microservices",
        "nombrePlaces": 9,
        "tarif": "2300 EUR"
    },
    {
        "image": "url_image_15.jpg",
        "nom": "Gestion de projet Agile",
        "stackTechnique": "Agile, Scrum, Kanban",
        "dates": "2024-11-01 à 2024-11-11",
        "titre": "Scrum Master",
        "nombrePlaces": 20,
        "tarif": "1000 EUR"
    },
    {
        "image": "url_image_16.jpg",
        "nom": "Deep Learning pour la vision par ordinateur",
        "stackTechnique": "Deep Learning, TensorFlow, OpenCV",
        "dates": "2024-12-07 à 2024-12-17",
        "titre": "Expert en Vision par Ordinateur",
        "nombrePlaces": 10,
        "tarif": "3000 EUR"
    },
    {
        "image": "url_image_17.jpg",
        "nom": "Automatisation des tests logiciels",
        "stackTechnique": "Selenium, Postman, Jenkins",
        "dates": "2025-01-12 à 2025-01-22",
        "titre": "Ingénieur QA Automatisation",
        "nombrePlaces": 13,
        "tarif": "1600 EUR"
    },
    {
        "image": "url_image_18.jpg",
        "nom": "Développement Web Full Stack avec Angular",
        "stackTechnique": "Angular, TypeScript, Node.js",
        "dates": "2025-02-15 à 2025-02-25",
        "titre": "Développeur Full Stack Angular",
        "nombrePlaces": 12,
        "tarif": "1700 EUR"
    },
    {
        "image": "url_image_19.jpg",
        "nom": "Création de contenu et Marketing Digital",
        "stackTechnique": "SEO, Content Management, Google Analytics",
        "dates": "2025-03-10 à 2025-03-20",
        "titre": "Spécialiste Marketing Digital",
        "nombrePlaces": 15,
        "tarif": "1400 EUR"
    },
    {
        "image": "url_image_20.jpg",
        "nom": "Introduction à l'IA pour les affaires",
        "stackTechnique": "AI, Machine Learning, Business Analytics",
        "dates": "2025-04-04 à 2025-04-14",
        "titre": "Consultant en Intelligence Artificielle",
        "nombrePlaces": 8,
        "tarif": "2500 EUR"
    }*/
]
;
}
