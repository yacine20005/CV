"use client";

import {
  FaMapPin as MapPin,
  FaPhone as Phone,
  FaGithub as Github,
  FaLinkedin as Linkedin,
  FaFolder as Folder,
  FaFileDownload as Download,
} from "react-icons/fa";
import { IoIosMail as Mail } from "react-icons/io";
import { Badge } from "@/components/ui/badge";

export default function Resume() {
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

      {/* Conteneur principal avec positionnement absolu pour le fond bleu */}
      <div className="resume-container bg-white max-w-4xl w-full mx-auto print:shadow-none relative overflow-hidden">
        {/* Fond bleu de la colonne gauche en position absolue pour couvrir toute la hauteur */}
        <div className="absolute top-0 left-0 h-full w-[30%] bg-[#f0f7ff]"></div>

        <div className="flex flex-col md:flex-row relative">
          {/* Colonne gauche - le contenu seulement, le fond est géré par la div absolue */}
          <div className="p-3 md:w-[30%] relative z-10">
            <div className="contact-info mb-2">
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

            <div className="skills mb-2">
              <h2 className="text-base font-bold uppercase mb-2 border-b border-blue-300 pb-1 tracking-wide text-blue-700">
                Compétences
              </h2>

              {/* Langages de programmation */}
              <h3 className="text-sm font-medium text-blue-600 mb-1.5 mt-2">
                Langages de programmation
              </h3>
              <div className="mb-1.5">
                <div className="flex justify-between">
                  <span className="font-medium text-sm">Python</span>
                  <span className="text-xs text-blue-700">Avancé</span>
                </div>
              </div>
              <div className="mb-1.5">
                <div className="flex justify-between">
                  <span className="font-medium text-sm">C</span>
                  <span className="text-xs text-blue-700">Avancé</span>
                </div>
              </div>
              <div className="mb-1.5">
                <div className="flex justify-between">
                  <span className="font-medium text-sm">JavaScript</span>
                  <span className="text-xs text-blue-600">Intermédiaire</span>
                </div>
              </div>
              <div className="mb-1.5">
                <div className="flex justify-between">
                  <span className="font-medium text-sm">TypeScript</span>
                  <span className="text-xs text-blue-500">Débutant</span>
                </div>
              </div>

              {/* Technologies web */}
              <h3 className="text-sm font-medium text-blue-600 mb-1.5 mt-3">
                Technologies web
              </h3>
              <div className="mb-1.5">
                <div className="flex justify-between">
                  <span className="font-medium text-sm">HTML / CSS</span>
                  <span className="text-xs text-blue-600">Intermédiaire</span>
                </div>
              </div>
              <div className="mb-1.5">
                <div className="flex justify-between">
                  <span className="font-medium text-sm">Flask</span>
                  <span className="text-xs text-blue-600">Intermédiaire</span>
                </div>
              </div>
              <div className="mb-1.5">
                <div className="flex justify-between">
                  <span className="font-medium text-sm">React/Next.js</span>
                  <span className="text-xs text-blue-500">Débutant</span>
                </div>
              </div>

              {/* Base de données */}
              <h3 className="text-sm font-medium text-blue-600 mb-1.5 mt-3">
                Base de données
              </h3>
              <div className="mb-1.5">
                <div className="flex justify-between">
                  <span className="font-medium text-sm">PostgreSQL</span>
                  <span className="text-xs text-blue-600">Intermédiaire</span>
                </div>
              </div>

              {/* Outils */}
              <h3 className="text-sm font-medium text-blue-600 mb-1.5 mt-3">
                Outils
              </h3>
              <div className="mb-1.5">
                <div className="flex justify-between">
                  <span className="font-medium text-sm">Git/GitHub</span>
                  <span className="text-xs text-blue-700">Avancé</span>
                </div>
              </div>
              <div className="mb-1.5">
                <div className="flex justify-between">
                  <span className="font-medium text-sm">VS Code</span>
                  <span className="text-xs text-blue-700">Avancé</span>
                </div>
              </div>
            </div>

            <div className="langues mb-2">
              <h2 className="text-base font-bold uppercase mb-2 border-b border-blue-300 pb-1 tracking-wide text-blue-700">
                Langues
              </h2>
              <ul className="list-none ml-0">
                <li className="mb-1 text-sm before:content-['-'] before:mr-2 before:text-blue-500">
                  Anglais
                </li>
                <li className="mb-1 text-sm before:content-['-'] before:mr-2 before:text-blue-500">
                  Espagnol
                </li>
              </ul>
            </div>

            <div className="atouts mb-2">
              <h2 className="text-base font-bold uppercase mb-2 border-b border-blue-300 pb-1 tracking-wide text-blue-700">
                Atouts
              </h2>
              <ul className="list-none ml-0">
                <li className="mb-1 text-sm before:content-['-'] before:mr-2 before:text-blue-500">
                  Leadership
                </li>
                <li className="mb-1 text-sm before:content-['-'] before:mr-2 before:text-blue-500">
                  Travail d'équipe et collaboration
                </li>
                <li className="mb-1 text-sm before:content-['-'] before:mr-2 before:text-blue-500">
                  Sens de l'organisation
                </li>
                <li className="mb-1 text-sm before:content-['-'] before:mr-2 before:text-blue-500">
                  Adaptabilité
                </li>
              </ul>
            </div>

            <div className="interets mb-2">
              <h2 className="text-base font-bold uppercase mb-2 border-b border-blue-300 pb-1 tracking-wide text-blue-700">
                Centres d'intérêt
              </h2>
              <ul className="list-none ml-0">
                <li className="mb-1 text-sm before:content-['-'] before:mr-2 before:text-blue-500">
                  Musculation
                </li>
                <li className="mb-1 text-sm before:content-['-'] before:mr-2 before:text-blue-500">
                  Escalade
                </li>
                <li className="mb-1 text-sm before:content-['-'] before:mr-2 before:text-blue-500">
                  Automobile
                </li>
                <li className="mb-1 text-sm before:content-['-'] before:mr-2 before:text-blue-500">
                  Psychologie
                </li>
              </ul>
            </div>

            <div className="reseaux">
              <h2 className="text-base font-bold uppercase mb-2 border-b border-blue-300 pb-1 tracking-wide text-blue-700">
                Réseaux sociaux
              </h2>
              <div className="flex items-center mb-2">
                <Folder className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" />
                <span className="text-sm">
                  Portfolio
                  <br />
                  <a
                    href="https://yacine-hamadouche.me"
                    className="text-blue-600 hover:underline"
                  >
                    yacine-hamadouche.me
                  </a>
                </span>
              </div>
              <div className="flex items-center mb-2">
                <Github className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" />
                <span className="text-sm">
                  GitHub{" "}
                  <a
                    href="https://github.com/yacine20005"
                    className="text-blue-600 hover:underline"
                  >
                    yacine20005
                  </a>
                </span>
              </div>
              <div className="flex items-center mb-2">
                <Linkedin className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" />
                <span className="text-sm">
                  LinkedIn{" "}
                  <a
                    href="https://www.linkedin.com/in/yacine-hamadouche"
                    className="text-blue-600 hover:underline"
                  >
                    yacine-hamadouche
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

          {/* Right Column */}
          <div className="p-3 md:w-[70%]">
            <div className="header mb-3">
              <h2 className="text-xl font-bold text-blue-700 mb-3">
                APPRENTI EN L3 INFORMATIQUE - UNIVERSITÉ GUSTAVE EIFFEL -
                SEPTEMBRE 2025
              </h2>
              <h1 className="text-2xl font-extrabold uppercase mb-1 tracking-wide text-blue-800">
                HAMADOUCHE YACINE
              </h1>
              <p className="text-sm leading-tight">
                Passionné par l'innovation technologique et doté d'un fort
                esprit d'équipe, je recherche une alternance pour mettre à
                profit mes acquis et avoir un impact concret en entreprise.
                Rigoureux et impliqué, je souhaite contribuer à des projets
                stimulants tout en consolidant mes compétences.
              </p>
            </div>

            <div className="education mb-2">
              <h2 className="text-base font-bold uppercase mb-2 border-b border-blue-300 pb-1 tracking-wide text-blue-700">
                Formations
              </h2>

              <div className="mb-3">
                <div className="flex justify-between mb-1">
                  <h3 className="font-semibold text-sm text-blue-700">
                    Licence Mathématiques/Informatique
                  </h3>
                  <span className="text-xs text-blue-600">
                    Depuis septembre 2023
                  </span>
                </div>
                <div className="text-sm mb-2 font-medium">
                  Université Gustave Eiffel - Champs-sur-Marne
                </div>
                <div className="text-xs mb-1 italic">Projets académiques</div>
                <div className="text-sm mb-2 ml-4 before:content-['-'] before:mr-2 before:text-blue-500">
                  <span className="font-medium">Nuage</span> – Plateforme de
                  gestion de jeux vidéo (Python/Flask, PostgreSQL, HTML/CSS)
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <h3 className="font-semibold text-sm text-blue-700">
                    Baccalauréat général avec spécialités
                    <br />
                    mathématiques et informatique
                  </h3>
                  <span className="text-xs text-blue-600">
                    De septembre 2020 à juillet 2023
                  </span>
                </div>
                <div className="text-sm mb-2 font-medium">
                  Lycée polyvalent Louis Armand - Nogent-sur-Marne
                </div>
                <div className="text-xs mb-1 italic">Niveau</div>
                <div className="text-sm mb-2 ml-4 before:content-['-'] before:mr-2 before:text-blue-500">
                  Mention Bien (20/20 en informatique, 15/20 en mathématiques)
                </div>
              </div>
            </div>

            <div className="experience mb-2">
              <h2 className="text-base font-bold uppercase mb-2 border-b border-blue-300 pb-1 tracking-wide text-blue-700">
                Expériences professionnelles
              </h2>

              <div className="mb-2">
                <div className="flex justify-between mb-1">
                  <h3 className="font-semibold text-sm text-blue-700">
                    Auto-entrepreneur
                  </h3>
                  <span className="text-xs text-blue-600">
                    Depuis juin 2023
                  </span>
                </div>
                <ul className="text-sm list-none ml-0">
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">
                    <span className="font-medium">Aogiri</span> – Site web pour
                    une association esport (Next.js, TypeScript, Tailwind CSS,
                    Sanity CMS)
                  </li>
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">
                    Conception et déploiement de sites web pour plusieurs
                    associations ou entreprises.
                  </li>
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">
                    Collaboration avec les clients pour analyser les besoins et
                    proposer des solutions techniques.
                  </li>
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">
                    Gestion de la prospection clientèle.
                  </li>
                </ul>
              </div>
            </div>

            <div className="associations mb-2">
              <h2 className="text-base font-bold uppercase mb-2 border-b border-blue-300 pb-1 tracking-wide text-blue-700">
                Expériences associatives
              </h2>

              <div>
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
                    activités culturelles, sportives, etc.)
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

              <div className="mb-2"></div>

              <div>
                <div className="flex justify-between mb-1">
                  <h3 className="font-semibold text-sm text-blue-700">
                    Jeune Conseiller Municipal
                  </h3>
                  <span className="text-xs text-blue-600">
                    De septembre 2019 à décembre 2023
                  </span>
                </div>
                <div className="text-sm mb-2 font-medium">Bry-sur-Marne</div>
                <ul className="text-sm list-none ml-0">
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">
                    Collaboration avec les habitants pour recueillir leurs
                    besoins et suggestions.
                  </li>
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">
                    Organisation d'événements à échelle communale (dont
                    plusieurs rassemblant 200+ participants).
                  </li>
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">
                    Participation à la mise en place de projets locaux.
                  </li>
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">
                    Présentation de propositions lors d'assemblées plénières.
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
