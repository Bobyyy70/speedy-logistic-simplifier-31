import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CookiePolicy = () => {
  return (
    <>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">
              Politique de Gestion des Cookies et Traceurs
            </h1>
            <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
              <Badge variant="secondary">Speed E-Log SAS - speedelog.net</Badge>
              <Badge variant="outline">Dernière mise à jour : 01/08/2025</Badge>
            </div>
            <Badge className="bg-primary/10 text-primary border-primary">
              Conforme aux lignes directrices CNIL 2020 et exigences 2024-2025
            </Badge>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">1. QU'EST-CE QU'UN COOKIE ?</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la consultation d'un site web. Il permet de reconnaître votre navigateur et de collecter certaines informations vous concernant.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">2. NOTRE APPROCHE DE LA GESTION DES COOKIES</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Conformément aux dernières exigences CNIL, nous avons mis en place un système de gestion des cookies respectant vos choix :</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold text-primary">Cookies techniques</h4>
                  <p className="text-sm text-muted-foreground">Déposés automatiquement (strictement nécessaires)</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold text-primary">Cookies nécessitant consentement</h4>
                  <p className="text-sm text-muted-foreground">Votre accord préalable est requis</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold text-primary">Durée consentement</h4>
                  <p className="text-sm text-muted-foreground">6 mois pour acceptation ET refus</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold text-primary">Révision facile</h4>
                  <p className="text-sm text-muted-foreground">Modification de vos préférences à tout moment</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">3. COOKIES STRICTEMENT NÉCESSAIRES</CardTitle>
              <Badge variant="secondary">Sans consentement</Badge>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">3.1 Cookies de sécurité Cloudflare</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border border-border p-3 text-left">Nom du Cookie</th>
                        <th className="border border-border p-3 text-left">Finalité</th>
                        <th className="border border-border p-3 text-left">Durée</th>
                        <th className="border border-border p-3 text-left">Données</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">__cf_bm</td>
                        <td className="border border-border p-3">Protection contre les bots et attaques automatisées</td>
                        <td className="border border-border p-3">30 minutes</td>
                        <td className="border border-border p-3">Score anti-bot</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">__cflb</td>
                        <td className="border border-border p-3">Répartition équilibrée de charge entre serveurs</td>
                        <td className="border border-border p-3">24h maximum</td>
                        <td className="border border-border p-3">Identifiant session</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">cf_clearance</td>
                        <td className="border border-border p-3">Mémorisation validation défi sécurité</td>
                        <td className="border border-border p-3">30 minutes</td>
                        <td className="border border-border p-3">Token validation</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">__cfwaitingroom</td>
                        <td className="border border-border p-3">Gestion file d'attente en cas de fort trafic</td>
                        <td className="border border-border p-3">Variable</td>
                        <td className="border border-border p-3">Position file</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">__cfruid</td>
                        <td className="border border-border p-3">Protection limitation débit</td>
                        <td className="border border-border p-3">Session</td>
                        <td className="border border-border p-3">Identifiant unique</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">3.2 Cookies de fonctionnement HubSpot</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border border-border p-3 text-left">Nom du Cookie</th>
                        <th className="border border-border p-3 text-left">Finalité</th>
                        <th className="border border-border p-3 text-left">Durée</th>
                        <th className="border border-border p-3 text-left">Données</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">__hs_opt_out</td>
                        <td className="border border-border p-3">Mémorisation de votre refus des cookies</td>
                        <td className="border border-border p-3">6 mois</td>
                        <td className="border border-border p-3">"yes" ou "no"</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">__hs_do_not_track</td>
                        <td className="border border-border p-3">Respect de votre choix "Ne pas me suivre"</td>
                        <td className="border border-border p-3">6 mois</td>
                        <td className="border border-border p-3">"yes"</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">__hs_initial_opt_in</td>
                        <td className="border border-border p-3">Évite affichage répétitif bannière</td>
                        <td className="border border-border p-3">7 jours</td>
                        <td className="border border-border p-3">Statut initial</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">__hs_cookie_cat_pref</td>
                        <td className="border border-border p-3">Mémorisation catégories consenties</td>
                        <td className="border border-border p-3">6 mois</td>
                        <td className="border border-border p-3">Préférences</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300">Base légale</h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Article 6.1.f RGPD (intérêt légitime - sécurité et fonctionnement)</p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
                  <h4 className="font-semibold text-green-700 dark:text-green-300">Information requise</h4>
                  <p className="text-sm text-green-600 dark:text-green-400">Oui (transparence obligatoire)</p>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg">
                  <h4 className="font-semibold text-orange-700 dark:text-orange-300">Consentement requis</h4>
                  <p className="text-sm text-orange-600 dark:text-orange-400">Non (strictement nécessaires)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">4. COOKIES NÉCESSITANT VOTRE CONSENTEMENT</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  4.1 Cookies d'analyse et statistiques
                  <Badge variant="outline">Catégorie : Analytics</Badge>
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border border-border p-3 text-left">Nom du Cookie</th>
                        <th className="border border-border p-3 text-left">Finalité</th>
                        <th className="border border-border p-3 text-left">Durée</th>
                        <th className="border border-border p-3 text-left">Éditeur</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">__hstc</td>
                        <td className="border border-border p-3">Suivi des visiteurs uniques</td>
                        <td className="border border-border p-3">6 mois</td>
                        <td className="border border-border p-3">HubSpot</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">hubspotutk</td>
                        <td className="border border-border p-3">Identification visiteur/déduplication</td>
                        <td className="border border-border p-3">6 mois</td>
                        <td className="border border-border p-3">HubSpot</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">__hssc</td>
                        <td className="border border-border p-3">Comptage pages vues session</td>
                        <td className="border border-border p-3">30 minutes</td>
                        <td className="border border-border p-3">HubSpot</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">__hssrc</td>
                        <td className="border border-border p-3">Détection nouveau navigateur</td>
                        <td className="border border-border p-3">Session</td>
                        <td className="border border-border p-3">HubSpot</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-2">Finalité détaillée :</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Mesure d'audience et statistiques de fréquentation</li>
                    <li>• Analyse des parcours de navigation</li>
                    <li>• Amélioration de l'expérience utilisateur</li>
                    <li>• Optimisation du contenu du site</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  4.2 Cookies fonctionnels
                  <Badge variant="outline">Catégorie : Fonctionnel</Badge>
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border border-border p-3 text-left">Nom du Cookie</th>
                        <th className="border border-border p-3 text-left">Finalité</th>
                        <th className="border border-border p-3 text-left">Durée</th>
                        <th className="border border-border p-3 text-left">Éditeur</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">messagesUtk</td>
                        <td className="border border-border p-3">Fonctionnement chat client</td>
                        <td className="border border-border p-3">6 mois</td>
                        <td className="border border-border p-3">HubSpot</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">hs-messages-is-open</td>
                        <td className="border border-border p-3">État ouverture widget chat</td>
                        <td className="border border-border p-3">30 minutes</td>
                        <td className="border border-border p-3">HubSpot</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">hs-messages-hide-welcome-message</td>
                        <td className="border border-border p-3">Préférences affichage chat</td>
                        <td className="border border-border p-3">1 jour</td>
                        <td className="border border-border p-3">HubSpot</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  4.3 Cookies publicitaires et marketing
                  <Badge variant="outline">Catégorie : Marketing</Badge>
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border border-border p-3 text-left">Type</th>
                        <th className="border border-border p-3 text-left">Finalité</th>
                        <th className="border border-border p-3 text-left">Durée</th>
                        <th className="border border-border p-3 text-left">Éditeurs</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3">Pixels de conversion</td>
                        <td className="border border-border p-3">Mesure efficacité publicités</td>
                        <td className="border border-border p-3">Variable</td>
                        <td className="border border-border p-3">Facebook, Google, LinkedIn</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">Cookies remarketing</td>
                        <td className="border border-border p-3">Publicités personnalisées</td>
                        <td className="border border-border p-3">90 jours max</td>
                        <td className="border border-border p-3">Partenaires publicitaires</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">Cookies d'attribution</td>
                        <td className="border border-border p-3">Suivi parcours d'achat</td>
                        <td className="border border-border p-3">30 jours</td>
                        <td className="border border-border p-3">HubSpot, Partenaires</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">5. GESTION DE VOS PRÉFÉRENCES</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">5.1 Centre de préférences intégré</h3>
                <p className="mb-4">Vous pouvez à tout moment modifier vos choix via :</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <h4 className="font-semibold text-primary">Lien permanent en pied de page</h4>
                    <p className="text-sm text-muted-foreground">"Paramètres cookies"</p>
                  </div>
                  <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <h4 className="font-semibold text-primary">Accès direct</h4>
                    <p className="text-sm text-muted-foreground font-mono">speedelog.net/cookies-preferences</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">5.2 Options disponibles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg text-center">
                    <h4 className="font-semibold text-green-700 dark:text-green-300">Tout accepter</h4>
                    <p className="text-sm text-green-600 dark:text-green-400">Tous les cookies autorisés</p>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg text-center">
                    <h4 className="font-semibold text-red-700 dark:text-red-300">Tout refuser</h4>
                    <p className="text-sm text-red-600 dark:text-red-400">Seuls les cookies strictement nécessaires</p>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg text-center">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300">Personnaliser</h4>
                    <p className="text-sm text-blue-600 dark:text-blue-400">Choix spécifique par catégorie</p>
                  </div>
                  <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg text-center">
                    <h4 className="font-semibold text-orange-700 dark:text-orange-300">Révocation</h4>
                    <p className="text-sm text-orange-600 dark:text-orange-400">Retrait du consentement à tout moment</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">8. DURÉES DE CONSERVATION</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border border-border p-3 text-left">Catégorie</th>
                      <th className="border border-border p-3 text-left">Durée Maximum</th>
                      <th className="border border-border p-3 text-left">Renouvellement</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3">Cookies strictement nécessaires</td>
                      <td className="border border-border p-3">Variable (30 min à 24h)</td>
                      <td className="border border-border p-3">Automatique</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Cookies analytics</td>
                      <td className="border border-border p-3">6 mois</td>
                      <td className="border border-border p-3">Consentement requis</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Cookies fonctionnels</td>
                      <td className="border border-border p-3">6 mois</td>
                      <td className="border border-border p-3">Consentement requis</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Cookies marketing</td>
                      <td className="border border-border p-3">13 mois</td>
                      <td className="border border-border p-3">Consentement requis</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  <strong>Suppression automatique :</strong> Tous les cookies sont automatiquement supprimés à l'expiration de leur durée ou lors du retrait de votre consentement.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">9. VOS DROITS SPÉCIFIQUES AUX COOKIES</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">9.1 Droits RGPD applicables</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <ul className="space-y-2 text-sm">
                      <li>• Droit d'accès aux données collectées via cookies</li>
                      <li>• Droit d'effacement des données liées aux cookies</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <ul className="space-y-2 text-sm">
                      <li>• Droit d'opposition au traitement des données cookies</li>
                      <li>• Droit de retrait du consentement à tout moment</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">9.2 Exercice des droits</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <h4 className="font-semibold text-primary">Contact</h4>
                    <p className="text-sm text-muted-foreground">dpo@speedelog.net</p>
                  </div>
                  <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <h4 className="font-semibold text-primary">Objet</h4>
                    <p className="text-sm text-muted-foreground">"Droits cookies - [votre demande]"</p>
                  </div>
                  <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <h4 className="font-semibold text-primary">Délai</h4>
                    <p className="text-sm text-muted-foreground">Réponse sous 1 mois maximum</p>
                  </div>
                  <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <h4 className="font-semibold text-primary">Justificatif</h4>
                    <p className="text-sm text-muted-foreground">Pièce d'identité si nécessaire</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">11. CONTACT ET RÉCLAMATIONS</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Questions sur les cookies :</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-sm text-primary">dpo@speedelog.net</p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold">Courrier</h4>
                    <p className="text-sm">Speed E-Log SAS - DPO Cookies<br />37 Rue de Rémaucourt<br />70170 Port-sur-Saône</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Réclamation CNIL :</h3>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                  <p className="text-sm">
                    Si vous n'êtes pas satisfait de notre gestion des cookies, vous pouvez saisir la CNIL : 
                    <a href="https://www.cnil.fr/fr/plaintes" className="text-primary hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                      https://www.cnil.fr/fr/plaintes
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-6 text-center">
              <p className="text-sm text-muted-foreground">
                Cette politique évolue en fonction des nouvelles fonctionnalités du site, de l'évolution réglementaire (CNIL, RGPD), 
                des partenaires techniques nouveaux ou modifiés, et des retours utilisateurs et bonnes pratiques.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Version actuelle : 2025.1 | Prochaine révision prévue : 01/02/2026
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy;