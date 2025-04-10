import {
  FaMapPin as MapPin,
  FaPhone as Phone,
  FaFlag as Flag,
  FaGithub as Github,
  FaLinkedin as Linkedin,
  FaFolder as Folder,
} from "react-icons/fa";
import { IoIosMail as Mail } from "react-icons/io";
export default function Resume() {
  return (
    <div className="resume-container bg-white max-w-4xl w-full mx-auto print:shadow-none">
      <div className="flex flex-col md:flex-row">
        {/* Left Column */}
        <div className="bg-gray-50 p-6 md:w-[30%]">
          <div className="contact-info mb-6">
            <div className="flex items-start mb-2">
              <Mail className="w-4 h-4 mr-2 text-gray-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm">
                <a href="mailto:ya.hamadouche@gmail.com">ya.hamadouche@gmail.com</a>
              </span>
            </div>
            <div className="flex items-start mb-2">
              <MapPin className="w-4 h-4 mr-2 text-gray-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm">Bry-sur-Marne (94360)</span>
            </div>
            <div className="flex items-start mb-2">
              <Flag className="w-4 h-4 mr-2 text-gray-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm">Français</span>
            </div>
            <div className="flex items-start mb-2">
              <Phone className="w-4 h-4 mr-2 text-gray-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm">07 69 60 00 70</span>
            </div>
          </div>

          <div className="skills mb-6">
            <h2 className="text-base font-bold uppercase mb-3 border-b border-gray-300 pb-1 tracking-wide">
              Compétences
            </h2>
            <div className="mb-1.5">
              <div className="flex justify-between">
                <span className="font-medium text-sm">Python</span>
                <span className="text-xs text-gray-600">Avancé</span>
              </div>
            </div>
            <div className="mb-1.5">
              <div className="flex justify-between">
                <span className="font-medium text-sm">C</span>
                <span className="text-xs text-gray-600">Avancé</span>
              </div>
            </div>
            <div className="mb-1.5">
              <div className="flex justify-between">
                <span className="font-medium text-sm">Javascript</span>
                <span className="text-xs text-gray-600">Intermédiaire</span>
              </div>
            </div>
            <div className="mb-1.5">
              <div className="flex justify-between">
                <span className="font-medium text-sm">HTML / CSS</span>
                <span className="text-xs text-gray-600">Intermédiaire</span>
              </div>
            </div>
            <div className="mb-1.5">
              <div className="flex justify-between">
                <span className="font-medium text-sm">
                  PostgreSQL (base de données)
                </span>
                <span className="text-xs text-gray-600">Intermédiaire</span>
              </div>
            </div>
            <div className="mb-1.5">
              <div className="flex justify-between">
                <span className="font-medium text-sm">
                  Flask (framework web)
                </span>
                <span className="text-xs text-gray-600">Intermédiaire</span>
              </div>
            </div>
            <div className="mb-1.5">
              <div className="flex justify-between">
                <span className="font-medium text-sm">Git/GitHub</span>
                <span className="text-xs text-gray-600">Avancé</span>
              </div>
            </div>
            <div className="mb-1.5">
              <div className="flex justify-between">
                <span className="font-medium text-sm">VS Code</span>
                <span className="text-xs text-gray-600">Avancé</span>
              </div>
            </div>
          </div>

          <div className="langues mb-6">
            <h2 className="text-base font-bold uppercase mb-3 border-b border-gray-300 pb-1 tracking-wide">
              Langues
            </h2>
            <ul className="list-none ml-0">
              <li className="mb-1 text-sm before:content-['-'] before:mr-2">
                Anglais
              </li>
              <li className="mb-1 text-sm before:content-['-'] before:mr-2">
                Espagnol
              </li>
            </ul>
          </div>

          <div className="atouts mb-6">
            <h2 className="text-base font-bold uppercase mb-3 border-b border-gray-300 pb-1 tracking-wide">
              Atouts
            </h2>
            <ul className="list-none ml-0">
              <li className="mb-1 text-sm before:content-['-'] before:mr-2">
                Leadership
              </li>
              <li className="mb-1 text-sm before:content-['-'] before:mr-2">
                Travail d'équipe et collaboration
              </li>
              <li className="mb-1 text-sm before:content-['-'] before:mr-2">
                Sens de l'organisation
              </li>
              <li className="mb-1 text-sm before:content-['-'] before:mr-2">
                Adaptabilité
              </li>
            </ul>
          </div>

          <div className="interets mb-6">
            <h2 className="text-base font-bold uppercase mb-3 border-b border-gray-300 pb-1 tracking-wide">
              Centres d'intérêt
            </h2>
            <ul className="list-none ml-0">
              <li className="mb-1 text-sm before:content-['-'] before:mr-2">
                Musculation
              </li>
              <li className="mb-1 text-sm before:content-['-'] before:mr-2">
                Escalade
              </li>
              <li className="mb-1 text-sm before:content-['-'] before:mr-2">
                Automobile
              </li>
              <li className="mb-1 text-sm before:content-['-'] before:mr-2">
                Psychologie
              </li>
            </ul>
          </div>

          <div className="reseaux">
            <h2 className="text-base font-bold uppercase mb-3 border-b border-gray-300 pb-1 tracking-wide">
              Réseaux sociaux
            </h2>
            <div className="flex items-center mb-2">
              <Folder className="w-4 h-4 mr-2 text-gray-600 flex-shrink-0" />
              <span className="text-sm">
                Portfolio
                <br />
                <a href="https://yacine-hamadouche.me">yacine-hamadouche.me</a>
              </span>
            </div>
            <div className="flex items-center mb-2">
              <Github className="w-4 h-4 mr-2 text-gray-600 flex-shrink-0" />
              <span className="text-sm">
                GitHub
                <br />
                <a href="https://github.com/yacine20005">yacine20005</a>
              </span>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-4 h-4 mr-2 text-gray-600 flex-shrink-0" />
              <span className="text-sm">
                LinkedIn
                <br />
                <a href="https://www.linkedin.com/in/yacine-hamadouche">
                  yacine-hamadouche
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="p-6 md:w-[70%]">
          <div className="header mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              APPRENTI EN L3 INFORMATIQUE - UNIVERSITÉ GUSTAVE EIFFEL - SEPT. 2025
            </h2>
            <h1 className="text-2xl font-extrabold uppercase mb-1 tracking-wide">
              HAMADOUCHE YACINE
            </h1>
            <p className="text-sm leading-relaxed">
              Passionné par l'innovation technologique et doté d'un fort esprit
              d'équipe, je recherche une alternance pour mettre à profit mes
              acquis et avoir un impact concret en entreprise. Rigoureux et
              impliqué, je souhaite contribuer à des projets stimulants tout en
              consolidant mes compétences.
            </p>
          </div>

          <div className="education mb-8">
            <h2 className="text-base font-bold uppercase mb-4 border-b border-gray-300 pb-1 tracking-wide">
              Formations
            </h2>

            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <h3 className="font-semibold text-sm">
                  Licence Mathématiques/Informatique
                </h3>
                <span className="text-xs text-gray-600">
                  Depuis septembre 2023
                </span>
              </div>
              <div className="text-sm mb-2 font-medium">
                Université Gustave Eiffel - Champs-sur-Marne
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <h3 className="font-semibold text-sm">
                  Baccalauréat général avec spécialités
                  <br />
                  Mathématiques et informatique
                </h3>
                <span className="text-xs text-gray-600">
                  De septembre 2020 à juillet 2023
                </span>
              </div>
              <div className="text-sm mb-2 font-medium">
                Lycée polyvalent Louis Armand - Nogent-sur-Marne
              </div>
              <div className="text-xs mb-1 italic">Niveau</div>
              <div className="text-sm mb-2 ml-4 before:content-['-'] before:mr-2">
                Mention Bien avec 20/20 en Informatique et 15/20 en
                Mathématiques
              </div>
            </div>
          </div>

          <div className="experience mb-8">
            <h2 className="text-base font-bold uppercase mb-4 border-b border-gray-300 pb-1 tracking-wide">
              Expériences professionnelles
            </h2>

            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <h3 className="font-semibold text-sm">Auto-entrepreneur</h3>
                <span className="text-xs text-gray-600">Depuis juin 2023</span>
              </div>
              <div className="text-sm mb-2 font-medium">Freelance</div>
              <ul className="text-sm list-none ml-0">
                <li className="ml-4 before:content-['-'] before:mr-2">
                  Conception et déploiement de sites web pour plusieurs assos ou
                  entreprises.
                </li>
                <li className="ml-4 before:content-['-'] before:mr-2">
                  Collaboration avec des clients pour analyser les besoins et
                  proposer des solutions techniques.
                </li>
                <li className="ml-4 before:content-['-'] before:mr-2">
                  Gestion de la prospection clientèle.
                </li>
              </ul>
            </div>
          </div>

          <div className="associations">
            <h2 className="text-base font-bold uppercase mb-4 border-b border-gray-300 pb-1 tracking-wide">
              Expériences associatives
            </h2>

            <div>
              <div className="flex justify-between mb-1">
                <h3 className="font-semibold text-sm">
                  Membre du BDE (Bureau Des Etudiants)
                </h3>
                <span className="text-xs text-gray-600">
                  De septembre 2023 à uillet 2024
                </span>
              </div>
              <div className="text-sm mb-2 font-medium">
                Université Gustave Eiffel
              </div>
              <ul className="text-sm list-none ml-0">
                <li className="ml-4 before:content-['-'] before:mr-2">
                  Organisation d'événements pour les étudiants (soirées, culturelles, sportives, etc.)
                </li>
                <li className="ml-4 before:content-['-'] before:mr-2">
                  Participation à des réunions pour discuter de l'organisation
                  et de la gestion du budget
                </li>
                <li className="ml-4 before:content-['-'] before:mr-2">
                  Collaboration avec d'autres associations pour organiser des
                  événements communs.
                </li>
              </ul>
            </div>

            <div className="mb-6"></div>

            <div>
              <div className="flex justify-between mb-1">
                <h3 className="font-semibold text-sm">
                  Jeune Conseiller Municipal
                </h3>
                <span className="text-xs text-gray-600">
                  De septembre 2019 à décembre 2023
                </span>
              </div>
              <div className="text-sm mb-2 font-medium">Bry-sur-marne</div>
              <ul className="text-sm list-none ml-0">
                <li className="ml-4 before:content-['-'] before:mr-2">
                  Collaboration avec les habitants pour recueillir leurs besoins
                  et suggestions.
                </li>
                <li className="ml-4 before:content-['-'] before:mr-2">
                  Organisation d'événements à échelle communale (dont plusieurs
                  rassemblant 200+ participants).
                </li>
                <li className="ml-4 before:content-['-'] before:mr-2">
                  Participation à la mise en place de projets local.
                </li>
                <li className="ml-4 before:content-['-'] before:mr-2">
                  Présentation de propositions lors d'assemblées plénières.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
