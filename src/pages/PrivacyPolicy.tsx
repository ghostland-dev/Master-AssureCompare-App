import { Card } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 animate-fade-up">
          Politique de Confidentialité
        </h1>

        <Card className="max-w-4xl mx-auto p-8 animate-fade-up">
          <div className="prose prose-blue max-w-none">
            <h2>1. Collecte des informations</h2>
            <p>
              Nous collectons les informations que vous nous fournissez directement
              lorsque vous utilisez notre service de comparaison d'assurances.
              Ces informations incluent :
            </p>
            <ul>
              <li>Informations personnelles (nom, prénom, email)</li>
              <li>Informations sur votre bien immobilier</li>
              <li>Coordonnées de contact</li>
            </ul>

            <h2>2. Utilisation des informations</h2>
            <p>
              Les informations collectées sont utilisées pour :
            </p>
            <ul>
              <li>Vous fournir des devis d'assurance personnalisés</li>
              <li>Améliorer nos services</li>
              <li>Communiquer avec vous concernant nos services</li>
            </ul>

            <h2>3. Protection des données</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité appropriées pour
              protéger vos informations personnelles contre tout accès non autorisé
              ou toute modification, divulgation ou destruction non autorisée.
            </p>

            <h2>4. Partage des informations</h2>
            <p>
              Nous ne partageons vos informations personnelles qu'avec nos
              partenaires assureurs dans le but de vous fournir des devis
              d'assurance. Nous ne vendons jamais vos informations à des tiers.
            </p>

            <h2>5. Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul>
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la portabilité des données</li>
            </ul>

            <h2>6. Cookies</h2>
            <p>
              Nous utilisons des cookies pour améliorer votre expérience sur notre
              site. Vous pouvez contrôler l'utilisation des cookies dans les
              paramètres de votre navigateur.
            </p>

            <h2>7. Contact</h2>
            <p>
              Pour toute question concernant notre politique de confidentialité,
              veuillez nous contacter à privacy@assurcompare.fr
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;