'use client';

import {
  FaMapPin as MapPin,
  FaPhone as Phone,
  FaLinkedin as Linkedin,
  FaFolder as Folder,
  FaFileDownload as Download,
} from 'react-icons/fa';
import { IoIosMail as Mail } from 'react-icons/io';
import { Badge } from '@/components/ui/badge';

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
      <div className="resume-container bg-white max-w-4xl w-full mx-auto print:shadow-none relative">
        {/* Fond bleu de la colonne gauche */}
        <div className="absolute top-0 left-0 bottom-0 w-[30%] bg-[#f0f7ff]"></div>

        <div className="flex flex-col md:flex-row relative">
          {/* Colonne gauche */}
          <div className="p-6 md:w-[30%] relative z-10">
            <div className="contact-info mb-4">
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
                Relationnelles et Organisationnelles
              </h3>
              <ul className="list-none ml-0 text-sm">
                <li className="mb-1 before:content-['-'] before:mr-2 before:text-blue-500">Excellent service client</li>
                <li className="mb-1 before:content-['-'] before:mr-2 before:text-blue-500">Travail d'équipe et collaboration</li>
                <li className="mb-1 before:content-['-'] before:mr-2 before:text-blue-500">Communication et écoute active</li>
                <li className="mb-1 before:content-['-'] before:mr-2 before:text-blue-500">Sens de l'organisation</li>
                <li className="mb-1 before:content-['-'] before:mr-2 before:text-blue-500">Adaptabilité et proactivité</li>
                <li className="mb-1 before:content-['-'] before:mr-2 before:text-blue-500">Gestion d'événements</li>
              </ul>

              <h3 className="text-sm font-medium text-blue-600 mb-1.5 mt-3">
                Informatiques
              </h3>
              <ul className="list-none ml-0 text-sm">
                <li className="mb-1 before:content-['-'] before:mr-2 before:text-blue-500">Suite Office (Word, Excel)</li>
                <li className="mb-1 before:content-['-'] before:mr-2 before:text-blue-500">Google Workspace (Docs, Sheets)</li>
                <li className="mb-1 before:content-['-'] before:mr-2 before:text-blue-500">Aisance avec les outils de caisse</li>
                <li className="mb-1 before:content-['-'] before:mr-2 before:text-blue-500">Notions de développement web</li>
              </ul>
            </div>

            <div className="langues mb-4">
              <h2 className="text-base font-bold uppercase mb-3 border-b border-blue-300 pb-1 tracking-wide text-blue-700">
                Langues
              </h2>
              <ul className="list-none ml-0 text-sm">
                <li className="mb-1">Français (Natif)</li>
                <li className="mb-1">Anglais (Courant)</li>
                <li className="mb-1">Espagnol (Notions)</li>
              </ul>
            </div>

            <div className="interets mb-4">
              <h2 className="text-base font-bold uppercase mb-3 border-b border-blue-300 pb-1 tracking-wide text-blue-700">
                Centres d'intérêt
              </h2>
              <ul className="list-none ml-0 text-sm">
                <li className="mb-1">Musculation & Escalade</li>
                <li className="mb-1">Psychologie</li>
                <li className="mb-1">Automobile</li>
              </ul>
            </div>
             <div className="reseaux">
              <h2 className="text-base font-bold uppercase mb-3 border-b border-blue-300 pb-1 tracking-wide text-blue-700">
                Profil en ligne
              </h2>
              <div className="flex items-center">
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
            </div>
          </div>

          {/* Colonne droite */}
          <div className="p-6 md:w-[70%]">
            <div className="header mb-4">
              <h1 className="text-2xl font-extrabold uppercase mb-1 tracking-wide text-blue-800">
                HAMADOUCHE YACINE
              </h1>
              <h2 className="text-l font-bold text-blue-700 mb-2">
                Étudiant à la recherche d'un emploi d'été
              </h2>
              <p className="text-sm leading-tight">
                Dynamique et fiable, fort d'une expérience significative en accueil et en organisation d'événements dans un cadre international exigeant. Je souhaite mettre mon sens du service, ma proactivité et ma capacité d'adaptation au profit de votre équipe.
              </p>
            </div>

            <div className="experience mb-4">
              <h2 className="text-base font-bold uppercase mb-4 border-b border-blue-300 pb-1 tracking-wide text-blue-700">
                Expériences
              </h2>

              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <h3 className="font-semibold text-sm text-blue-700">Agent d'Accueil et d'Orientation – Événementiel</h3>
                  <span className="text-xs text-blue-600">Été 2024</span>
                </div>
                <div className="text-sm mb-2 font-medium">Stade Tour Eiffel - Jeux Olympiques de Paris</div>
                <ul className="text-sm list-none ml-0">
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">Accueillir, informer et orienter des milliers de visiteurs internationaux.</li>
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">Assurer la fluidité des accès en vérifiant billets et accréditations.</li>
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">Gérer les situations imprévues avec calme pour garantir une expérience positive.</li>
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">Collaborer avec les équipes de sécurité pour la gestion des foules.</li>
                </ul>
              </div>

               <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <h3 className="font-semibold text-sm text-blue-700">Jeune Conseiller Municipal</h3>
                  <span className="text-xs text-blue-600">2019 – 2023</span>
                </div>
                <div className="text-sm mb-2 font-medium">Mairie de Bry-sur-Marne</div>
                <ul className="text-sm list-none ml-0">
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">Organisation d'événements locaux (dont plusieurs à +200 participants).</li>
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">Collaboration avec les habitants pour recueillir leurs besoins et suggestions.</li>
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">Participation active à la mise en place de projets pour la commune.</li>
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">Présentation de propositions lors d'assemblées plénières.</li>
                </ul>
              </div>

              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <h3 className="font-semibold text-sm text-blue-700">Gestion de projets web – Freelance</h3>
                  <span className="text-xs text-blue-600">Depuis juin 2023</span>
                </div>
                 <div className="text-sm mb-2 font-medium">Auto-entrepreneur</div>
                <ul className="text-sm list-none ml-0">
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">Gérer des projets de création de sites web de la conception au déploiement.</li>
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">Analyser les besoins des clients et proposer des solutions adaptées.</li>
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">Respecter les délais et gérer un planning de projet en autonomie.</li>
                </ul>
              </div>

              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <h3 className="font-semibold text-sm text-blue-700">Membre Actif – Bureau Des Étudiants</h3>
                  <span className="text-xs text-blue-600">2023 – 2024</span>
                </div>
                <div className="text-sm mb-2 font-medium">Université Gustave Eiffel</div>
                 <ul className="text-sm list-none ml-0">
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">Organiser des événements variés (soirées, culturels, sportifs).</li>
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">Participer à la gestion du budget et à la recherche de partenariats.</li>
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">Collaborer avec d'autres associations pour des événements communs.</li>
                </ul>
              </div>
            </div>

            <div className="education mb-4">
              <h2 className="text-base font-bold uppercase mb-4 border-b border-blue-300 pb-1 tracking-wide text-blue-700">
                Formation
              </h2>
              <div className="mb-2">
                <div className="flex justify-between mb-1">
                  <h3 className="font-semibold text-sm text-blue-700">Licence Mathématiques/Informatique</h3>
                  <span className="text-xs text-blue-600">En cours</span>
                </div>
                <div className="text-sm mb-2 font-medium">Université Gustave Eiffel, Champs-sur-Marne</div>
                <ul className="text-sm list-none ml-0">
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">Projet académique : Conception d'une plateforme de gestion (travail d'équipe, gestion de projet).</li>
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">Développement de compétences en résolution de problèmes et analyse logique.</li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <h3 className="font-semibold text-sm text-blue-700">Baccalauréat Général (Spé. Maths & NSI)</h3>
                  <span className="text-xs text-blue-600">2023</span>
                </div>
                <div className="text-sm mb-2 font-medium">Lycée Louis Armand, Nogent-sur-Marne</div>
                <ul className="text-sm list-none ml-0">
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">Mention Bien</li>
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">20/20 en informatique</li>
                  <li className="ml-4 before:content-['-'] before:mr-2 before:text-blue-500">15/20 en mathématiques</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        {/* Badge */}
        <div className="absolute right-2 bottom-2">
          <Badge variant="secondary" className="shadow-md">
            CV réalisé avec <span className="mx-1 font-bold text-blue-600">Next.js</span> & <span className="mx-1 font-bold text-blue-600">Tailwind CSS</span>
          </Badge>
        </div>
      </div>
    </div>
  );
}
