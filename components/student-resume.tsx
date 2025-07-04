import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function StudentResume() {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 font-sans">
      <Card className="w-full">
        <CardHeader className="text-center p-6">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold">Yacine B.</h1>
            <p className="text-muted-foreground mt-2">Étudiant dynamique et motivé à la recherche d'un emploi pour la saison estivale</p>
            <div className="flex gap-4 mt-4 text-sm text-muted-foreground">
              <a href="mailto:yacine.b@email.com" className="flex items-center gap-1">
                <MailIcon className="w-4 h-4" />
                yacine.b@email.com
              </a>
              <a href="#" className="flex items-center gap-1">
                <PhoneIcon className="w-4 h-4" />
                06 12 34 56 78
              </a>
              <a href="#" className="flex items-center gap-1">
                <MapPinIcon className="w-4 h-4" />
                Paris, France
              </a>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 border-b pb-2">Expérience Professionnelle</h2>
              <div className="grid gap-6">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">Agent d'Accueil et d'Orientation</h3>
                      <p className="text-muted-foreground">Stade Tour Eiffel - Jeux Olympiques de Paris</p>
                    </div>
                    <p className="text-sm text-muted-foreground">Été 2024</p>
                  </div>
                  <ul className="mt-2 list-disc list-inside text-muted-foreground space-y-1">
                    <li>Accueil et orientation des milliers de visiteurs internationaux chaque jour.</li>
                    <li>Vérification des billets et des accréditations pour assurer la sécurité et la fluidité des accès.</li>
                    <li>Communication claire et efficace pour guider les spectateurs vers les différentes zones.</li>
                    <li>Collaboration avec les équipes de sécurité pour gérer les foules et répondre aux urgences.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 border-b pb-2">Compétences</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Langues</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>Français (Langue maternelle)</li>
                    <li>Anglais (Courant)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Compétences Interpersonnelles</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>Excellent service client</li>
                    <li>Travail d'équipe et collaboration</li>
                    <li>Communication et écoute active</li>
                    <li>Adaptabilité et résolution de problèmes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Informatique</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>Maîtrise de la Suite Office (Word, Excel)</li>
                    <li>Maîtrise de Google Workspace (Docs, Sheets)</li>
                    <li>Aisance avec les outils de caisse</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 border-b pb-2">Formation</h2>
              <div className="grid gap-4">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">Lycée Général et Technologique</h3>
                      <p className="text-muted-foreground">Lycée Jean-Pierre Vernant, Sèvres</p>
                    </div>
                    <p className="text-sm text-muted-foreground">2021 - 2024</p>
                  </div>
                  <p className="mt-1 text-muted-foreground">Baccalauréat Général, spécialités Mathématiques et Numérique et Sciences Informatiques.</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-6 justify-center">
            <p className="text-xs text-muted-foreground">Disponible de Juin à Août.</p>
        </CardFooter>
      </Card>
    </div>
  )
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
