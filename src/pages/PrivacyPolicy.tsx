import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto py-16 px-4">
      <Helmet>
        <title>Politique de Protection des Données Personnelles | Speed E-Log</title>
        <meta
          name="description"
          content="Politique RGPD complète de Speed E-Log - Protection des données, droits des utilisateurs et conformité CNIL 2025."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Politique de Protection des Données Personnelles
          </h1>
          <p className="text-xl text-muted-foreground mb-2">Speed E-Log SAS - speedelog.net</p>
          <p className="text-lg text-muted-foreground">
            Dernière mise à jour : 01/08/2025<br />
            Conforme RGPD et dernières exigences CNIL 2024-2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">1. RESPONSABLE DE TRAITEMENT</h2>
            <div className="bg-card p-6 rounded-lg border">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="mb-2"><strong>Speed E-Log SAS</strong></p>
                  <p className="mb-2">SIRET : 93475802000010</p>
                  <p className="mb-2">Adresse : 37 Rue de Rémaucourt, 70170 Port-sur-Saône, France</p>
                  <p className="mb-2">Téléphone : 06 35 58 40 04</p>
                  <p>Email : contact@speedelog.net</p>
                </div>
                <div>
                  <p className="mb-2"><strong>Délégué à la Protection des Données :</strong></p>
                  <p className="mb-2">Email : dpo@speedelog.net</p>
                  <p>Courrier : Speed E-Log SAS - DPO, 37 Rue de Rémaucourt, 70170 Port-sur-Saône</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">2. DONNÉES COLLECTÉES ET FINALITÉS</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">2.1 Gestion des commandes et relation client</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Données traitées :</strong> Civilité, nom, prénom, adresse de facturation, adresse de livraison, téléphone, email, historique de commandes, préférences produits</li>
                <li><strong>Base légale :</strong> Exécution du contrat (Article 6.1.b RGPD)</li>
                <li><strong>Finalité :</strong> Traitement des commandes, facturation, livraison, service après-vente, gestion des retours et garanties</li>
                <li><strong>Destinataires :</strong> Services internes habilités, transporteurs (données livraison uniquement), processeurs de paiement</li>
                <li><strong>Conservation :</strong> Durée de la relation commerciale + 3 ans (réclamations/garanties)</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">2.2 Données comptables et fiscales</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Données traitées :</strong> Informations de facturation, données de paiement (hors cryptogramme), historique financier</li>
                <li><strong>Base légale :</strong> Obligation légale (Article 6.1.c RGPD - Code de commerce)</li>
                <li><strong>Finalité :</strong> Tenue de la comptabilité, obligations fiscales et déclaratives</li>
                <li><strong>Conservation :</strong> 10 ans à compter de la clôture de l'exercice (obligation légale)</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">2.3 Prospection commerciale et marketing</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Données traitées :</strong> Email, préférences de communication, historique d'achat, comportement de navigation, données d'engagement</li>
                <li><strong>Base légale :</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Clients : Intérêt légitime (Article 6.1.f RGPD)</li>
                    <li>Prospects : Consentement (Article 6.1.a RGPD)</li>
                  </ul>
                </li>
                <li><strong>Finalité :</strong> Envoi d'offres commerciales, newsletters, recommandations personnalisées, amélioration de l'expérience client</li>
                <li><strong>Conservation :</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Clients : 3 ans après fin de la relation commerciale</li>
                    <li>Prospects : Jusqu'au retrait du consentement ou 3 ans après dernier contact du prospect</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">2.4 Données de navigation et cookies techniques</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Données traitées :</strong> Adresse IP, données de navigation, cookies techniques, logs de sécurité</li>
                <li><strong>Base légale :</strong> Intérêt légitime (Article 6.1.f RGPD)</li>
                <li><strong>Finalité :</strong> Sécurité du site, protection contre les attaques, optimisation des performances, statistiques anonymes</li>
                <li><strong>Conservation :</strong> 6 mois pour les logs, durées variables pour les cookies (voir politique cookies)</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">2.5 Données analytiques et comportementales (HubSpot)</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Données traitées :</strong> Comportement de navigation, interactions marketing, scores d'engagement, données de profilage</li>
                <li><strong>Base légale :</strong> Consentement (Article 6.1.a RGPD)</li>
                <li><strong>Finalité :</strong> Analyse d'audience, personnalisation du contenu, optimisation marketing</li>
                <li><strong>Conservation :</strong> 6 mois maximum avec renouvellement du consentement</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">3. SOUS-TRAITANCE ET DESTINATAIRES</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">3.1 Services d'hébergement et sécurité</h3>
              <div className="bg-card p-4 rounded-lg border mb-4">
                <p className="font-semibold mb-2">Cloudflare Inc. (États-Unis)</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Finalité :</strong> CDN, sécurité web, protection DDoS, optimisation performances</li>
                  <li><strong>Base transfert :</strong> Data Privacy Framework EU-US (certification active)</li>
                  <li><strong>Données :</strong> Adresse IP, données de navigation, métadonnées techniques</li>
                  <li><strong>DPA :</strong> Contrat de sous-traitance RGPD signé</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">3.2 Services marketing et CRM</h3>
              <div className="bg-card p-4 rounded-lg border mb-4">
                <p className="font-semibold mb-2">HubSpot Inc. (États-Unis)</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Finalité :</strong> Marketing automation, gestion relation client, analytics</li>
                  <li><strong>Base transfert :</strong> Data Privacy Framework EU-US + Clauses Contractuelles Types</li>
                  <li><strong>Données :</strong> Données contact, comportement, historique interactions</li>
                  <li><strong>Consentement :</strong> Requis pour cookies analytics et marketing</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">3.3 Services de livraison</h3>
              <div className="bg-card p-4 rounded-lg border mb-4">
                <p className="font-semibold mb-2">Transporteurs nationaux et internationaux (dont FedEx pour international)</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Finalité :</strong> Livraison des commandes, suivi des expéditions</li>
                  <li><strong>Données :</strong> Nom, adresse livraison, téléphone, références commande</li>
                  <li><strong>Transferts internationaux :</strong> Clauses Contractuelles Types + mesures supplémentaires</li>
                  <li><strong>Conservation :</strong> Suppression après livraison + délai réclamation (3 mois)</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">3.4 Services de paiement</h3>
              <div className="bg-card p-4 rounded-lg border mb-4">
                <p className="font-semibold mb-2">Processeurs de paiement sécurisés</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Finalité :</strong> Traitement sécurisé des paiements</li>
                  <li><strong>Données :</strong> Données carte (cryptogramme jamais conservé)</li>
                  <li><strong>Conservation :</strong> 15 mois maximum (contestations)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">4. TRANSFERTS INTERNATIONAUX</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">4.1 États-Unis (Cloudflare, HubSpot)</h3>
              <div className="bg-card p-4 rounded-lg border mb-4">
                <p className="mb-4"><strong>Mécanisme principal :</strong> Data Privacy Framework EU-US (10 juillet 2023)</p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Cloudflare certifié : 5666</li>
                  <li>HubSpot certifié : 5812</li>
                  <li>Vérification statut : https://www.dataprivacyframework.gov/</li>
                </ul>
                <p className="mb-2"><strong>Garanties supplémentaires :</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Clauses Contractuelles Types (Décision 2021/914)</li>
                  <li>Mesures techniques : chiffrement, contrôles d'accès</li>
                  <li>Analyses d'impact des transferts réalisées</li>
                  <li>Mécanismes de recours indépendants</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">4.2 Autres pays tiers (livraisons internationales)</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Base légale :</strong> Clauses Contractuelles Types + mesures supplémentaires</li>
                <li><strong>Évaluation :</strong> Analyse d'impact spécifique par pays de livraison</li>
                <li><strong>Données limitées :</strong> Strictement nécessaires à la livraison</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">5. DURÉES DE CONSERVATION DÉTAILLÉES</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-card rounded-lg border">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold">Catégorie de données</th>
                    <th className="px-6 py-3 text-left font-semibold">Durée base active</th>
                    <th className="px-6 py-3 text-left font-semibold">Archivage intermédiaire</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-6 py-4">Données commande</td>
                    <td className="px-6 py-4">Relation commerciale</td>
                    <td className="px-6 py-4">3 ans (garanties/réclamations)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Données comptables</td>
                    <td className="px-6 py-4">Relation commerciale</td>
                    <td className="px-6 py-4">10 ans (obligation légale)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Prospects actifs</td>
                    <td className="px-6 py-4">Jusqu'au retrait consentement</td>
                    <td className="px-6 py-4">3 ans après dernier contact</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Clients inactifs</td>
                    <td className="px-6 py-4">3 ans après dernier achat</td>
                    <td className="px-6 py-4">-</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Cookies marketing</td>
                    <td className="px-6 py-4">13 mois maximum</td>
                    <td className="px-6 py-4">-</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Logs sécurité</td>
                    <td className="px-6 py-4">6 mois</td>
                    <td className="px-6 py-4">-</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Données paiement</td>
                    <td className="px-6 py-4">Fin transaction</td>
                    <td className="px-6 py-4">15 mois (contestations)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Comptes utilisateurs</td>
                    <td className="px-6 py-4">Jusqu'à suppression</td>
                    <td className="px-6 py-4">2 ans d'inactivité</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-card p-4 rounded-lg border">
              <p className="font-semibold mb-2">Points de départ des durées :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Clients :</strong> Dernier achat ou dernière interaction contractuelle</li>
                <li><strong>Prospects :</strong> Dernier contact émanant du prospect</li>
                <li><strong>Comptabilité :</strong> Clôture de l'exercice</li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">6. MESURES DE SÉCURITÉ</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">6.1 Mesures techniques</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Chiffrement des données sensibles en transit (TLS) et au repos</li>
                <li>Authentification renforcée avec double facteur recommandée</li>
                <li>Contrôles d'accès basés sur le principe du moindre privilège</li>
                <li>Surveillance continue et détection d'intrusion</li>
                <li>Sauvegardes chiffrées avec tests de restauration réguliers</li>
                <li>Mise à jour automatique des systèmes de sécurité</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">6.2 Mesures organisationnelles</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Formation annuelle du personnel sur le RGPD</li>
                <li>Procédures documentées de gestion des incidents</li>
                <li>Audits de sécurité réguliers par tiers indépendants</li>
                <li>Politique de mots de passe renforcée</li>
                <li>Journalisation des accès aux données personnelles</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">6.3 Notification des violations</h3>
              <p className="mb-4">En cas de violation de données susceptible d'engendrer un risque pour vos droits et libertés :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Notification CNIL sous 72 heures</li>
                <li>Information directe si risque élevé</li>
                <li>Mesures correctives immédiates</li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">7. VOS DROITS RGPD</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">7.1 Droits garantis</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Droit d'accès :</strong> Obtenir confirmation du traitement et copie de vos données</li>
                <li><strong>Droit de rectification :</strong> Faire corriger les données inexactes</li>
                <li><strong>Droit à l'effacement :</strong> Obtenir la suppression de vos données (sous conditions)</li>
                <li><strong>Droit à la limitation :</strong> Demander la restriction du traitement</li>
                <li><strong>Droit à la portabilité :</strong> Récupérer vos données dans un format structuré</li>
                <li><strong>Droit d'opposition :</strong> Vous opposer aux traitements (sauf motif légitime impérieux)</li>
                <li><strong>Droit de retrait :</strong> Retirer votre consentement à tout moment (cookies, marketing)</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">7.2 Modalités d'exercice</h3>
              <div className="bg-card p-4 rounded-lg border">
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Contact privilégié :</strong> dpo@speedelog.net</li>
                  <li><strong>Courrier postal :</strong> Speed E-Log SAS - Exercice des droits, 37 Rue de Rémaucourt, 70170 Port-sur-Saône</li>
                  <li><strong>Délai de réponse :</strong> 1 mois (prorogeable 2 mois si demande complexe)</li>
                  <li><strong>Justificatif d'identité :</strong> Peut être demandé en cas de doute raisonnable</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">7.3 Procédure type</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Accusé de réception sous 72 heures</li>
                <li>Vérification identité si nécessaire (suppression du justificatif après contrôle)</li>
                <li>Traitement dans les délais légaux</li>
                <li>Réponse motivée avec justifications en cas de refus partiel</li>
              </ol>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">8. DROIT DE RÉCLAMATION</h2>
            <p className="mb-4">
              Si vous estimez que le traitement de vos données ne respecte pas la réglementation, vous pouvez introduire une réclamation auprès de la CNIL :
            </p>
            <div className="bg-card p-4 rounded-lg border">
              <p className="font-semibold mb-2">Commission Nationale de l'Informatique et des Libertés</p>
              <p className="mb-1">3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07</p>
              <p className="mb-1">Téléphone : 01 53 73 22 22</p>
              <p>En ligne : <a href="https://www.cnil.fr/fr/plaintes" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.cnil.fr/fr/plaintes</a></p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">9. ÉVOLUTION DE LA POLITIQUE</h2>
            <p className="mb-4">
              Cette politique est mise à jour régulièrement pour rester conforme à l'évolution réglementaire. Toute modification substantielle vous sera notifiée par email ou via un bandeau d'information sur le site.
            </p>
            <div className="bg-card p-4 rounded-lg border">
              <p className="mb-1"><strong>Version actuelle :</strong> 2025.1</p>
              <p><strong>Prochaine révision prévue :</strong> 01/02/2026</p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Contact</h2>
            <p className="mb-4">
              Pour toute question relative à cette politique ou au traitement de vos données, contactez-nous via notre{" "}
              <a href="/contact" className="text-primary hover:underline">page de contact</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;