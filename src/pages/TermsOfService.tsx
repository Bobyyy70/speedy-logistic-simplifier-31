
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto py-16 px-4">
      <Helmet>
        <title>Conditions Générales de Vente | Speed E-Log</title>
        <meta name="description" content="Conditions générales de vente de Speed E-Log - Services logistiques, stockage et préparation de commandes. CGV version du 13 juillet 2025." />
      </Helmet>

      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">CONDITIONS GÉNÉRALES DE VENTE - SPEED E-LOG SAS</h1>
      
      <div className="text-center text-lg font-semibold mb-8 text-primary">Version du 13 juillet 2025</div>

      <div className="prose max-w-none">
        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">ARTICLE 1 - OBJET ET CHAMP D'APPLICATION</h2>
          <p className="mb-4">
            Les présentes Conditions Générales de Vente (CGV) s'appliquent à toutes les prestations de services logistiques fournies par Speed E-Log SAS, société par actions simplifiée au capital de 1000 euros, immatriculée au RCS de Gray-Vesoul sous le numéro B 934 758 020, dont le siège social est situé 37 Rue de Rémaucourt, 70170 Port-sur-Saône.
          </p>
          <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
            <p className="font-semibold">
              Toute commande implique l'acceptation sans réserve des présentes CGV qui prévalent sur toutes conditions générales d'achat, sauf accord dérogatoire écrit et signé par Speed E-Log.
            </p>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">ARTICLE 2 - PRESTATIONS DE SERVICES</h2>
          <p className="mb-4">Speed E-Log propose les services suivants :</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Gestion d'entrepôt et stockage sécurisé</li>
            <li>Préparation et conditionnement de commandes</li>
            <li>Gestion des flux logistiques</li>
            <li>Gestion des retours et reverse logistics</li>
            <li>Solutions logistiques personnalisées et sur-mesure</li>
            <li>Services à valeur ajoutée (étiquetage, assemblage, contrôle qualité)</li>
          </ul>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
            <p className="font-semibold text-red-800">
              Speed E-Log n'effectue PAS de transport et n'est pas responsable des marchandises dès leur remise au transporteur.
            </p>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">ARTICLE 3 - MODALITÉS DE COMMANDE</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">3.1 Formation du contrat</h3>
            <p>
              Les commandes sont traitées en flux continu tout au long de la journée selon les instructions du client. Le contrat est formé dès réception et traitement de la commande dans nos systèmes.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">3.2 Modification et annulation</h3>
            <p className="mb-2">Annulation possible uniquement tant que la commande n'a pas été physiquement préparée. Une fois la préparation commencée :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Les frais de préparation restent dus</li>
              <li>Si un reconditionnement/retour est nécessaire, les frais de traitement retour sont facturés</li>
              <li>L'annulation doit être notifiée immédiatement par email ou via notre interface</li>
            </ul>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">ARTICLE 4 - CONDITIONS TARIFAIRES</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">4.1 Prix</h3>
            <p>
              Les prix sont établis sur devis personnalisé, valable 30 jours. Ils s'entendent hors taxes et seront majorés de la TVA au taux en vigueur.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">4.2 Révision des prix</h3>
            <p>
              Les tarifs peuvent être révisés avec un préavis de 30 jours pour tenir compte des variations de coûts (énergie, salaires, charges).
            </p>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">ARTICLE 5 - CONDITIONS DE PAIEMENT</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">5.1 Délai de paiement</h3>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-semibold">
                Le règlement des factures est exigible dans un délai de 14 jours calendaires à compter de la date d'émission de la facture.
              </p>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">5.2 Modalités de paiement</h3>
            <p className="mb-2">Le paiement s'effectue par :</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Virement bancaire</li>
              <li>Carte bancaire (via lien de paiement sécurisé)</li>
              <li>Prélèvement automatique SEPA (sur mandat signé)</li>
              <li>GoCardless (prélèvement automatique)</li>
            </ul>
            <div className="bg-amber-50 p-4 rounded-lg">
              <p><strong>Mécanisme de sécurisation :</strong> Si un mandat SEPA a été signé et qu'aucun règlement n'est intervenu à l'échéance, le prélèvement automatique sera effectué le 15ème jour.</p>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">5.3 Pénalités de retard</h3>
            <p className="mb-2">En cas de retard de paiement, sont exigibles après mise en demeure restée infructueuse pendant 8 jours :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Pénalités de retard au taux légal majoré (BCE + 10 points, soit actuellement 11,45%)</li>
              <li>Indemnité forfaitaire de 40€ pour frais de recouvrement</li>
              <li>Frais de recouvrement supplémentaires sur justificatifs si supérieurs à 40€</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">5.4 Conséquences du non-paiement</h3>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <p className="mb-2">En cas de défaut de paiement après mise en demeure par LRAR restée sans effet pendant 8 jours :</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>SUSPENSION DES SERVICES :</strong> Speed E-Log se réserve le droit de suspendre l'exécution de ses prestations</li>
                <li><strong>DROIT DE RÉTENTION :</strong> Exercice du droit de rétention conformément à l'article 6</li>
                <li><strong>FRAIS DE STOCKAGE :</strong> Facturation de frais supplémentaires de 15€/jour/palette après notification</li>
                <li><strong>CLAUSE PÉNALE :</strong> En cas de recouvrement judiciaire, indemnité de 10% du montant impayé (minimum 250€)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">ARTICLE 6 - DROIT DE RÉTENTION</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">6.1 Droit de rétention légal</h3>
            <p>
              Conformément aux articles 2286 et suivants du Code civil, Speed E-Log dispose d'un droit de rétention sur les marchandises en sa possession pour garantie des créances nées à l'occasion des prestations effectuées sur ces marchandises.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">6.2 Extension conventionnelle</h3>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <p className="mb-2">
                Le client accepte expressément que ce droit de rétention s'étende à l'ensemble des créances détenues par Speed E-Log à son encontre, à hauteur de la valeur de la créance, dès lors qu'elles concernent des prestations logistiques, même antérieures ou sans lien direct avec les marchandises retenues.
              </p>
              <p className="font-semibold">Cette extension est une condition essentielle du contrat.</p>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">6.3 Conservation des marchandises</h3>
            <p>
              Les marchandises retenues sont conservées aux risques et périls du client qui reste responsable de leur détérioration éventuelle.
            </p>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">ARTICLE 7 - RESPONSABILITÉ ET ASSURANCE</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">7.1 Étendue de la responsabilité</h3>
            <p className="mb-2">
              Speed E-Log est responsable des marchandises uniquement pendant la période d'entreposage dans ses locaux, jusqu'à leur remise au transporteur.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="mb-2 font-semibold">La responsabilité de Speed E-Log cesse définitivement :</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Dès la prise en charge par le transporteur</li>
                <li>Dès la signature du bon de livraison par le transporteur ou le client</li>
                <li>Dès la sortie physique de l'entrepôt</li>
              </ul>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">7.2 Limitation de responsabilité en entrepôt</h3>
            <p className="mb-2">Sauf faute lourde ou dol, la responsabilité de Speed E-Log pour les dommages survenus pendant l'entreposage est limitée à :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>20€ par article endommagé ou perdu (adapté à la valeur moyenne des produits traités)</li>
              <li>300€ par palette</li>
              <li>2 000€ maximum par sinistre</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">7.3 Transfert de responsabilité - CLAUSE ESSENTIELLE</h3>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <p className="mb-2 font-semibold">Le client reconnaît expressément que :</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Speed E-Log n'est PAS transporteur et n'assume AUCUNE responsabilité de transport</li>
                <li>La responsabilité du transport incombe exclusivement au transporteur</li>
                <li>Speed E-Log se charge des réclamations auprès des transporteurs avec lesquels elle a contracté, au nom et pour le compte du client</li>
                <li>Speed E-Log ne peut être tenue responsable des retards de livraison</li>
              </ul>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">7.4 Déclaration de valeur et assurance</h3>
            <p className="mb-2">Pour toute marchandise de valeur supérieure à 500€, le client doit :</p>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>Déclarer la valeur réelle par écrit</li>
              <li>Souscrire une assurance couvrant cette valeur</li>
              <li>Accepter une surprime de stockage de 0,5% de la valeur déclarée</li>
            </ul>
            <p><strong>À défaut, la marchandise sera réputée avoir une valeur maximale de 500€.</strong></p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">7.5 Exclusions de responsabilité</h3>
            <p className="mb-2">Speed E-Log n'est pas responsable des dommages résultant de :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Vice propre de la marchandise ou emballage défectueux</li>
              <li>Force majeure ou cas fortuit</li>
              <li>Faute du client ou de ses préposés</li>
              <li>Instructions erronées ou incomplètes du client</li>
              <li>Nature périssable des marchandises non signalée</li>
            </ul>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">ARTICLE 8 - PROTECTION DES DONNÉES - RGPD</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">8.1 Speed E-Log en tant que Responsable de traitement</h3>
            <p>
              Pour la gestion de la relation commerciale, Speed E-Log traite vos données conformément au RGPD. Vous disposez des droits d'accès, rectification, suppression, limitation, opposition et portabilité.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">8.2 Speed E-Log en tant que Sous-traitant</h3>
            <p>
              Lorsque Speed E-Log traite des données pour le compte du client, un contrat de sous-traitance conforme à l'article 28 RGPD est systématiquement établi.
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <p><strong>DPO :</strong> dpo@speedelog.net</p>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">ARTICLE 9 - OBLIGATIONS DU CLIENT</h2>
          
          <p className="mb-4">Le client s'engage à :</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Fournir des informations exactes et complètes sur la nature des marchandises</li>
            <li>Déclarer par écrit toute marchandise de valeur supérieure à 500€</li>
            <li>Souscrire et maintenir une assurance adaptée à la valeur de ses biens</li>
            <li>Respecter la réglementation applicable aux marchandises stockées</li>
            <li>S'assurer de la conformité des réapprovisionnements de marchandises auprès de ses fournisseurs (les marchandises étant livrées directement par les fournisseurs à Speed E-Log)</li>
            <li>Respecter les délais de paiement convenus</li>
            <li>Informer Speed E-Log de toute marchandise dangereuse ou réglementée</li>
          </ul>

          <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
            <p className="mb-2 font-semibold">Le non-respect de ces obligations :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Engage la responsabilité exclusive du client</li>
              <li>Peut justifier la suspension immédiate des services</li>
              <li>Exonère Speed E-Log de toute responsabilité</li>
            </ul>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">ARTICLE 10 - PRESTATIONS EXPRESSÉMENT EXCLUES</h2>
          
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
            <p className="mb-2 font-semibold">Speed E-Log précise qu'elle N'EFFECTUE PAS :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Le transport de marchandises</li>
              <li>Toute prestation de nature à engager une responsabilité de transporteur</li>
            </ul>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">ARTICLE 11 - FORCE MAJEURE</h2>
          
          <p>
            Speed E-Log ne saurait être tenue responsable de l'inexécution de ses obligations en cas de force majeure, notamment : grève, intempéries exceptionnelles, pandémie, cyberattaque, coupure d'électricité prolongée, incendie, inondation.
          </p>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">ARTICLE 12 - CONFIDENTIALITÉ</h2>
          
          <p>
            Les parties s'engagent à maintenir confidentielles toutes informations commerciales, techniques ou financières échangées dans le cadre de leur relation d'affaires.
          </p>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">ARTICLE 13 - MÉDIATION</h2>
          
          <p>
            En cas de litige, les parties s'engagent à tenter une médiation auprès du Médiateur du Transport et de la Logistique avant toute action judiciaire.
          </p>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">ARTICLE 14 - LOI APPLICABLE ET JURIDICTION</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">14.1 Loi applicable</h3>
            <p>Les présentes CGV sont régies par le droit français.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">14.2 Juridiction compétente</h3>
            <p>
              À défaut de résolution amiable, le litige sera porté devant le Tribunal de Commerce de Vesoul, même en cas de pluralité de défendeurs ou d'appel en garantie.
            </p>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">ARTICLE 15 - CLAUSE DE DIVISIBILITÉ</h2>
          
          <p>
            Si une clause est déclarée nulle, les autres demeurent applicables. Les parties s'efforceront de la remplacer par une disposition valide poursuivant le même objectif.
          </p>
        </section>

        <section className="mb-8 p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">COORDONNÉES</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold mb-2">Speed E-Log SAS</p>
              <p>37 Rue de Rémaucourt, 70170 Port-sur-Saône</p>
              <p>Tél : +33 6 35 58 40 04</p>
              <p>Email : contact@speedelog.net</p>
            </div>
            <div>
              <p>SIRET : 934 758 020 00012</p>
              <p>TVA intracommunautaire : FR95934758020</p>
              <p>RCS Gray-Vesoul B 934 758 020</p>
            </div>
          </div>
        </section>

        <div className="mt-12 p-6 bg-green-50 rounded-lg border-2 border-green-200 text-center">
          <p className="font-semibold text-lg mb-2">CGV mises à jour le 13 juillet 2025</p>
          <p className="mb-2">Ces CGV annulent et remplacent toutes versions antérieures.</p>
          <p className="text-sm text-gray-600 font-semibold">
            Le client reconnaît avoir pris connaissance des présentes CGV et les accepter sans réserve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
