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
        <meta
          name="description"
          content="Conditions générales de vente des services logistiques et transport de Speed E-Log."
        />
      </Helmet>

      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">Conditions Générales de Vente – Speed E-Log</h1>
      <p className="text-center text-muted-foreground mb-8">(Prestataire de services logistiques et transport)</p>

      <div className="prose max-w-none">
        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">Préambule</h2>
          <p className="mb-4">
            Speed E-Log, Société par Actions Simplifiée (SAS) au capital de [Montant du capital social], immatriculée au Registre du Commerce et des Sociétés de [Ville du RCS] sous le numéro [Numéro SIREN], dont le siège social est situé à [Votre Adresse], représentée par son Président [Nom du Président], propose des services de logistique et de transport aux professionnels. La SAS Speed E-Log est détenue à 67% par Francesco Almanzo et [Nombre] autres associés. Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Speed E-Log (ci-après « le Prestataire ») et ses clients professionnels (ci-après « le Client »).
          </p>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">1. Objet et Champ d’Application</h2>
          <p className="mb-2">
            <strong>1.1.</strong> Les présentes Conditions Générales de Vente (ci-après « CGV ») ont pour objet de régir l’ensemble des prestations de logistique et de transport fournies par la société Speed E-Log, prestataire basé en Bourgogne-Franche-Comté, à ses clients professionnels (ci-après le « Client »). Elles s’appliquent de plein droit à toute commande de prestations (gestion de stock, entreposage, préparation de commandes, expédition, transport, gestion des retours, etc.) confiée à Speed E-Log, quel que soit le lieu d’exécution (entrepôts de Speed E-Log ou de ses partenaires, opérations de transport organisées par Speed E-Log). Des prestations spécifiques additionnelles (par exemple : assurance Ad Valorem, inventaires spécifiques, support administratif douanier) peuvent être fournies sur demande et feront l’objet d’un devis ou contrat particulier.
          </p>
          <p className="mb-2">
            <strong>1.2.</strong> La passation d’une commande ou la conclusion d’un contrat avec Speed E-Log emporte acceptation sans réserve des présentes CGV par le Client. Celles-ci prévalent sur tout autre document du Client (conditions d’achat, bons de commande, etc.), nonobstant toute clause contraire figurant dans ces documents, sauf dérogation expresse écrite acceptée par Speed E-Log.
          </p>
          <p className="mb-2">
            <strong>1.3.</strong> Speed E-Log se réserve le droit de modifier les présentes CGV en cours de contrat. Toute nouvelle version sera communiquée au Client avec un préavis raisonnable et sera applicable à toute nouvelle prestation postérieure à sa diffusion. En cas de modification substantielle en cours d’exécution d’un contrat à exécution successive, le Client professionnel disposera, si il le souhaite, d’un droit de résiliation sans pénalité sous 30 jours suivant la notification de modification, à défaut de quoi il sera réputé avoir accepté les nouvelles CGV.
          </p>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">2. Définitions</h2>
          <p className="mb-2">
            Dans le cadre des présentes, les termes suivants, lorsqu’ils commencent par une majuscule, ont la signification définie ci-après :
          </p>
          <ul className="list-disc pl-5 mb-2">
            <li><strong>Speed E-Log :</strong> la société prestataire de services logistiques et de transport, y compris ses éventuels sous-traitants et partenaires, contractant avec le Client.</li>
            <li><strong>Client :</strong> la personne morale ou entrepreneur individuel faisant appel aux services de Speed E-Log dans le cadre de son activité professionnelle.</li>
            <li><strong>Prestations :</strong> l’ensemble des services fournis par Speed E-Log au Client, tels que définis dans un devis ou contrat spécifique (ex : réception de marchandises, stockage, préparation de commandes, expédition, transport, gestion des retours, etc.).</li>
            <li><strong>Partenaires :</strong> tierces parties avec lesquelles Speed E-Log sous-traite ou collabore pour exécuter les prestations (ex : exploitants d’entrepôts, transporteurs, etc.).</li>
            <li><strong>Colis :</strong> tout conditionnement unitaire (carton, palette filmée, conteneur, etc.) remis pour transport, identifiable par une étiquette d’expédition.</li>
            <li><strong>Destinataire :</strong> le client final du Client, c’est-à-dire la personne physique ou morale désignée pour recevoir un Colis expédié dans le cadre des prestations de transport.</li>
          </ul>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">3. Conditions d’admission des marchandises</h2>
          <p className="mb-2">
            <strong>3.1. Nature des produits confiés :</strong> Le Client garantit que les marchandises confiées à Speed E-Log sont autorisées et ne contreviennent à aucune loi ou réglementation. Sauf accord écrit préalable de Speed E-Log, le Client s’engage à ne pas remettre à Speed E-Log des produits dangereux (matières inflammables, explosives, toxiques…), des marchandises périssables nécessitant un contrôle de température, des biens illégaux ou contrefaits, des armes ou munitions, des substances stupéfiantes, des espèces animales ou végétales protégées, des objets de très grande valeur ou tout autre article dont le transport ou l’entreposage est réglementé ou nécessite des précautions particulières. Speed E-Log se réserve le droit de refuser ou de suspendre la prise en charge de toute marchandise qui ne serait pas conforme aux informations fournies par le Client ou à la réglementation en vigueur.
          </p>
          <p className="mb-2">
            <strong>3.2. Conditionnement et étiquetage :</strong> Le Client est responsable du conditionnement approprié de ses produits et de leur étiquetage correct. Les marchandises doivent être conditionnées de manière à supporter les opérations logistiques usuelles (manutention, stockage empilé, transport routier standard) sans danger. Chaque Colis destiné à être expédié doit comporter une étiquette d’expédition avec les informations complètes et exactes du Destinataire. Speed E-Log ne pourra être tenue responsable des conséquences d’un défaut de conditionnement ou d’un étiquetage erroné imputable au Client (casse, perte, erreur de livraison, etc.). En cas de non-conformité du conditionnement constatée par Speed E-Log, celle-ci en informera le Client et pourra soit refuser la marchandise, soit proposer une solution de reconditionnement aux frais du Client.
          </p>
          <p className="mb-2">
            <strong>3.3. Documents et informations :</strong> Le Client fournira à Speed E-Log, en temps utile, tous les documents, données et instructions nécessaires à la bonne exécution des prestations (par ex. factures pro forma ou documents douaniers pour les expéditions internationales, spécifications de stockage pour produits fragiles, fiches de sécurité pour produits réglementés, etc.). Le Client garantit l’exactitude des informations transmises (dimensions, poids, nature des produits, valeurs déclarées…), y compris via les systèmes d'information connectés. En cas d’information manquante ou erronée, le Client assumera les conséquences financières (frais supplémentaires, amendes, retards…) et tiendra Speed E-Log indemne de tout préjudice en résultant.
          </p>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">4. Commande de prestations et Formation du Contrat</h2>
          <p className="mb-2">
            <strong>4.1. Devis et acceptation :</strong> Pour chaque demande de prestations, Speed E-Log émettra un devis écrit (ou une proposition commerciale) détaillant la nature des services, les quantités estimées, le prix et les éventuelles conditions particulières. Sauf stipulation contraire, chaque devis est valable 30 jours à compter de son émission. Le contrat est formé une fois le devis expressément accepté par le Client par tout moyen écrit (signature manuscrite ou électronique, email d’accord, validation sur plateforme numérique). À défaut d’acceptation écrite formelle, tout commencement d’exécution des prestations à la demande du Client vaudra acceptation tacite du devis et des présentes CGV aux conditions du devis. Des prestations spécifiques additionnelles peuvent être demandées par le Client et feront l'objet d'un devis complémentaire.
          </p>
          <p className="mb-2">
            <strong>4.2. Contrat-cadre :</strong> En cas de collaboration sur une base récurrente, les parties peuvent convenir d’un contrat-cadre ou contrat annuel. Dans ce cas, les CGV font partie intégrante du contrat-cadre signé. Le contrat-cadre prévaut en cas de contradiction avec les CGV, uniquement pour les clauses expressément négociées dans le contrat-cadre, les CGV continuant de s’appliquer pour le surplus.
          </p>
          <p className="mb-2">
            <strong>4.3. Modification de commande en cours :</strong> Toute demande de modification d’une commande ou prestation en cours (quantités, caractéristiques des produits, calendrier d’exécution…) doit être notifiée par écrit par le Client. Speed E-Log fera ses meilleurs efforts pour satisfaire la demande. Un avenant au devis initial ou un nouveau devis pourra être soumis au Client si la modification impacte le prix ou le délai. Speed E-Log n’est tenue de réaliser la modification qu’après accord écrit des deux parties sur les nouveaux termes. À défaut d’accord, les conditions initiales restent applicables.
          </p>
          <p className="mb-2">
            <strong>4.4. Droit de refus :</strong> Speed E-Log se réserve le droit de refuser toute commande de prestations pour un motif légitime, par exemple : (a) si le Client présente un précédent d’impayé ou d’insolvabilité avéré, (b) si les garanties financières du Client semblent insuffisantes au regard des engagements demandés, (c) si la nature des marchandises ou des opérations demandées présente un risque anormal (sécurité, légalité, faisabilité technique) que Speed E-Log n’est pas en mesure d’assumer correctement, ou (d) en cas de force majeure affectant la capacité de Speed E-Log. Dans la mesure du possible, Speed E-Log informera le Client du motif du refus. Aucune indemnité ne sera due au Client du fait du refus d’une commande non encore acceptée.
          </p>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">5. Durée du Contrat et Résiliation Anticipée</h2>
          <p className="mb-2">
            <strong>5.1. Durée initiale :</strong> Sauf disposition contraire dans le devis ou contrat-cadre, tout contrat d’externalisation logistique conclu entre Speed E-Log et le Client l’est pour une durée initiale d’un (1) an à compter de sa date d’effet. À l’issue de cette période initiale, le contrat se renouvellera tacitement par périodes successives d’un (1) an, sauf si une durée ou des modalités de renouvellement différentes sont spécifiées dans le contrat-cadre.
          </p>
          <p className="mb-2">
            <strong>5.2. Non-renouvellement :</strong> Chaque partie peut s’opposer au renouvellement tacite en notifiant sa décision à l’autre par lettre recommandée avec accusé de réception au moins trois (3) mois avant l’échéance annuelle en cours (ou selon le délai prévu au contrat-cadre). Le contrat prendra alors fin à l’expiration de la période en cours.
          </p>
          <p className="mb-2">
            <strong>5.3. Résiliation anticipée pour convenance :</strong> Sauf conditions particulières prévues au contrat-cadre, chaque partie a la faculté de résilier le contrat avant son terme, à tout moment après la période initiale, sous réserve de respecter un préavis de trois (3) mois notifié par écrit (LRAR). Durant le préavis, les obligations des parties demeurent en vigueur et le Client règlera l’ensemble des prestations effectuées jusqu’à la date effective de résiliation.
          </p>
          <p className="mb-2">
            <strong>5.4. Résiliation pour manquement :</strong> En cas de manquement grave de l’une des parties à ses obligations contractuelles, non réparé dans un délai de trente (30) jours calendaires suivant l’envoi par l’autre partie d’une mise en demeure par lettre recommandée détaillant le manquement, le contrat pourra être résilié de plein droit par l’initiative de la partie non fautive, sans préjudice de tous dommages-intérêts auxquels elle pourrait prétendre. Constitue notamment un manquement grave du Client : le non-paiement répété des factures à échéance, le non-respect des obligations de confidentialité ou de conformité (ex : marchandises illicites), l’absence d’assurance couvrant ses marchandises, etc. Constitue notamment un manquement grave de Speed E-Log : un manquement caractérisé et répété à son obligation essentielle de moyen (ex : taux de service très en deçà des standards convenus sur une longue période), ou une violation de la confidentialité des données du Client.
          </p>
          <p className="mb-2">
            <strong>5.5. Conséquences de la fin de contrat :</strong> En cas de cessation du contrat (pour échéance ou résiliation anticipée), le Client doit organiser la récupération de l’ensemble de ses marchandises encore stockées chez Speed E-Log. Il s’engage à retirer (ou faire expédier) ses stocks dans un délai maximal de trente (30) jours à compter de la date effective de fin de contrat. Passé ce délai, Speed E-Log pourra facturer des frais de stockage supplémentaires et/ou, après un nouveau préavis resté sans effet, procéder à la remise des marchandises à un tiers entrepositaire aux frais et risques du Client, ou en ultime recours, organiser la vente judiciaire ou la destruction des marchandises si aucune solution n’a pu être convenue dans un délai raisonnable. Tous les montants dus par le Client à Speed E-Log (factures échues, pénalités éventuelles, frais de sortie de stock, etc.) deviendront immédiatement exigibles à la date de fin de contrat. Speed E-Log pourra, conformément à l’article Droit de rétention ci-après, retenir les marchandises du Client tant que les sommes dues n’auront pas été intégralement payées.
          </p>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">6. Exécution des prestations Logistiques</h2>
          <p className="mb-2">
            <strong>6.1. Obligations de Speed E-Log (obligation de moyens) :</strong> Speed E-Log s’engage à exécuter les prestations avec professionnalisme et diligence, conformément aux règles de l’art de la logistique et du transport. Il est expressément convenu que Speed E-Log est tenue à une obligation de moyens. Speed E-Log mettra en œuvre les moyens humains, techniques et matériels appropriés pour atteindre les objectifs convenus (par ex. préparer et expédier les commandes dans les délais habituels, assurer un suivi des stocks fiable, etc.), sans pour autant garantir un résultat qui pourrait être affecté par des aléas externes. Speed E-Log désignera un interlocuteur référent pour le Client et veillera à la bonne coordination avec ce dernier.
          </p>
          <p className="mb-2">
            <strong>6.2. Réception et stockage :</strong> Speed E-Log procédera à la réception des marchandises du Client dans ses entrepôts (ou ceux de ses Partenaires), en contrôlant le nombre de colis reçus et leur état apparent. En cas d’anomalie constatée à la réception (colis manquant, colis endommagé extérieurement), Speed E-Log émettra des réserves auprès du transporteur livreur et en informera le Client. Le stockage des marchandises sera réalisé dans des conditions de sécurité et de conservation adéquates, en environnement sec et tempéré (sauf conditions spécifiques convenues pour des produits exigeant une atmosphère particulière). Speed E-Log tiendra à jour un inventaire des stocks du Client, consultable par celui-ci via le portail en ligne ou sur demande périodique. Les inventaires physiques pourront être réalisés selon la fréquence convenue (par ex. inventaires tournants mensuels ou inventaire annuel), et tout écart constaté sera notifié au Client.
          </p>
          <p className="mb-2">
            <strong>6.3. Préparation des commandes :</strong> Sur instruction du Client (génération d’ordre de préparation via le système d’information partagé ou toute autre procédure convenue), Speed E-Log prélèvera dans le stock les articles commandés par le Destinataire final, procédera à l’emballage et conditionnement des colis selon les standards convenus (emballage neutre ou personnalisé si prévu, documents d’accompagnement, etc.), puis remettra les colis préparés au service transport pour expédition. Speed E-Log s’efforcera de respecter le délai de traitement convenu : à titre indicatif, toute commande confirmée avant l’heure limite convenue (cut-off) sera expédiée le jour même ou le jour ouvré suivant. Ce délai n’est toutefois pas garanti contractuellement et demeure soumis aux aléas d’activité et cas de force majeure.
          </p>
          <p className="mb-2">
            <strong>6.4. Gestion des retours :</strong> Si cela fait partie des prestations, Speed E-Log gérera les retours de marchandises (retours clients du Client). Les colis retournés seront contrôlés, triés (remis en stock lorsqu’ils sont revendables, ou isolés en cas de produit endommagé/non conforme), selon les instructions préalables du Client. Les données de retour (identification du client final, motif, état du produit) seront renseignées et mises à disposition du Client. Sauf disposition contraire, la prestation de retour fera l’objet d’une facturation additionnelle selon le tarif en vigueur.
          </p>
          <p className="mb-2">
            <strong>6.5. Obligations de coopération du Client :</strong> Le succès des prestations dépend également de la collaboration du Client. Le Client s’engage à fournir à Speed E-Log en temps utile toutes les informations, autorisations et instructions nécessaires (par ex. prévisionnels de volumes, planning des opérations promotionnelles pouvant générer un pic d’activité, consignes d’emballage spécifiques, exactitude des données transmises via API ou interface, etc.). Le Client désignera un interlocuteur habilité pour traiter avec Speed E-Log des questions opérationnelles quotidiennes. En cas de difficulté dans l’exécution des prestations, Speed E-Log informera le Client dans les meilleurs délais afin de déterminer conjointement les ajustements nécessaires. Aucune pénalité unilatérale décidée par le Client (par ex. pénalité de retard de préparation) ne pourra être appliquée à Speed E-Log sans accord écrit préalable : en cas d’insatisfaction du Client, les parties conviennent de se réunir pour analyser les causes et convenir d’éventuelles mesures correctives ou dédommagements amiables.
          </p>
          <p className="mb-2">
            <strong>6.6. Sous-traitance :</strong> Speed E-Log est autorisée à sous-traiter tout ou partie des prestations à des partenaires spécialisés (par exemple confier le stockage ou une partie des expéditions à un membre de son réseau logistique, ou mandater un commissionnaire de transport pour l’organisation des transports internationaux). Speed E-Log reste tenue envers le Client de la bonne exécution des prestations sous-traitées, dans les limites de responsabilité fixées aux présentes. Speed E-Log veillera à ce que ses sous-traitants respectent des obligations de confidentialité et de sécurité équivalentes.
          </p>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">7. Prestations de Transport et Livraison</h2>
          <p className="mb-2">
            <strong>7.1. Organisation des expéditions :</strong> Dans le cadre des prestations, Speed E-Log peut organiser le transport des colis jusqu’au Destinataire final, via son réseau de transporteurs partenaires (ci-après les « Transporteurs »). Speed E-Log agit en principe en qualité de commissionnaire de transport : elle sélectionne, en son nom propre, un Transporteur pour acheminer les colis, selon les modalités convenues avec le Client (mode express, standard, contre signature, etc.). Dans ce cadre, Speed E-Log assume la responsabilité du transport vis-à-vis du Client dans les conditions limitées prévues à l’article Responsabilité ci-après. Alternativement, si Speed E-Log agit comme mandataire du Client (par exemple, exécution d’instructions précises du Client désignant un transporteur imposé), Speed E-Log n’endosse pas la responsabilité du transport, celle-ci incombant directement au transporteur choisi et au Client.
          </p>
          <p className="mb-2">
            <strong>7.2. Délais de livraison :</strong> Les délais de livraison au Destinataire éventuellement indiqués (sur le site e-commerce du Client ou communiqués par Speed E-Log à titre estimatif) le sont à titre indicatif. Speed E-Log et ses Transporteurs partenaires s’efforcent de respecter les délais usuels annoncés (par ex. 24/48h en national, 3-5 jours en international économique), mais aucune pénalité automatique ne pourra être appliquée en cas de retard non imputable à une faute caractérisée de Speed E-Log. En particulier, ne peuvent engager la responsabilité de Speed E-Log les retards dus : à un cas de force majeure (cf. article Force Majeure), à une saturation du réseau de transport en période exceptionnelle (ex : fêtes de fin d’année), à des formalités administratives ou douanières prolongées, ou encore à une adresse Destinataire incomplète ou erronée fournie par le Client. Néanmoins, Speed E-Log assistera le Client pour investiguer toute livraison en retard ou manquante et fera le nécessaire auprès du Transporteur pour résoudre le litige (instruction de recherche, réclamation, etc.).
          </p>
          <p className="mb-2">
            <strong>7.3. Transfert des risques :</strong> Les opérations de transport comportent par nature des risques (perte, avarie, vol). Conformément aux usages, le risque est transféré au Client (ou au Destinataire final, agissant pour le compte du Client) à la remise des colis au Destinataire, ou à défaut au Client lui-même. Durant l’acheminement, Speed E-Log assume les risques dans la limite de sa responsabilité définie à l’article Responsabilité. Il est convenu que toutes les marchandises voyagent aux risques et périls du Client, sauf faute prouvée de Speed E-Log. En cas de sinistre de transport imputable à un Transporteur tiers, Speed E-Log effectuera les démarches de réclamation auprès de celui-ci et reversera au Client les indemnités reçues, sans que cela ne vaille reconnaissance d’une quelconque responsabilité au-delà.
          </p>
          <p className="mb-2">
            <strong>7.4. Livraisons impossibles – retours :</strong> Si un colis expédié est retourné à Speed E-Log par un Transporteur pour cause de non-livraison (Destinataire absent, adresse insuffisante, non-réclamation au point relais…), Speed E-Log en informera le Client. Sauf instruction contraire, Speed E-Log remettra le colis en stock et tiendra la marchandise à disposition du Client. La réexpédition éventuelle fera l’objet d’une nouvelle facturation de transport. Au-delà d’un certain délai de garde (3 mois par défaut), tout retour non réclamé pourra être considéré comme abandonné et Speed E-Log sera fondée à en disposer (restitution au stock général du Client, destruction si produit invendable, etc.) après en avoir averti le Client.
          </p>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">8. Tarifs et Facturation</h2>
          <p className="mb-2">
            <strong>8.1. Devis et barème :</strong> Les prix des prestations sont établis soit sur la base d’un devis personnalisé accepté par le Client, soit selon le barème tarifaire standard de Speed E-Log en vigueur au jour de la commande, communiqué au Client. Les prix s’entendent en euros hors taxes (TVA et autres taxes applicables en sus). Toute taxe ou redevance applicable aux prestations sera facturée au Client en sus du prix hors taxes.
          </p>
          <p className="mb-2">
            <strong>8.2. Validité et révision des tarifs :</strong> Les devis ont une durée de validité limitée (sauf mention contraire). Les tarifs des prestations logistiques structurelles (stockage, préparation de base, etc.) pourront faire l’objet d’une révision annuelle à la date anniversaire du contrat, basée sur l’évolution des coûts supportés par Speed E-Log (main d’œuvre, énergie, loyers…), avec un préavis d’un (1) mois. Les tarifs des prestations de transport sont ceux en vigueur au moment de l'expédition, tels que définis dans le barème tarifaire ou le contrat. Ces tarifs de transport peuvent inclure des surcharges variables (ex: surcharge carburant, surcharge sécurité, surcharges liées à des destinations spécifiques ou périodes de pointe) dont les modalités d'application et de calcul sont précisées dans le barème tarifaire ou le contrat et peuvent évoluer en cours d'année en fonction des conditions imposées par les transporteurs ou des fluctuations de coûts externes. Speed E-Log informera le Client de toute modification significative de ces surcharges variables avec un préavis raisonnable. Si le Client n’accepte pas une révision annuelle des tarifs structurels jugée excessive, il aura la faculté de résilier le contrat dans les conditions prévues à l’article 5.3, à défaut de quoi la révision sera applicable.
          </p>
          <p className="mb-2">
            <strong>8.3. Éléments hors périmètre :</strong> Les tarifs convenus le sont pour des prestations effectuées dans des conditions normales et pour les volumes estimés. Speed E-Log pourra facturer en sus (après information du Client) les coûts imprévus résultant de circonstances non imputables au prestataire : par exemple, frais d’attente ou de manutention spéciale si un transporteur tiers est retenu sur site du fait du Client, surcoûts liés à un conditionnement défectueux rendant la manutention plus longue, opérations supplémentaires non prévues initialement (inventaire exceptionnel demandé par le Client, reconditionnement massif, traitement de crise…), frais avancés pour le compte du Client (droits de douane, affranchissements postaux, etc.), taxes ou charges nouvelles imposées par la loi en cours de contrat, etc. Ces éléments seront portés sur la facture avec les justificatifs nécessaires.
          </p>
          <p className="mb-2">
            <strong>8.4. Facturation :</strong> Sauf accord spécifique (forfait périodique convenu), Speed E-Log facture mensuellement les prestations réalisées. Chaque fin de mois, une facture récapitulative est émise, incluant : (a) les prestations logistiques (réception, stockage, préparation…) calculées selon les unités d’œuvre (nombre d’unités manipulées, jours de stockage, etc.) ou le forfait convenu, (b) les frais de transport relatifs aux expéditions du mois (selon le tarif transport en vigueur incluant les éventuelles surcharges applicables), (c) tout autre frais dû pour le mois écoulé. Le détail du calcul (par ex. nombre de commandes expédiées, palette-jours stockées) pourra être annexé à la facture ou accessible via le portail client.
          </p>
          <p className="mb-2">
            <strong>8.5. Minimum de facturation :</strong> Le Client reconnaît que Speed E-Log mobilise des moyens techniques et humains pour mettre en place son service logistique. À ce titre, un minimum mensuel de facturation pourra être appliqué, conformément à l’éventuel forfait de base indiqué dans le contrat ou le devis. Si le total des prestations d’un mois n’atteint pas ce minimum, Speed E-Log facturera le montant minimum forfaitaire. En revanche, si l’activité du Client génère une facturation supérieure au minimum, seul le montant réel sera dû (sans cumul avec le minimum).
          </p>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">9. Conditions de Paiement</h2>
          <p className="mb-2">
            <strong>9.1. Délais de paiement :</strong> Les factures de Speed E-Log sont payables à 30 jours nets date de facture, sans escompte pour paiement anticipé. Le règlement s’effectuera par le moyen convenu (virement bancaire de préférence, prélèvement SEPA si accordé, etc.). En cas de paiement par prélèvement automatique (si proposé by Speed E-Log), le Client s’assurera que son compte est suffisamment approvisionné à la date d’échéance.
          </p>
          <p className="mb-2">
            <strong>9.2. Défaut de paiement :</strong> Tout montant non payé à l’échéance prévue produira, de plein droit et sans mise en demeure préalable, des intérêts de retard calculés au taux d’intérêt légal majoré de 10 points (ou, si supérieur, au taux minimum prévu par l’article L441-10 du Code de commerce). Les intérêts courent à partir du jour suivant la date d’exigibilité jusqu’au paiement effectif intégral. En sus des pénalités de retard, le Client sera redevable de l’indemnité forfaitaire pour frais de recouvrement de 40 € prévue par la loi (C. com. art. D441-5), Speed E-Log se réservant le droit de réclamer une indemnisation complémentaire sur justificatifs si les frais de recouvrement réellement engagés dépassent ce montant.
          </p>
          <p className="mb-2">
            <strong>9.3. Mesures en cas d’impayé :</strong> En cas de retard de paiement avéré de plus de 15 jours, Speed E-Log se réserve le droit, après simple notification écrite au Client, de suspendre l’exécution des prestations en cours (notamment, suspension des expéditions ou blocage des nouvelles réceptions) jusqu’au complet paiement des sommes échues, sans que cette suspension puisse être considérée comme une résiliation du contrat de son fait. Par ailleurs, Speed E-Log pourra exiger le paiement immédiat de toute autre somme échue non encore payée, et rendre exigibles de façon anticipée les factures non encore arrivées à échéance (échéancier de paiements) en cas de doute sérieux sur la solvabilité du Client.
          </p>
          <p className="mb-2">
            <strong>9.4. Garanties de paiement :</strong> Speed E-Log pourra subordonner l’acceptation ou la poursuite des prestations à des garanties de paiement supplémentaires de la part du Client si celui-ci présente des incidents de paiement répétés ou un risque aggravé d’insolvabilité (par exemple : paiement d’avance des prestations mensuelles, constitution d’un dépôt de garantie, caution bancaire, etc.). En l’absence de constitution de la garantie demandée, Speed E-Log pourra refuser toute nouvelle expédition de marchandises.
          </p>
          <p className="mb-2">
            <strong>9.5. Prélèvement automatique hebdomadaire :</strong> Par la signature du contrat ou de l’accord commercial, le Client autorise un prélèvement automatique SEPA via Stripe ou GoCardless, mis en place lors de la signature du mandat de prélèvement.
          </p>
          <p className="mb-2">
            <strong>9.6. Facturation hebdomadaire :</strong> Les prestations (logistique, transport, suppléments) sont facturées chaque semaine ; le montant de chaque facture est prélevé automatiquement à la date fixe convenue.
          </p>
          <p className="mb-2">
            <strong>9.7. Ajustements avant facturation :</strong> Le Client doit signaler ou corriger toute anomalie (annulation, doublon, erreur de tarif) avant l’émission de la facture hebdomadaire. Aucun ajustement ne sera pris en compte a posteriori.
          </p>
          <p className="mb-2">
            <strong>9.8. Défaut de paiement :</strong> Tout prélèvement refusé ou impayé entraîne, de plein droit et sans mise en demeure :
          </p>
          <ul className="list-disc pl-5 mb-2">
            <li>des intérêts de retard au taux légal majoré de 10 points ;</li>
            <li>une indemnité forfaitaire de 40 € pour frais de recouvrement ;</li>
            <li>la suspension immédiate des prestations (blocage des accès et expéditions).</li>
          </ul>
          <p className="mb-2">
            <strong>9.9. Suspension automatique :</strong> En cas de deux incidents de paiement consécutifs, le Prestataire suspend sans préavis l’ensemble des services et exige le paiement intégral de toutes sommes dues avant reprise.
          </p>
          <p className="mb-2">
            <strong>9.10. Refacturation des frais annexes :</strong> Dès réception d’un justificatif de surcoûts facturés par un transporteur (adresse erronée, absence ou inexactitude de numéro de téléphone, second passage, stockage, taxes ou droits additionnels, etc.), ces montants sont refacturés automatiquement au Client dans les mêmes conditions que les autres factures.
          </p>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">10. Droit de Rétention et de Lien</h2>
          <p className="mb-2">
            <strong>10.1. Droit de Rétention Contractuel :</strong> Indépendamment des dispositions de droit commun (articles 1948 du Code civil et L133-7 du Code de commerce) reconnaissant le droit de rétention du dépositaire ou du transporteur, le Client reconnaît à Speed E-Log un droit de rétention contractuel général et permanent sur l’ensemble des marchandises, documents et biens du Client en possession de Speed E-Log, et ce en garantie de la totalité des créances (factures échues ou à échoir, intérêts de retard, frais engagés) que Speed E-Log détient contre le Client. Speed E-Log pourra donc, sans autre formalité judiciaire, refuser de restituer ou d’expédier les marchandises du Client tant que celui-ci n’aura pas réglé toutes les sommes dues. Ce droit de rétention s’exerce également en cas de redressement ou liquidation judiciaire du Client, conformément aux dispositions légales. Le Client restera redevable des frais de stockage courants pendant la période de rétention. Si, malgré l’exercice du droit de rétention, le Client ne s’acquitte pas de ses dettes dans un délai raisonnable, Speed E-Log pourra, après mise en demeure préalable restée sans effet, faire procéder à la vente des marchandises retenues pour se payer sur le prix, conformément à la loi.
          </p>
          <p className="mb-2">
            <strong>10.2. Propriété et responsabilité :</strong> Le Client reste propriétaire et entièrement responsable de ses marchandises pendant toute la durée de l’entreposage et/ou du transport.
          </p>
          <p className="mb-2">
            <strong>10.3. Obligation d’assurance :</strong> Le Client s’engage à souscrire, à ses frais, une assurance « tous risques » couvrant perte, vol, incendie, dégâts des eaux, catastrophes naturelles et tout autre dommage. Le Prestataire ne peut être tenu responsable des dommages couverts par cette assurance, sauf faute lourde dûment prouvée.
          </p>
          <p className="mb-2">
            <strong>10.4. Attestation d’assurance :</strong> Le Client fournit une attestation d’assurance valide avant toute mise à disposition des services logistiques. Cette attestation est renouvelée annuellement ou à chaque échéance du contrat d’assurance ; à défaut, le Prestataire peut refuser l’admission des marchandises.
          </p>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">11. Assurance des Biens et Responsabilité du Client</h2>
          <p className="mb-2">
            <strong>11.1. Assurance des marchandises :</strong> Le Client est responsable des marchandises qu’il confie et conserve la propriété desdites marchandises pendant toute la durée des prestations. À ce titre, il lui appartient de souscrire toutes assurances nécessaires pour couvrir les risques de perte, vol ou dommage pouvant affecter ses marchandises entreposées chez Speed E-Log ou en cours de transport. Le Client s’engage notamment à assurer ses biens en “tous risques” (y compris contre l’incendie, le vol, les dégâts des eaux, les catastrophes naturelles, etc.) pour une valeur suffisante, et à maintenir cette assurance tant que ses marchandises sont sous la garde de Speed E-Log. Sur demande de Speed E-Log, le Client fournira une attestation d’assurance à jour justifiant de cette couverture.
          </p>
          <p className="mb-2">
            <strong>11.2. Renonciation à recours :</strong> Le Client renonce, et fera renoncer ses assureurs, à tout recours contre Speed E-Log et ses assureurs pour tout dommage aux marchandises dans la mesure où ces dommages sont couverts par l’assurance du Client. Il est rappelé que Speed E-Log n’est que dépositaire temporaire des biens et que son assurance responsabilité civile professionnelle ne couvre pas la valeur intrinsèque des marchandises du Client. En conséquence, sauf faute lourde ou intentionnelle de Speed E-Log dûment prouvée (cf. Responsabilité ci-après), le Client supporte financièrement les dommages subis par ses stocks via sa propre assurance et ne saurait rechercher Speed E-Log ou son assureur en dehors des limites fixées aux présentes.
          </p>
          <p className="mb-2">
            <strong>11.3. Responsabilité du Client vis-à-vis de Speed E-Log :</strong> Le Client répond de tout préjudice direct causé à Speed E-Log ou aux tiers du fait de ses marchandises ou de son manquement aux présentes. En particulier, le Client sera responsable des conséquences (dommages, coûts de dépollution, amendes…) liées à la présence de marchandises dangereuses ou illicites confiées sans accord à Speed E-Log en violation de l’article 3.1. De même, le Client indemnisera Speed E-Log de toute condamnation, frais ou pénalité qui serait mise à la charge de Speed E-Log du fait d’un manquement du Client à ses obligations légales (par exemple : faux renseignements douaniers, non-conformité réglementaire des produits, violation de droits de propriété intellectuelle de tiers par les produits stockés, etc.). Le Client garantit Speed E-Log contre toute action de tiers (y compris les Destinataires) liée à un défaut des produits du Client (vice caché, rappel de produit défectueux, etc.) ou à une faute du Client, et prendra fait et cause pour Speed E-Log en cas de réclamation ou procédure.
          </p>
          <p className="mb-2">
            <strong>11.4. Assurance de Speed E-Log :</strong> Speed E-Log déclare avoir souscrit une assurance responsabilité civile professionnelle couvrant les dommages pouvant être causés aux Clients du fait de l’exécution des prestations, en accord avec les usages de la profession. Sur demande du Client, Speed E-Log peut présenter une attestation de son assureur. Il est toutefois rappelé que cette assurance RCP de Speed E-Log n’a vocation qu’à couvrir sa responsabilité civile dans les limites et conditions des présentes CGV, et non à se substituer à l’assurance “marchandises” du Client.
          </p>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">12. Responsabilité de Speed E-Log</h2>
          <p className="mb-2">
            <strong>12.1. Principe général :</strong> Conformément à l’article 6.1, Speed E-Log est tenue d’une obligation de moyens. Sa responsabilité ne pourra être engagée qu’en cas de faute prouvée dans l’exécution de ses obligations. En aucun cas Speed E-Log n’est responsable des conséquences liées à des causes extérieures non imputables (fait du Client, fait d’un tiers, force majeure).
          </p>
          <p className="mb-2">
            <strong>12.2. Dommages indirects :</strong> Speed E-Log ne répond d’aucun dommage indirect subi par le Client du fait des prestations. Sont qualifiés de dommages indirects (de façon non exhaustive) : perte de chiffre d’affaires, de marge ou de profit, perte de clientèle, atteinte à l’image de marque, trouble commercial quelconque, pénalité contractuelle due par le Client à un tiers, etc., quand bien même Speed E-Log aurait été avertie de la possibilité de tels dommages. Le Client renonce à toute demande d’indemnisation à ce titre.
          </p>
          <p className="mb-2">
            <strong>12.3. Perte ou avarie de marchandises (stockage) :</strong> En cas de perte, vol ou détérioration des marchandises alors qu’elles sont sous la garde de Speed E-Log (en entrepôt) et si la responsabilité de Speed E-Log est démontrée (faute prouvée dans la surveillance ou la manutention, par exemple), l’indemnisation due au Client sera limitée à la valeur directe prouvée des marchandises endommagées ou manquantes (valeur d'achat hors taxes justifiée par facture), calculée au prorata de la quantité affectée. En tout état de cause, cette indemnité globale ne pourra excéder un plafond de 10 000 € par événement et 25 000 € par an de contrat, sauf faute lourde ou dolosive de Speed E-Log. Il est fortement recommandé au Client, si la valeur de ses marchandises excède ces plafonds, de souscrire une assurance complémentaire ou de demander à Speed E-Log une offre pour une assurance Ad Valorem spécifique, qui fera l'objet d'une facturation additionnelle.
          </p>
          <p className="mb-2">
            <strong>12.4. Perte ou avarie de marchandises (transport) :</strong> Lorsque Speed E-Log intervient en phase de transport en qualité de commissionnaire de transport, sa responsabilité en cas de perte ou avarie pendant le transport est régie par les règles et limitations légales ou conventionnelles applicables au mode de transport concerné :
          </p>
          <ul className="list-disc pl-5 mb-2">
            <li>Pour les expéditions nationales en France (transport intérieur) : l’indemnité est limitée, sauf faute lourde de Speed E-Log, à 23 € par kilogramme de poids brut manquant ou endommagé, avec un maximum de 750 € par colis ou unité de transport, ou le montant prévu par le contrat-type applicable le cas échéant. Elle ne pourra en aucun cas excéder la valeur marchande de la marchandise perdue.</li>
            <li>Pour les expéditions internationales : si le transport est soumis à une convention internationale (CMR pour le transport routier international, règles de Varsovie/Montréal pour l’aérien, règles de La Haye-Visby pour le maritime, etc.), les limites d’indemnité de ces conventions s’appliquent (ex : environ 8,33 DTS par kg en routier CMR). Si aucune convention n’est applicable, les limites du transport intérieur français ci-dessus s’appliquent par analogie.</li>
            <li>Le Client peut demander à Speed E-Log une offre pour une assurance Ad Valorem couvrant la valeur réelle des marchandises pendant le transport, moyennant une facturation additionnelle.</li>
            <li>Lorsque Speed E-Log agit en qualité de mandataire de transport (transporteur imposé par le Client), Speed E-Log n’endosse aucune responsabilité propre sur le transport ; seul le transporteur choisi est responsable dans le cadre de son contrat avec le Client. Speed E-Log transmettra néanmoins les réclamations du Client au transporteur concerné.</li>
          </ul>
          <p className="mb-2">
            <strong>12.5. Exclusions spécifiques :</strong> Speed E-Log n’assume aucune responsabilité dans les cas suivants :
          </p>
          <ul className="list-disc pl-5 mb-2">
            <li>Produits périssables ou sous température dirigée : Speed E-Log n’ayant pas vocation, sauf accord spécial, à stocker des marchandises périssables ou réfrigérées, tout dommage lié à la détérioration naturelle de produits périssables est exclu.</li>
            <li>Vices propres de la marchandise : Speed E-Log ne répond pas de la perte/avarie résultant d’un vice ou défaut inhérent au produit (par ex. marchandise qui fuirait ou s’auto-détériorerait par nature).</li>
            <li>Défaut de contrôle à réception : Speed E-Log ne peut être tenue responsable d’un dommage non apparent non détecté à la réception, si l’emballage ne présentait pas de signe de manquement permettant d’émettre des réserves.</li>
            <li>Erreur d’inventaire imputable au Client : si le Client a livré un stock erroné (quantités ou références non conformes aux documents), Speed E-Log ne supportera pas les conséquences des erreurs de préparation découlant de cette discordance initiale.</li>
            <li>Retard : les éventuels retards dans l’exécution des prestations (préparation ou livraison) n’ouvrent droit à aucune indemnisation, sauf s’ils sont directement imputables à une faute lourde de Speed E-Log et que le Client prouve un préjudice direct en lien avec ce retard. En particulier, les pénalités contractuelles que le Client subirait de la part de ses propres clients en cas de retard ne seront pas prises en charge par Speed E-Log (dommage indirect).</li>
          </ul>
          <p className="mb-2">
            <strong>12.6. Procédure de réclamation :</strong> Le Client, s’il entend mettre en jeu la responsabilité de Speed E-Log pour perte ou avarie, devra formuler sa réclamation par écrit motivé dans les délais suivants : (a) pour les prestations de stockage/manutention : dans les quinze (15) jours calendaires à compter du jour où il a eu connaissance du fait générateur du dommage (par ex. livraison d’un colis endommagé à son Destinataire) ; (b) pour les prestations de transport : dans les délais prévus par les conventions de transport applicables ou la loi (ex : 3 jours ouvrés suivant réception pour émettre des réserves motivées auprès du transporteur si application de l’art. L133-3 du Code de commerce pour un transport interne, et confirmation par LRAR). La réclamation devra être accompagnée de tous justificatifs (réserves émises, bon de livraison, copie de facture de la marchandise perdue…). Aucune réclamation ne pourra être honorée si elle est formulée hors délai ou si le Client n’est pas à jour de ses paiements envers Speed E-Log.
          </p>
          <p className="mb-2">
            <strong>12.7. Plafond de responsabilité global :</strong> En tout état de cause, l’ensemble des indemnités éventuellement dues par Speed E-Log au titre des présentes (tous sinistres confondus sur une année contractuelle) ne pourra excéder un montant égal à 20% du total des montants facturés par Speed E-Log au Client sur ladite année, ou 50 000 € (cinquante mille euros), le moindre des deux étant retenu. Cette limitation ne s’applique pas en cas de faute lourde ou intentionnelle de Speed E-Log prouvée par le Client, ni aux atteintes à la personne.
          </p>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">13. Force Majeure</h2>
          <p className="mb-2">
            <strong>13.1. Définition :</strong> Constitue un cas de Force Majeure tout événement échappant au contrôle raisonnable de la partie qui l’invoque, et rendant impossible l’exécution de tout ou partie de ses obligations. Il doit être imprévisible lors de la conclusion du contrat et irrésistible dans son occurrence. Sont notamment conventionnellement considérés comme cas de Force Majeure, outre ceux reconnus par la jurisprudence française : les catastrophes naturelles (inondation, tempête, tremblement de terre…), les incendies ou accidents majeurs, les conflits sociaux externes (grève nationale des transports, lock-out imposé par des tiers), la guerre, les émeutes ou troubles civils, les actes de terrorisme, les pandémies, les restrictions gouvernementales ou légales imprévues (embargos, fermetures de frontières), les cyberattaques de grande ampleur, ainsi que tout autre événement imprévisible empêchant matériellement l’exécution normale des prestations.
          </p>
          <p className="mb-2">
            <strong>13.2. Effets :</strong> En cas de survenance d’un cas de Force Majeure affectant l’une des parties, l’exécution des obligations impactées sera suspendue pendant la durée de l’empêchement, sans responsabilité de cette partie. Chaque partie supporte la charge de ses propres coûts résultant de l’événement. Si le cas de Force Majeure a une durée supérieure à trente (30) jours consécutifs, chaque partie aura la faculté de résilier de plein droit le contrat par notification écrite, sans indemnité de part et d’autre (sauf paiement des prestations déjà effectuées).
          </p>
          <p className="mb-2">
            <strong>13.3. Obligation d’information :</strong> La partie qui invoque la Force Majeure doit en avertir aussitôt l’autre partie par écrit, en décrivant la nature de l’événement et les conséquences prévisibles sur l’exécution du contrat. Elle devra s’efforcer d’en atténuer les effets dans la mesure du possible et tenir régulièrement informée l’autre partie de l’évolution. Dès la fin de l’événement de Force Majeure, les obligations reprendront leur cours normal pour la durée restant à courir du contrat, sauf si celui-ci a été valablement résilié entre-temps.
          </p>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">14. Confidentialité et Données Personnelles</h2>
          <p className="mb-2">
            <strong>14.1. Confidentialité :</strong> Chacune des parties s’engage à conserver confidentiels tous les documents, données et informations de nature technique, commerciale, financière ou autre, obtenus de l’autre partie dans le cadre de la préparation et de l’exécution des prestations, et qui ne sont pas publics. En particulier, le Client s’engage à ne pas divulguer les méthodes, outils et tarifs de Speed E-Log, et Speed E-Log s’engage à ne pas divulguer les informations relatives aux produits, clients, volumes ou chiffres d’affaires du Client. Cette obligation de confidentialité perdure pendant toute la durée du contrat et pendant une période de cinq (5) ans après son expiration. Sont exclus de cette obligation les informations tombées dans le domaine public sans faute de la partie qui les divulgue, celles déjà connues de manière légitime par la partie réceptrice avant la signature du contrat, ou celles divulguées sur exigence légale ou judiciaire (dans ce cas, limitée au strict nécessaire). Chaque partie veillera au respect de ce devoir de confidentialité par ses employés et sous-traitants.
          </p>
          <p className="mb-2">
            <strong>14.2. Données personnelles :</strong> Dans le cadre de l’exécution des prestations, Speed E-Log peut être amenée à traiter des données à caractère personnel pour le compte du Client, notamment les données des Destinataires finaux des colis (noms, adresses, emails, téléphones) et éventuellement des employés du Client (contacts administratifs, etc.). Speed E-Log agit en qualité de sous-traitant du Client pour ces données, le Client restant le responsable de traitement au sens de la réglementation applicable (RGPD et Loi Informatique et Libertés). À ce titre, Speed E-Log n’agira que sur instruction documentée du Client, conformément au contrat et aux présentes CGV, pour traiter ces données dans le seul but d’exécuter les prestations (préparation, expédition, suivi, SAV). Speed E-Log mettra en place des mesures de sécurité appropriées pour protéger les données contre toute perte ou accès non autorisé, et n’en donnera accès qu à son personnel ou sous-traitants ayant besoin d’en connaître pour les besoins de la mission (ex : transporteurs pour la livraison). Speed E-Log s’interdit d’utiliser ou divulguer ces données à d’autres fins. Conformément à l’article 28 du RGPD, Speed E-Log s’engage : (a) à ne recruter un autre sous-traitant (sous-traitance ultérieure) pour tout ou partie des traitements qu’après en avoir informé le Client et sous réserve que le sous-traitant présente les mêmes garanties, (b) à aider le Client dans la mesure du possible à satisfaire aux demandes d’exercice de droits par les personnes concernées ou aux obligations légales lui incombant (notifications CNIL, violations de données…), (c) à supprimer ou retourner au Client les données personnelles du Client en fin de contrat, sur demande, sauf obligation légale de conservation pour Speed E-Log, et (d) à mettre à disposition du Client les informations nécessaires pour prouver le respect de ces obligations (sous réserve de confidentialité). Par ailleurs, Speed E-Log, en tant que responsable de traitement pour ses propres besoins (ex : gestion de son fichier clients), traite également certaines données du Client (personnes de contact) conformément à sa Politique de confidentialité disponible sur son site web. Le Client s’engage de son côté à respecter la réglementation en vigueur sur les données personnelles et à informer correctement les personnes concernées que leurs données pourront être transmises à Speed E-Log pour l’exécution des services (mention d’information dans sa politique de confidentialité e-commerce, etc.).
          </p>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">15. Propriété Intellectuelle</h2>
          <p className="mb-2">
            <strong>15.1. Outils et logiciels :</strong> Speed E-Log conserve l’entière propriété intellectuelle de tous les outils, logiciels, développements, savoir-faire et processus qu’elle utilise ou met à disposition du Client dans le cadre des prestations. Le Client dispose d’un droit d’usage non exclusif et non transférable sur les éventuels outils mis à sa disposition (par ex. portail web de suivi des stocks ou des expéditions), uniquement pour les besoins des prestations et pendant la durée du contrat. Le Client s’interdit de copier, décompiler, modifier ces outils, ou de tenter de s’approprier leur code source ou concepts, sauf disposition contraire impérative. De même, tous les rapports, statistiques ou documents générés par Speed E-Log pour le Client peuvent être utilisés librement par le Client pour ses besoins internes, mais Speed E-Log conserve la paternité des méthodes et présentations utilisées.
          </p>
          <p className="mb-2">
            <strong>15.2. Marques et références :</strong> Le fait pour le Client de faire appel à Speed E-Log n’emporte aucune cession ou licence sur les marques, logos ou autres signes distinctifs de Speed E-Log, et vice-versa. Cependant, le Client autorise Speed E-Log, à titre de référence commerciale, à citer son nom, son logo et une description générale des prestations réalisées (nature, secteur) dans ses documents commerciaux et sur son site internet, et ce pendant la durée du contrat et deux (2) ans après sa cessation. Si le Client ne souhaite pas apparaître dans les références, il peut le notifier par écrit à Speed E-Log à tout moment, et Speed E-Log fera le nécessaire pour retirer la référence dans un délai raisonnable.
          </p>
          <p className="mb-2">
            <strong>15.3. Documents du Client :</strong> Les documents éventuellement remis par le Client à Speed E-Log (par ex. manuels de procédure, images de marque pour préparation de colis personnalisés, etc.) restent la propriété exclusive du Client. Speed E-Log ne les utilisera que pour l’exécution du contrat et les restituera ou détruira sur demande en fin de mission, sauf besoin de conservation justifié.
          </p>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">16. Éthique et Conformité</h2>
          <p className="mb-2">
            <strong>16.1. Conformité légale :</strong> Chaque partie déclare s’engager à respecter l’ensemble des lois et réglementations qui lui sont applicables dans le cadre du présent contrat. En particulier, le Client garantit que ses produits sont fabriqués, distribués et commercialisés dans le respect des normes applicables (sécurité des produits, étiquetage, réglementation sectorielle) et qu’il dispose de tous les droits nécessaires pour les vendre (ex : pas de contrefaçon). Speed E-Log s’engage de son côté à respecter les réglementations applicables à son activité de transport et logistique (notamment Code des transports, réglementation sociale, sûreté des entrepôts, etc.).
          </p>
          <p className="mb-2">
            <strong>16.2. Lutte contre la corruption et travail dissimulé :</strong> Les parties affirment leur attachement aux principes éthiques en affaires. Elles déclarent n’avoir accordé ni reçu aucune forme de pot-de-vin ou avantage indû lors de la conclusion du contrat. Chacune des parties se conformera aux lois de lutte contre la corruption qui la concernent. De même, Speed E-Log déclare être en conformité avec la législation relative au travail dissimulé et s’engage à fournir au Client, sur demande, les attestations requises (attestation de vigilance URSSAF, etc.) prouvant que ses salariés sont déclarés.
          </p>
          <p className="mb-2">
            <strong>16.3. Contrôle des exportations et sanctions :</strong> Si les prestations impliquent des envois internationaux, le Client est responsable de s’assurer du respect des réglementations en matière d’export control et sanctions économiques (par ex. ne pas expédier à des personnes ou entités sous embargo sans autorisation). Speed E-Log pourra refuser une expédition internationalement risquée ou interdite par ces réglementations.
          </p>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">17. Litiges et Droit Applicable</h2>
          <p className="mb-2">
            <strong>17.1. Droit applicable :</strong> Les présentes Conditions Générales de Vente et les opérations qui en découlent sont soumises au droit français, à l’exclusion de toute autre législation. Il en est ainsi pour les règles de fond comme pour les règles de forme, nonobstant le lieu d’exécution des prestations ou la nationalité du Client.
          </p>
          <p className="mb-2">
            <strong>17.2. Tentative de règlement amiable :</strong> En cas de différend relatif à l’interprétation ou l’exécution des présentes CGV, les parties conviennent de tenter de trouver d’abord une solution amiable. À cet effet, la partie la plus diligente adressera à l’autre une notification écrite exposant clairement les faits et sa position. Les parties se réuniront (y compris par visioconférence) dans un délai de quinze (15) jours pour tenter de résoudre le litige de bonne foi. Si au bout de trente (30) jours calendaires à compter de cette notification, aucun accord n’est trouvé, chaque partie retrouvera sa liberté d’action pour engager les procédures nécessaires.
          </p>
          <p className="mb-2">
            <strong>17.3. Juridiction compétente :</strong> À défaut d’accord amiable, tout litige relatif aux présentes CGV (formation, validité, exécution ou cessation du contrat) sera soumis à la compétence exclusive du Tribunal de commerce du ressort du siège social de Speed E-Log, même en cas de pluralité de défendeurs ou d’appel en garantie. Cette attribution expresse de compétence est convenue dans l’intérêt des deux parties, qui y adhèrent pleinement. Toutefois, Speed E-Log se réserve le droit d’assigner le Client devant le tribunal du siège de ce dernier ou tout autre tribunal compétent, si elle le juge préférable, notamment en cas d’actions relatives à des factures impayées.
          </p>
          <p className="mb-2">
            <strong>17.4. Divisibilité des clauses :</strong> Si l’une quelconque des dispositions des présentes CGV était déclarée nulle, illégale ou inapplicable par une décision de justice définitive, cette disposition serait réputée non écrite sans pour autant entraîner la nullité des autres clauses, qui conserveraient plein effet. Les parties pourront d’un commun accord remplacer la clause annulée par une stipulation valable reflétant leur intention initiale.
          </p>
          <p className="mb-2">
            <strong>17.5. Intégralité de l’accord :</strong> Les présentes CGV, complétées le cas échéant par les conditions particulières du devis ou contrat signé avec le Client, expriment l’intégralité de l’accord entre les parties et prévalent sur tout accord, correspondance ou document antérieur relatif au même objet. Aucune tolérance ou indulgence d’une partie quant à l’application d’une clause ne pourra être interprétée comme une renonciation à s’en prévaloir ultérieurement.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;