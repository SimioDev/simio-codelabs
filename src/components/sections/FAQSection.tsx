import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  lang?: 'es' | 'en';
}

export default function FAQSection({ faqs, lang = 'es' }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const title = lang === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions';
  const subtitle = lang === 'es'
    ? 'Respuestas directas a las preguntas más comunes'
    : 'Straight answers to common questions';

  return (
    <section className="relative px-4 sm:px-6 py-16 md:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4">
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-card overflow-hidden transition-all hover:border-primary/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-muted/50"
              >
                <span className="text-lg font-bold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  strokeWidth={2}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
