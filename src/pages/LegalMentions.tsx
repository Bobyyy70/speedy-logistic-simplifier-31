
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const LegalMentions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-br from-green-50 via-blue-50/30 to-green-100/40 dark:from-slate-900 dark:via-blue-950/20 dark:to-green-950/30">
      <div className="container mx-auto py-16 px-4">
        <Helmet>
          <title>Mentions Légales | Speed E-Log</title>
          <meta 
            name="description" 
            content="Mentions légales de Speed E-Log, votre partenaire logistique e-commerce basé à Port-sur-Saône."
          />
        </Helmet>
        
        <div className="max-w-4xl mx-auto bg-white/80 dark:bg-slate-800/50 p-8 rounded-lg shadow-sm border border-green-100/70 dark:border-green-900/30">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Mentions Légales</h1>
          
          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Informations légales</h2>
              
              <p className="mb-4"><strong>Raison sociale :</strong> Speed E-Log</p>
              <p className="mb-4"><strong>Forme juridique :</strong> SAS (Société par Actions Simplifiée)</p>
              <p className="mb-4"><strong>Capital social :</strong> 10 000 euros</p>
              <p className="mb-4"><strong>SIRET :</strong> XXX XXX XXX XXXXX</p>
              <p className="mb-4"><strong>RCS :</strong> XXX XXX XXX Vesoul</p>
              <p className="mb-4"><strong>N° TVA Intracommunautaire :</strong> FRXXXXXXXXXXX</p>
              <p className="mb-4"><strong>Siège social :</strong> Port-sur-Saône, 70170, Bourgogne-Franche-Comté, France</p>
              <p className="mb-4">
                <strong>Directeur de la publication :</strong> Francesco Almanzo, Président
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Contact</h2>
              <p className="mb-4"><strong>Adresse :</strong> Port-sur-Saône, 70170, Bourgogne-Franche-Comté, France</p>
              <p className="mb-4"><strong>Email :</strong> contact@speedelog.fr</p>
              <p className="mb-4"><strong>Téléphone :</strong> +33 3 84 XX XX XX</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Hébergement</h2>
              <p className="mb-4">
                <strong>Prestataire d'hébergement :</strong> Hostinger International Ltd<br />
                <strong>Adresse :</strong> 61 Lordou Vironos Street, 6023 Larnaca, Cyprus<br />
                <strong>Site web :</strong> www.hostinger.fr
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Propriété intellectuelle</h2>
              <p className="mb-4">
                L'ensemble des éléments composant le site speedelog.fr (textes, graphismes, logiciels, photographies, images, vidéos, sons, plans, logos, marques, etc.) 
                sont la propriété exclusive de la société Speed E-Log ou de ses partenaires. Toute reproduction, représentation, modification, publication, transmission, dénaturation, 
                totale ou partielle des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Speed E-Log.
              </p>
              <p className="mb-4">
                Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie 
                conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Liens hypertextes</h2>
              <p className="mb-4">
                Speed E-Log autorise la mise en place de liens hypertextes pointant vers le contenu de son site, sous réserve que ces liens ne portent pas atteinte aux intérêts de la société, 
                et que vous en ayez préalablement informé le directeur de publication. Speed E-Log se réserve le droit de demander la suppression d'un lien si elle le juge inapproprié.
              </p>
              <p className="mb-4">
                Les liens hypertextes établis en direction d'autres sites à partir de speedelog.fr ne sauraient engager la responsabilité de Speed E-Log, notamment en ce qui concerne 
                le contenu de ces sites.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Droit applicable et juridiction compétente</h2>
              <p className="mb-4">
                Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
              <p className="mb-4">
                Dernière mise à jour : 07/04/2025
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalMentions;
