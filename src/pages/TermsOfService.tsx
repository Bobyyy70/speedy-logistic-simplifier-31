import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="container mx-auto py-16 px-4">
      <Helmet>
        <title>Conditions Générales de Vente | Speed E-Log</title>
        <meta name="description" content="Conditions générales de vente des services logistiques et transport de Speed E-Log." />
      </Helmet>

      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">CONDITIONS GÉNÉRALES DE VENTE - SPEED E-LOG</h1>

      <div className="prose max-w-none">
        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">Préambule</h2>
          <p className="mb-4">Speed E-Log, Société par Actions Simplifiée (SAS) au capital de 1 000 euros, immatriculée au Registre du Commerce et des Sociétés de Gray-Vesoul sous le numéro B 934 758 020, dont le siège social est situé au 37 Rue de Rémaucourt, 70170 Port-sur-Saône, France, représentée par son Président Monsieur Francesco Almanzo, propose des services de logistique et de transport aux professionnels. La SAS Speed E-Log est détenue  par Francesco Almanzo et d'autres associés. Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Speed E-Log (ci-après « le Prestataire ») et ses clients professionnels (ci-après « le Client »).</p>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h3 className="font-semibold mb-2">Coordonnées :</h3>
            <ul className="list-disc pl-5">
              <li>N° TVA Intracommunautaire : FR95934758020</li>
              <li>Code APE : 8292Z (Activités de conditionnement)</li>
              <li>Email : contact@speedelog.net</li>
              <li>Téléphone : +33 6 35 58 40 04</li>
            </ul>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">1. Objet et Champ d'Application</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">1.1. Objet</h3>
            <p>
              Les présentes Conditions Générales de Vente (ci-après « CGV ») ont pour objet de régir l'ensemble des prestations de logistique et de transport fournies par la société Speed E-Log, prestataire basé en Bourgogne-Franche-Comté, à ses clients professionnels (ci-après le « Client »). Elles s'appliquent de plein droit à toute commande de prestations (gestion de stock, entreposage, préparation de commandes, expédition, transport, gestion des retours, etc.) confiée à Speed E-Log, quel que soit le lieu d'exécution. Des prestations spécifiques additionnelles peuvent être fournies sur demande et feront l'objet d'un devis ou contrat particulier.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">1.2. Acceptation et primauté</h3>
            <p>
              La passation d'une commande ou la conclusion d'un contrat avec Speed E-Log emporte acceptation sans réserve des présentes CGV par le Client. Celles-ci prévalent sur tout autre document du Client, sauf dérogation expresse écrite acceptée par Speed E-Log.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">1.3. Évolution des CGV</h3>
            <p>
              Speed E-Log se réserve le droit de modifier les présentes CGV. Toute nouvelle version sera communiquée au Client avec un préavis minimum de soixante (60) jours et sera applicable aux nouvelles prestations. Pour les contrats en cours, les modifications substantielles donneront au Client un droit de résiliation sans pénalité sous trente (30) jours suivant la notification. À défaut d'exercice de ce droit, le Client sera réputé avoir accepté les modifications.
            </p>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">2. Définitions</h2>
          <p className="mb-4">Dans le cadre des présentes, les termes suivants ont la signification définie ci-après :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Speed E-Log</strong> : la société prestataire de services logistiques et de transport, y compris ses éventuels sous-traitants et partenaires.</li>
            <li><strong>Client</strong> : la personne morale ou entrepreneur individuel faisant appel aux services de Speed E-Log dans le cadre de son activité professionnelle.</li>
            <li><strong>Prestations</strong> : l'ensemble des services fournis par Speed E-Log au Client, tels que définis dans un devis ou contrat spécifique.</li>
            <li><strong>Partenaires</strong> : tierces parties avec lesquelles Speed E-Log sous-traite ou collabore pour exécuter les prestations.</li>
            <li><strong>Colis</strong> : tout conditionnement unitaire remis pour transport, identifiable par une étiquette d'expédition.</li>
            <li><strong>Destinataire</strong> : la personne physique ou morale désignée pour recevoir un Colis expédié.</li>
          </ul>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">3. Conditions d'admission des marchandises</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">3.1. Nature des produits confiés</h3>
            <p className="mb-2">
              Le Client garantit que les marchandises confiées sont autorisées et conformes à la réglementation. Sauf accord écrit préalable spécifique, sont exclus :
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Produits dangereux (matières inflammables, explosives, toxiques, radioactives)</li>
              <li>Marchandises périssables nécessitant un contrôle de température</li>
              <li>Biens illégaux ou contrefaits</li>
              <li>Armes, munitions, substances stupéfiantes</li>
              <li>Espèces animales ou végétales protégées</li>
              <li>Objets de valeur exceptionnelle (&gt;50 000€ par unité)</li>
            </ul>
            <p className="mt-2">Speed E-Log se réserve le droit de refuser ou suspendre la prise en charge de toute marchandise non conforme.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">3.2. Conditionnement et étiquetage</h3>
            <p>
              Le Client est responsable du conditionnement approprié et de l'étiquetage correct de ses produits. Les marchandises doivent supporter les opérations logistiques usuelles. En cas de non-conformité constatée, Speed E-Log informera le Client et pourra proposer une solution de reconditionnement facturée séparément.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">3.3. Documents et informations</h3>
            <p>
              Le Client fournira en temps utile tous les documents et informations nécessaires. Il garantit l'exactitude des données transmises et assumera les conséquences financières de toute erreur ou omission.
            </p>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">4. Commande de prestations et Formation du Contrat</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">4.1. Devis et acceptation</h3>
            <p>
              Pour chaque demande, Speed E-Log émettra un devis détaillé valable trente (30) jours. Le contrat est formé après acceptation expresse du devis par le Client. Le commencement d'exécution à la demande du Client vaut acceptation tacite.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">4.2. Contrat-cadre</h3>
            <p>
              En cas de collaboration récurrente, un contrat-cadre peut être établi. Les CGV en font partie intégrante, sauf dérogations expresses négociées.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">4.3. Modification de commande</h3>
            <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
              <p>
                Toute modification doit être notifiée par écrit AVANT le début de la préparation. Une fois la préparation commencée ou les produits emballés, aucune modification n'est possible. Toute tentative de modification tardive sera facturée comme une nouvelle commande.
              </p>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">4.4. Droit de refus motivé</h3>
            <p>
              Speed E-Log peut refuser une commande pour motif légitime (impayé antérieur, risque anormal, force majeure). Le motif sera communiqué dans la mesure du possible.
            </p>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">5. Durée du Contrat et Résiliation</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">5.1. Durée initiale</h3>
            <p>Sauf disposition contraire, tout contrat d'externalisation logistique est conclu pour une durée initiale d'un (1) an, renouvelable tacitement.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">5.2. Non-renouvellement</h3>
            <p>Chaque partie peut s'opposer au renouvellement avec un préavis de trois (3) mois par LRAR.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">5.3. Résiliation anticipée</h3>
            <p>Après la période initiale, résiliation possible avec préavis de trois (3) mois. Les obligations perdurent pendant le préavis.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">5.4. Résiliation pour faute</h3>
            <p>En cas de manquement grave non réparé sous trente (30) jours après mise en demeure, résiliation de plein droit possible sans préjudice des dommages-intérêts.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">5.5. Fin de contrat</h3>
            <p>
              Le Client doit commander l'expédition de l'ensemble de ses marchandises dans les trente (30) jours suivant la fin du contrat. Les marchandises seront expédiées par Speed E-Log aux adresses indiquées par le Client, aux frais de ce dernier. Passé ce délai, frais de stockage de 50€/palette/mois. Après quatre-vingt-dix (90) jours, Speed E-Log disposera librement des marchandises.
            </p>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">6. Exécution des prestations Logistiques</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">6.1. Nature des obligations</h3>
            <p>Speed E-Log s'engage à exécuter les prestations avec professionnalisme, conformément aux règles de l'art. Speed E-Log est tenue à une obligation de moyens renforcée, mettant en œuvre les meilleures pratiques du secteur.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">6.2. Réception et stockage</h3>
            <p>Contrôle des colis à réception (nombre et état apparent). Stockage en conditions standard. Inventaire informatique permanent inclus. Les inventaires physiques à l'unité sont disponibles uniquement sur demande spécifique et font l'objet d'une facturation additionnelle selon tarif en vigueur.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">6.3. Préparation des commandes</h3>
            <p>Les commandes sont traitées du lundi au vendredi, hors jours fériés. Aucune préparation ni expédition n'est effectuée les weekends. Cut-off : commandes confirmées avant 14h00 expédiées le jour même ou J+1 ouvré, selon volume. Ce délai est indicatif et non garanti.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">6.4. Gestion des retours</h3>
            <p>Les retours sont systématiquement facturés au même tarif qu'une expédition standard (tarif "aller"). Traitement : contrôle, tri et remise en stock ou isolation selon état. Les frais de retour sont dus même si le produit est endommagé ou non-revendable.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">6.5. Coopération du Client</h3>
            <p>Le Client fournit informations et instructions nécessaires. Désignation d'un interlocuteur référent. En cas de difficulté, recherche conjointe de solutions.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">6.6. Sous-traitance</h3>
            <p>Speed E-Log peut sous-traiter en restant responsable vis-à-vis du Client. Les sous-traitants respecteront des obligations équivalentes.</p>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">7. Prestations de Transport et Livraison</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">7.1. Organisation des expéditions</h3>
            <p>Speed E-Log est avant tout prestataire logistique 3PL (Third Party Logistics). L'organisation du transport est une prestation secondaire et occasionnelle. Lorsque demandé, Speed E-Log peut agir en commissionnaire de transport, sélectionnant des transporteurs pour le compte du Client. Les réclamations transport sont gérées par Speed E-Log auprès de ses transporteurs contractuels, sans engagement de résultat. Le Client reste responsable de fournir toutes informations nécessaires (adresses complètes, téléphones, instructions spéciales).</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">7.2. Délais indicatifs</h3>
            <p>Les délais sont donnés à titre indicatif (24-48h national, 3-5j international standard). Speed E-Log assistera en cas de retard ou litige.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">7.3. Transfert des risques et responsabilité transport</h3>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <p className="mb-2">Les marchandises voyagent aux risques et périls du Client. Speed E-Log, en tant que commissionnaire, n'assume aucune responsabilité pour les dommages survenus pendant le transport. En cas de sinistre :</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>La responsabilité incombe au transporteur selon ses propres conditions</li>
                <li>Speed E-Log assistera le Client dans ses démarches de réclamation</li>
                <li>Les indemnités éventuelles seront celles prévues par le transporteur</li>
                <li>Speed E-Log transmettra toute indemnité reçue du transporteur sans que cela ne constitue une reconnaissance de responsabilité</li>
              </ul>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">7.4. Retours transport</h3>
            <p>Colis non livrés retournés en stock. Tout retour facturé à Speed E-Log par le transporteur (échec livraison, refus destinataire, adresse erronée, etc.) sera intégralement refacturé au Client avec majoration de 5€ pour frais de traitement. La réexpédition constitue une nouvelle commande facturée au tarif plein.</p>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">8. Tarifs et Facturation</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">8.1. Prix</h3>
            <p>Selon devis accepté ou barème en vigueur. Prix HT, taxes en sus.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">8.2. Révision tarifaire</h3>
            <p><strong>Prestations structurelles</strong> : révision annuelle avec préavis de deux (2) mois, basée sur indices officiels (INSEE transport-logistique).</p>
            <p><strong>Transport</strong> : tarifs et surcharges variables selon conditions marché. Information préalable des évolutions significatives.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">8.3. Prestations additionnelles</h3>
            <p>Facturation séparée des prestations hors périmètre initial, après accord ou information du Client.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">8.4. Facturation mensuelle</h3>
            <p>Sauf forfait, facturation mensuelle détaillée des prestations réalisées.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">8.5. Minimum de facturation</h3>
            <p>Si applicable, minimum mensuel selon contrat, justifié par les moyens mobilisés.</p>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">9. Conditions de Paiement</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">9.1. Facturation et échéance</h3>
            <p>Facturation le 15 de chaque mois pour les prestations du mois en cours. Paiement exigible sous quinze (15) jours date de facture. Aucun escompte pour paiement anticipé. Un fichier CSV détaillant toutes les opérations est systématiquement joint à la facture.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">9.2. Prélèvement automatique obligatoire</h3>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <p>Le paiement s'effectue EXCLUSIVEMENT par prélèvement SEPA automatique via GoCardless. Le Client doit activer le mandat de prélèvement dès la signature du contrat. Tout refus de prélèvement automatique entraîne la non-activation des services.</p>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">9.3. Pénalités de retard</h3>
            <p>Tout retard produit automatiquement : intérêts au taux BCE majoré de 10 points + indemnité forfaitaire 40€ + frais réels de recouvrement.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">9.4. Suspension pour impayé</h3>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <p>Retard de paiement supérieur à sept (7) jours : suspension IMMÉDIATE et AUTOMATIQUE de toutes les prestations (blocage expéditions, accès système, réceptions). Aucune mise en demeure préalable requise. La suspension est levée uniquement après paiement intégral.</p>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">9.5. Contestation de facture</h3>
            <p>Toute contestation doit être notifiée par écrit dans les sept (7) jours suivant réception de la facture, avec justificatifs détaillés. Passé ce délai, la facture est réputée définitivement acceptée. Les montants non contestés restent exigibles à échéance normale.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">9.6. Refacturation des frais externes</h3>
            <p>Tous frais facturés à Speed E-Log (surcharges transporteurs, retours, douanes, stockage prolongé chez transporteur, etc.) sont automatiquement refacturés au Client avec majoration de 10% pour frais administratifs. Ces refacturations sont incluses dans la facture mensuelle suivante.</p>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">10. Assurance et Propriété des Marchandises</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">10.1. Propriété</h3>
            <p>Le Client reste propriétaire des marchandises et responsable de leur assurance.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">10.2. Obligation d'assurance</h3>
            <p>Le Client souscrit une assurance couvrant la valeur des marchandises contre tous risques (incendie, vol, dégâts des eaux, etc.). Attestation fournie annuellement.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">10.3. Droit de rétention</h3>
            <p>Conformément aux articles 1948 du Code civil et L133-7 du Code de commerce, Speed E-Log dispose d'un droit de rétention sur les marchandises en garantie des créances certaines, liquides et exigibles. Ce droit s'exerce proportionnellement aux sommes dues, après notification écrite au Client.</p>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">11. Responsabilité du Client</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">11.1. Garantie et indemnisation</h3>
            <p>Le Client garantit Speed E-Log contre tout recours de tiers lié à ses marchandises ou manquements. Il indemnisera Speed E-Log de tout préjudice en résultant.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">11.2. Conformité réglementaire</h3>
            <p>Le Client garantit la conformité légale et réglementaire de ses produits et activités.</p>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">12. Responsabilité de Speed E-Log</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">12.1. Principe</h3>
            <p>Obligation de moyens renforcée. Responsabilité engagée uniquement pour faute prouvée.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">12.2. Exclusion dommages indirects</h3>
            <p>Aucune responsabilité pour dommages indirects (perte de CA, d'image, pénalités tierces, etc.).</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">12.3. Limitations - Stockage</h3>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <p className="mb-2">En cas de responsabilité prouvée pour perte ou dommage :</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Limite par article</strong> : valeur réelle plafonnée à 100€ par unité/article</li>
                <li><strong>Limite par sinistre</strong> : maximum 5 000€ quel que soit le nombre d'articles</li>
                <li><strong>Limite annuelle globale</strong> : 10 000€ tous sinistres confondus</li>
                <li><strong>Marchandises haute valeur</strong> : le Client doit déclarer et assurer séparément tout article &gt;100€</li>
              </ul>
              <p className="mt-2 text-sm">Ces limitations reflètent la réalité économique d'une jeune entreprise et l'obligation pour le Client d'assurer ses propres marchandises.</p>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">12.4. Responsabilité - Transport</h3>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <p className="mb-2">Speed E-Log n'est pas transporteur et n'assume AUCUNE responsabilité financière pour les dommages durant le transport. Les transporteurs appliquent leurs propres conditions et limitations. Speed E-Log gère administrativement les réclamations auprès de SES transporteurs contractuels, sans garantie de résultat. Toute indemnité obtenue sera reversée au Client, déduction faite de 10% pour frais de dossier. Le Client ne peut exiger de Speed E-Log plus que ce qui est obtenu du transporteur.</p>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">12.5. Exclusions</h3>
            <p>Pas de responsabilité pour : périssables (sauf accord), vices propres, défauts non apparents, erreurs Client, cas fortuits.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">12.6. Réclamations</h3>
            <ul className="list-disc pl-5">
              <li><strong>Stockage</strong> : sous 30 jours de la connaissance du dommage</li>
              <li><strong>Transport</strong> : selon délais légaux (3 jours + LRAR pour national)</li>
            </ul>
            <p className="mt-2">Réclamation documentée obligatoire.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">12.7. Plafond annuel global</h3>
            <p>L'ensemble des indemnités dues par Speed E-Log (tous sinistres et causes confondus sur une année) ne pourra excéder 20% du montant total facturé au Client sur l'année concernée, avec un maximum absolu de 15 000€. Cette limitation reflète la capacité financière réelle d'une jeune entreprise et ne s'applique qu'en cas de faute simple (hors faute lourde ou intentionnelle).</p>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">13. Force Majeure</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">13.1. Définition</h3>
            <p>Événement imprévisible, irrésistible, extérieur, rendant impossible l'exécution. Incluant notamment : catastrophes naturelles, pandémies, cyberattaques majeures, grèves sectorielles, restrictions gouvernementales.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">13.2. Effets</h3>
            <p>Suspension des obligations affectées sans responsabilité. Si durée &gt;60 jours : résiliation possible sans indemnité.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">13.3. Notification</h3>
            <p>Information immédiate avec description et mesures d'atténuation. Updates réguliers.</p>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">14. Confidentialité et Protection des Données</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">14.1. Confidentialité</h3>
            <p>Obligation réciproque sur informations non publiques. Durée : contrat + 5 ans. Exceptions : domaine public, divulgation légale.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">14.2. Protection des données - Rôles</h3>
            <p>Speed E-Log = sous-traitant RGPD pour données Destinataires. Mise en œuvre selon article 28 RGPD.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">14.3. Engagements RGPD</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Traitement sur instruction documentée uniquement</li>
              <li>Mesures de sécurité techniques et organisationnelles appropriées</li>
              <li>Sous-traitance ultérieure avec information préalable</li>
              <li>Assistance pour droits des personnes et obligations Client</li>
              <li>Suppression/restitution en fin de contrat</li>
              <li>Audit sur demande raisonnable (frais partagés)</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">14.4. Registre et DPO</h3>
            <p>Speed E-Log tient un registre des traitements. Contact DPO disponible sur demande.</p>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">15. Propriété Intellectuelle</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">15.1. Droits respectifs</h3>
            <p>Chaque partie conserve ses droits. Licence d'usage limitée pendant le contrat.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">15.2. Référence commerciale</h3>
            <p>Sauf opposition écrite, Speed E-Log peut citer le Client comme référence (nom, logo, secteur).</p>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">16. Éthique et Conformité</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">16.1. Engagement</h3>
            <p>Respect des lois, lutte anti-corruption, conformité sociale. Attestations fournies sur demande.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">16.2. Contrôle export</h3>
            <p>Client responsable du respect des sanctions et embargos. Speed E-Log peut refuser expéditions à risque.</p>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">17. Dispositions Finales</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">17.1. Droit applicable</h3>
            <p>Droit français exclusivement.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">17.2. Résolution amiable</h3>
            <p>Tentative obligatoire de résolution amiable sous 30 jours avant action judiciaire.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">17.3. Compétence</h3>
            <p>Tribunal de Commerce de Gray-Vesoul, sauf action Speed E-Log devant tribunal du Client.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">17.4. Intégralité</h3>
            <p>Ces CGV + conditions particulières = accord complet. Toute modification par écrit seulement.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">17.5. Divisibilité</h3>
            <p>Nullité d'une clause n'affecte pas les autres. Remplacement par disposition valide équivalente.</p>
          </div>
        </section>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg border-2 border-blue-200 text-center">
          <p className="font-semibold text-lg mb-2">Applicable au 1er janvier 2025</p>
          <div className="text-sm text-gray-600">
            <p><strong>Speed E-Log SAS</strong></p>
            <p>37 Rue de Rémaucourt, 70170 Port-sur-Saône</p>
            <p>RCS Gray-Vesoul B 934 758 020</p>
          </div>
        </div>
      </div>
    </div>;
};
export default TermsOfService;