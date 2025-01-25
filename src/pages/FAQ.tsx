import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "Comment fonctionne la comparaison d'assurances ?",
      answer: "Notre service analyse les offres de nos partenaires assureurs en fonction de vos critères (surface, type de bien, etc.) pour vous proposer les meilleures offres adaptées à vos besoins."
    },
    {
      question: "Combien coûte votre service ?",
      answer: "Notre service de comparaison est totalement gratuit. Nous sommes rémunérés par nos partenaires assureurs lorsqu'un contrat est souscrit via notre plateforme."
    },
    {
      question: "Quels sont les délais pour obtenir une assurance ?",
      answer: "Une fois votre choix effectué, vous pouvez souscrire immédiatement en ligne. L'attestation d'assurance vous est envoyée par email sous 24h."
    },
    {
      question: "Puis-je modifier mon contrat après la souscription ?",
      answer: "Oui, vous pouvez modifier votre contrat à tout moment. Contactez directement votre assureur ou notre service client pour toute modification."
    },
    {
      question: "Comment résilier mon ancienne assurance ?",
      answer: "Vous pouvez résilier votre ancienne assurance à l'échéance annuelle avec un préavis de 2 mois, ou à tout moment après la première année (Loi Hamon)."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 animate-fade-up">
          Questions Fréquentes
        </h1>

        <div className="max-w-3xl mx-auto">
          <Card className="p-6 animate-fade-up">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          <div className="mt-12 text-center animate-fade-up">
            <p className="text-gray-600">
              Vous ne trouvez pas la réponse à votre question ?{" "}
              <a href="/contact" className="text-primary hover:underline">
                Contactez-nous
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;