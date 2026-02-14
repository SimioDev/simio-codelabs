"use client";

interface Service {
  icon: any;
  title: string;
  description: string;
  technologies?: string[];
  metrics?: {
    before: string;
    beforeValue: string;
    after: string;
    afterValue: string;
  };
}

interface ServicesSectionProps {
  services: Service[];
}

export const ServicesSection = ({ services }: ServicesSectionProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <div
            key={index}
            className="group rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-xl"
          >
            <div className="mb-6">
              <Icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
            </div>

            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
              {service.title}
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {service.description}
            </p>

            {service.technologies && (
              <div className="flex flex-wrap gap-2 mb-6">
                {service.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {service.metrics && (
              <div className="flex gap-4 pt-6 border-t border-border">
                <div className="flex-1 rounded-2xl bg-muted p-4">
                  <div className="text-xs text-muted-foreground mb-1">
                    {service.metrics.before}
                  </div>
                  <div className="text-lg font-bold">
                    {service.metrics.beforeValue}
                  </div>
                </div>
                <div className="flex-1 rounded-2xl bg-primary/10 p-4">
                  <div className="text-xs text-primary mb-1">
                    {service.metrics.after}
                  </div>
                  <div className="text-lg font-bold text-primary">
                    {service.metrics.afterValue}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
