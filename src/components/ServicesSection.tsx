import { useState } from 'react';
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
import { cn } from '@/lib/utils';

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

const ServiceCard = ({ service }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className={cn(
        "bg-white rounded-2xl shadow-lg transition-all duration-300",
        "hover:shadow-xl",
        isExpanded ? "col-span-full" : ""
      )}
    >
      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/5 rounded-xl text-primary">
              {service.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-zinc-900">{service.title}</h3>
              <p className="text-sm text-zinc-500">{service.category}</p>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-zinc-400 hover:text-primary transition-colors"
            aria-label={isExpanded ? "Show less" : "Show more"}
          >
            <ChevronRight
              className={cn(
                "w-6 h-6 transform transition-transform duration-300",
                isExpanded ? "rotate-90" : ""
              )}
            />
          </button>
        </div>

        <p className="text-zinc-600 mb-6">{service.description}</p>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-3 bg-zinc-50 rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">
              {service.metrics.clients}+
            </div>
            <div className="text-sm text-zinc-600">Clients</div>
          </div>
          <div className="text-center p-3 bg-zinc-50 rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">
              {service.metrics.projects}+
            </div>
            <div className="text-sm text-zinc-600">Projects</div>
          </div>
          <div className="text-center p-3 bg-zinc-50 rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">
              {service.metrics.satisfaction}%
            </div>
            <div className="text-sm text-zinc-600">Satisfaction</div>
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-zinc-100">
                <div>
                  <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span className="text-zinc-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {service.caseStudy && (
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Case Study</h4>
                    <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-zinc-100">
                      <img
                        src={service.caseStudy.image}
                        alt={service.caseStudy.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h5 className="font-medium mb-2">{service.caseStudy.title}</h5>
                    <p className="text-zinc-600 text-sm mb-4">
                      {service.caseStudy.description}
                    </p>
                    <ul className="space-y-2">
                      {service.caseStudy.results.map((result, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <ArrowRight className="w-4 h-4 text-primary" />
                          <span className="text-zinc-700">{result}</span>
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

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-zinc-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
      <div className="absolute top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-4 mx-auto relative">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/5 text-primary text-sm font-medium">
              Our Services
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-zinc-600">
              We offer a wide range of digital services to help your business grow and succeed in the digital age.
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

        <ScrollReveal>
          <div className="text-center mt-16">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;
