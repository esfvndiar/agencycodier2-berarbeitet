import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import { 
  Code2, 
  Palette, 
  BarChart3, 
  CheckCircle2,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  metrics: {
    clients: number;
    projects: number;
    satisfaction: number;
  };
  features: string[];
  caseStudy?: {
    title: string;
    description: string;
    image: string;
    results: string[];
  };
}

const SERVICES: Service[] = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies and best practices.",
    icon: <Code2 className="w-8 h-8" />,
    category: "Development",
    metrics: {
      clients: 150,
      projects: 200,
      satisfaction: 98
    },
    features: [
      "Responsive Design",
      "Performance Optimization",
      "SEO Best Practices",
      "Cross-browser Compatibility"
    ],
    caseStudy: {
      title: "E-commerce Platform Redesign",
      description: "Revolutionized online shopping experience with improved performance and user interface.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2088&q=80",
      results: [
        "40% increase in conversion rate",
        "60% faster page load times",
        "25% higher customer satisfaction"
      ]
    }
  },
  {
    title: "UI/UX Design",
    description: "User-centered design solutions that create engaging and intuitive digital experiences.",
    icon: <Palette className="w-8 h-8" />,
    category: "Design",
    metrics: {
      clients: 120,
      projects: 180,
      satisfaction: 99
    },
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design Systems"
    ],
    caseStudy: {
      title: "Mobile App Redesign",
      description: "Transformed user experience with intuitive navigation and modern design.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      results: [
        "45% increase in user engagement",
        "30% reduction in bounce rate",
        "50% faster task completion"
      ]
    }
  },
  {
    title: "Digital Marketing",
    description: "Strategic marketing solutions that drive growth and increase brand visibility.",
    icon: <BarChart3 className="w-8 h-8" />,
    category: "Marketing",
    metrics: {
      clients: 200,
      projects: 300,
      satisfaction: 97
    },
    features: [
      "SEO & Content Strategy",
      "Social Media Marketing",
      "Email Campaigns",
      "Analytics & Reporting"
    ],
    caseStudy: {
      title: "Brand Growth Campaign",
      description: "Comprehensive digital marketing strategy that doubled online presence.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
      results: [
        "100% increase in organic traffic",
        "150% growth in social media followers",
        "75% higher lead generation"
      ]
    }
  }
];

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isExpanded && cardRef.current) {
      cardRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, [isExpanded]);

  return (
    <motion.div
      ref={cardRef}
      layout
      className={`bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 ${
        isExpanded ? 'col-span-full' : ''
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-primary/10 rounded-xl">
            {service.icon}
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary hover:text-primary/80 transition-colors"
            aria-label={isExpanded ? 'Show less' : 'Show more'}
          >
            <ChevronRight
              className={`w-6 h-6 transform transition-transform duration-300 ${
                isExpanded ? 'rotate-90' : ''
              }`}
            />
          </button>
        </div>

        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-muted-foreground mb-4">{service.description}</p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4">Success Metrics</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          {service.metrics.clients}+
                        </div>
                        <div className="text-sm text-muted-foreground">Clients</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          {service.metrics.projects}+
                        </div>
                        <div className="text-sm text-muted-foreground">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          {service.metrics.satisfaction}%
                        </div>
                        <div className="text-sm text-muted-foreground">Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>

                {service.caseStudy && (
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Case Study</h4>
                    <div className="aspect-video rounded-lg overflow-hidden mb-4">
                      <img
                        src={service.caseStudy.image}
                        alt={service.caseStudy.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="font-medium mb-2">{service.caseStudy.title}</h5>
                    <p className="text-muted-foreground mb-4">
                      {service.caseStudy.description}
                    </p>
                    <ul className="space-y-2">
                      {service.caseStudy.results.map((result, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <ArrowRight className="w-4 h-4 text-primary" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-zinc-50">
      <div className="container px-4 mx-auto">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground">
              We offer comprehensive digital solutions tailored to your business needs.
              From web development to digital marketing, we've got you covered.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ScrollReveal key={service.title}>
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
