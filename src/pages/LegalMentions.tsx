
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const LegalMentions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto py-16 px-4">
      <Helmet>
        <title>Mentions Légales | Speed E-Log</title>
        <meta
          name="description"
          content="Mentions légales de Speed E-Log, votre partenaire logistique e-commerce basé à Port-sur-Saône."
        />
      </Helmet>

      <h1 className="text-3xl md:text-4xl font-bold mb-8">Mentions Légales</h1>

      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Identification de l'entreprise</h2>
          <p className="mb-4"><strong>Speed E-Log</strong> - SAS au capital de 1 000 euros</p>
          <p className="mb-4"><strong>SIREN :</strong> 934 758 020 - <strong>SIRET :</strong> 934 758 020 00010</p>
          <p className="mb-4"><strong>RCS :</strong> Gray-Vesoul B 934 758 020</p>
          <p className="mb-4"><strong>TVA Intracommunautaire :</strong> FR95934758020</p>
          <p className="mb-4"><strong>Code APE :</strong> 8292Z (Activités de conditionnement)</p>
          
          <div className="mb-4">
            <strong>Siège social :</strong><br />
            37 Rue de Rémaucourt, 70170 Port-sur-Saône, France
          </div>
          
          <p className="mb-4">
            <strong>Directeur de publication :</strong> Francesco Almanzo, Président
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Contact</h2>
          <p className="mb-4"><strong>Email :</strong> contact@speedelog.net</p>
          <p className="mb-4"><strong>Téléphone :</strong> +33 6 35 58 40 04</p>
          <p className="mb-4"><strong>Adresse :</strong> 37 Rue de Rémaucourt, 70170 Port-sur-Saône, France</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Hébergement</h2>
          <p className="mb-4">
            Le site speedelog.net est hébergé par un prestataire technique conforme aux standards européens de sécurité et de protection des données.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Propriété intellectuelle</h2>
          <p className="mb-4">
            L'ensemble du contenu du site speedelog.net (textes, graphismes, logiciels, photographies, logos, marques) est propriété exclusive de Speed E-Log SAS ou de ses partenaires. Toute reproduction, représentation ou exploitation non autorisée est interdite et constitutive de contrefaçon (articles L.335-2 et suivants du Code de Propriété Intellectuelle).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Liens hypertextes</h2>
          <p className="mb-4">
            Les liens vers speedelog.net sont autorisés sous réserve d'information préalable et de non-atteinte aux intérêts de Speed E-Log. Speed E-Log se réserve le droit de demander la suppression de tout lien inapproprié.
          </p>
          <p className="mb-4">
            Speed E-Log décline toute responsabilité quant au contenu des sites vers lesquels des liens sont établis depuis speedelog.fr.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Droit applicable et juridiction</h2>
          <p className="mb-4">Site soumis au droit français.</p>
          <p className="mb-4">Litiges relatifs au site : Tribunaux français compétents.</p>
          <p className="mb-4">Litiges commerciaux (CGV) : Compétence exclusive du Tribunal de Commerce de Gray-Vesoul, conformément à l'article 17.3 des CGV.</p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Mise à jour</h2>
          <p className="mb-4">
            <strong>Version du 27 mai 2025</strong>
          </p>
          <p className="text-sm text-gray-600 mt-8">
            Speed E-Log SAS - 37 Rue de Rémaucourt, 70170 Port-sur-Saône<br />
            SIREN 934 758 020 - APE 8292Z
          </p>
        </section>
      </div>
    </div>
  );
};

export default LegalMentions;
