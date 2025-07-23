"use client";

import {
  FaMapPin as MapPin,
  FaPhone as Phone,
  FaLinkedin as Linkedin,
  FaFolder as Folder,
  FaFileDownload as Download,
} from "react-icons/fa";
import { IoIosMail as Mail } from "react-icons/io";
import { Badge } from "@/components/ui/badge";

export default function StudentResume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="relative">
      {/* Bouton d'impression */}
      <button
        onClick={handlePrint}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-10 print:hidden flex items-center"
        aria-label="Exporter en PDF"
      >
        <Download className="w-5 h-5 mr-2" />
        <span>Exporter en PDF</span>
      </button>

      {/* Conteneur principal */}
      <div className="resume-container bg-white max-w-4xl w-full mx-auto print:shadow-none relative overflow-hidden">
        {/* Fond bleu de la colonne gauche */}
        <div className="absolute top-0 left-0 h-full w-[30%] bg-[#f0f7ff]"></div>

        <div className="flex flex-col md:flex-row relative">
          {/* Colonne gauche */}
          <div className="p-4 md:w-[30%] relative z-10">
            <div className="contact-info mb-3">
              <div className="flex items-start mb-2">
                <Mail className="w-4 h-4 mr-2 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  <a
                    href="mailto:ya.hamadouche@gmail.com"
                    className="hover:text-blue-600 transition-colors"
                  >
                    ya.hamadouche@gmail.com
                  </a>
                </span>
              </div>
              <div className="flex items-start mb-2">
                <MapPin className="w-4 h-4 mr-2 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Bry-sur-Marne (94360)</span>
              </div>
              <div className="flex items-start mb-2">
                <Phone className="w-4 h-4 mr-2 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">07 69 60 00 70</span>
              </div>
            </div>

            <div className="skills mb-4">
              <h2 className="text-base font-bold uppercase mb-3 border-b border-blue-300 pb-1 tracking-wide text-blue-700">
                Compétences
              </h2>
              <h3 className="text-sm font-medium text-blue-600 mb-1.5 mt-2">
                Savoir-être et Soft Skills
              </h3>
              <ul className="list-none ml-0 text-sm">
                <li className="mb-1 before:content-['-'] before:mr-2 before:text-blue-500">
                  Excellent service client
                </li>
                <li className="mb-1 before:content-['-'] before:mr-2 before:text-blue-500">
                  Travail d'équipe et collaboration
                </li>
                <li className="mb-1 before:content-['-'] before:mr-2 before:text-blue-500">
                  Communication et écoute active
                </li>
                <li className="mb-1 before:content-['-'] before:mr-2 before:text-blue-500">
                  Sens de l'organisation
                </li>
                <li className="mb-1 before:content-['-'] before:mr-2 before:text-blue-500">
                  Adaptabilité et proactivité
                </li>
                <li className="mb-1 before:content-['-'] before:mr-2 before:text-blue-500">
                  Gestion d'événements
                </li>
              </ul>

              <h3 className="text-sm font-medium text-blue-600 mb-1.5 mt-3">
                Informatiques et Pratiques
              </h3>
              <ul className="list-none ml-0 text-sm">
                <li className="mb-1 before:content-['-'] before:mr-2 before:text-blue-500">
                  Suite Office (Word, Excel)
                </li>
                <li className="mb-1 before:content-['-'] before:mr-2 before:text-blue-500">
                  Google Workspace (Docs, Sheets)
                </li>
                <li className="mb-1 before:content-['-'] before:mr-2 before:text-blue-500">
                  Notions de développement web
                </li>
                <li className="mb-1 before:content-['-'] before:mr-2 before:text-blue-500">
                  Gestion et animation des réseaux sociaux
                </li>
                <li className="mb-1 before:content-['-'] before:mr-2 before:text-blue-500">
                  Apprentissage rapide des nouveaux outils
                </li>
              </ul>
            </div>

            <div className="langues mb-4">
              <h2 className="text-base font-bold uppercase mb-3 border-b border-blue-300 pb-1 tracking-wide text-blue-700">
                Langues
              </h2>
              <ul className="list-none ml-0 text-sm">
                <li className="mb-1 before:content-['-'] before:mr-2 before:text-blue-500">
                  Anglais (Courant)
                </li>
                <li className="mb-1 before:content-['-'] before:mr-2 before:text-blue-500">
                  Espagnol (Notions)
                </li>
              </ul>
            </div>

            <div className="interets mb-4">
              <h2 className="text-base font-bold uppercase mb-3 border-b border-blue-300 pb-1 tracking-wide text-blue-700">
                Centres d'intérêt
              </h2>
              <ul className="list-none ml-0 text-sm">
                <li className="mb-1 before:content-['-'] before:mr-2 before:text-blue-500">
                  Sport (Musculation, Escalade)
                </li>
                <li className="mb-1 before:content-['-'] before:mr-2 before:text-blue-500">
                  Technologie et Innovation
                </li>
                <li className="mb-1 before:content-['-'] before:mr-2 before:text-blue-500">
                  Psychologie
                </li>
                <li className="mb-1 before:content-['-'] before:mr-2 before:text-blue-500">
                  Automobile
                </li>
              </ul>
            </div>
            <div className="reseaux">
              <h2 className="text-base font-bold uppercase mb-3 border-b border-blue-300 pb-1 tracking-wide text-blue-700">
                Liens
              </h2>
              <div className="flex items-center mb-2">
                <Linkedin className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" />
                <span className="text-sm">
                  <a
                    href="https://www.linkedin.com/in/yacine-hamadouche"
                    className="text-blue-600 hover:underline"
                  >
                    linkedin.com/in/yacine-hamadouche
                  </a>
                </span>
              </div>
              <div className="mt-3 pt-2 border-t border-blue-300 bg-blue-50/30 px-2 py-1 rounded-sm">
                <div className="flex items-center text-xs">
                  <span className="text-blue-600 mr-1.5">✦</span>
                  <span className="text-blue-700 font-medium">
                    CV développé avec Next.js
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite */}
          <div className="p-4 md:w-[70%]">
            <div className="header mb-4">
              <h2 className="text-lg font-bold text-blue-700 mb-2">
              </h2>
              <h1 className="text-2xl font-extrabold uppercase mb-1 tracking-wide text-blue-800">
                HAMADOUCHE YACINE
              </h1>
              <p className="text-sm leading-tight">
                Dynamique et fiable, fort d'une expérience significative en
                accueil et en organisation d'événements dans un cadre
                international exigeant. Je souhaite mettre mon sens du service,
                ma proactivité et ma capacité d'adaptation au profit de votre
                équipe.
              </p>
            </div>

            <div className="education mb-4">
              <h2 className="text-base font-bold uppercase mb-4 border-b border-blue-300 pb-1 tracking-wide text-blue-700">
                Formation
              </h2>
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <h3 className="font-semibold text-sm text-blue-700">
                    Licence Mathématiques/Informatique
                  </h3>
                  <span className="text-xs text-blue-600">
                    Depuis septembre 2023
                  </span>
                </div>
                <div className="text-sm mb-2 font-medium">
                  Université Gustave Eiffel, Champs-sur-Marne
                </div>
                <ul className="text-sm list-none ml-0">
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">
                    Formation alliant rigueur mathématique et logique
                    informatique.
                  </li>
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">
                    Développement de l'esprit d'analyse et de résolution de
                    problèmes.
                  </li>
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">
                    Travaux de groupe favorisant le développement de l'esprit
                    d'équipe.
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <h3 className="font-semibold text-sm text-blue-700">
                    Baccalauréat Général (Spé. Maths & NSI)
                  </h3>
                  <span className="text-xs text-blue-600">
                    De septembre 2020 à juillet 2023
                  </span>
                </div>
                <div className="text-sm mb-2 font-medium">
                  Lycée Louis Armand, Nogent-sur-Marne
                </div>
                <ul className="text-sm list-none ml-0">
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">
                    Mention Bien (20/20 en informatique, 15/20 en mathématiques)
                  </li>
                </ul>
              </div>
            </div>

            <div className="experience mb-4">
              <h2 className="text-base font-bold uppercase mb-4 border-b border-blue-300 pb-1 tracking-wide text-blue-700">
                Expériences professionnelles
              </h2>

              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <h3 className="font-semibold text-sm text-blue-700">
                    Agent d'Accueil et d'Orientation – Événementiel
                  </h3>
                  <span className="text-xs text-blue-600">
                    De juin 2024 à septembre 2024
                  </span>
                </div>
                <div className="text-sm mb-2 font-medium">
                  Stade Tour Eiffel - Jeux Olympiques de Paris
                </div>
                <ul className="text-sm list-none ml-0">
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">
                    Accueillir, informer et orienter des milliers de visiteurs
                    internationaux.
                  </li>
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">
                    Assurer la fluidité des accès en vérifiant les billets et
                    accréditations.
                  </li>
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">
                    Collaborer avec les équipes de sécurité pour la gestion des
                    foules.
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <h3 className="font-semibold text-sm text-blue-700">
                    Développement web – Auto-entrepreneur
                  </h3>
                  <span className="text-xs text-blue-600">
                    Depuis juin 2023
                  </span>
                </div>
                <ul className="text-sm list-none ml-0">
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">
                    Conception et déploiement de sites web pour plusieurs
                    associations ou entreprises.
                  </li>
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">
                    Gestion complète de projets clients de la conception au
                    déploiement.
                  </li>
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">
                    Collaboration avec les clients pour analyser les besoins et
                    proposer des solutions.
                  </li>
                </ul>
              </div>
            </div>

            <div className="experience-associatives mb-4">
              <h2 className="text-base font-bold uppercase mb-4 border-b border-blue-300 pb-1 tracking-wide text-blue-700">
                Expériences associatives
              </h2>

              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <h3 className="font-semibold text-sm text-blue-700">
                    Membre du BDE (Bureau Des Etudiants)
                  </h3>
                  <span className="text-xs text-blue-600">
                    De septembre 2023 à juillet 2024
                  </span>
                </div>
                <div className="text-sm mb-2 font-medium">
                  Université Gustave Eiffel
                </div>
                <ul className="text-sm list-none ml-0">
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">
                    Organisation d'événements pour les étudiants (soirées,
                    activités culturelles, sportives, etc.).
                  </li>
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">
                    Participation à des réunions pour discuter de l'organisation
                    et de la gestion du budget.
                  </li>
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">
                    Collaboration avec d'autres associations pour organiser des
                    événements communs.
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <h3 className="font-semibold text-sm text-blue-700">
                    Jeune Conseiller Municipal
                  </h3>
                  <span className="text-xs text-blue-600">
                    De septembre 2019 à décembre 2023
                  </span>
                </div>
                <div className="text-sm mb-2 font-medium">
                  Mairie de Bry-sur-Marne
                </div>
                <ul className="text-sm list-none ml-0">
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">
                    Organisation réussie d'événements de grande envergure (+200
                    participants).
                  </li>
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">
                    Engagement citoyen et sens des responsabilités développés.
                  </li>
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">
                    Prise de parole en public et présentation de projets.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
