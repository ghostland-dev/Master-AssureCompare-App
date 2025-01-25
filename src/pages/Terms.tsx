import { Card } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 animate-fade-up">
          Conditions Générales d'Utilisation
        </h1>

        <Card className="max-w-4xl mx-auto p-8 animate-fade-up">
          <div className="prose prose-blue max-w-none">
            <h2>1. Acceptation des conditions</h2>
            <p>
              En utilisant notre service de comparaison d'assurances, vous acceptez
              les présentes conditions générales d'utilisation. Si vous n'acceptez
              pas ces conditions, veuillez ne pas utiliser notre service.
            </p>

            <h2>2. Description du service</h2>
            <p>
              Notre plateforme permet de comparer différentes offres d'assurance
              habitation. Nous nous efforçons de fournir des informations précises
              et à jour, mais ne pouvons garantir l'exactitude absolue des
              informations présentées.
            </p>

            <h2>3. Utilisation du service</h2>
            <p>
              Vous vous engagez à :
            </p>
            <ul>
              <li>Fournir des informations exactes et complètes</li>
              <li>Ne pas utiliser le service à des fins frauduleuses</li>
              <li>Respecter les droits de propriété intellectuelle</li>
            </ul>

            <h2>4. Responsabilité</h2>
            <p>
              Nous ne pouvons être tenus responsables :
            </p>
            <ul>
              <li>Des erreurs ou omissions dans les informations fournies</li>
              <li>Des dommages directs ou indirects liés à l'utilisation du service</li>
              <li>Des problèmes techniques ou interruptions du service</li>
            </ul>

            <h2>5. Propriété intellectuelle</h2>
            <p>
              Tous les contenus présents sur notre plateforme sont protégés par
              le droit de la propriété intellectuelle. Toute reproduction non
              autorisée est interdite.
            </p>

            <h2>6. Modification des conditions</h2>
            <p>
              Nous nous réservons le droit de modifier ces conditions à tout
              moment. Les modifications prennent effet dès leur publication sur
              le site.
            </p>

            <h2>7. Loi applicable</h2>
            <p>
              Les présentes conditions sont régies par le droit français. Tout
              litige relève de la compétence exclusive des tribunaux français.
            </p>

            <h2>8. Contact</h2>
            <p>
              Pour toute question concernant ces conditions, veuillez nous
              contacter à legal@assurcompare.fr
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Terms;