import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import type { TimelineEvent } from "@shared/schema";

export function TimelineSection() {
  const { data: timelineEvents, isLoading } = useQuery<TimelineEvent[]>({
    queryKey: ["/api/timeline"],
  });

  if (isLoading) {
    return (
      <div className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-temple-gold/20 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-700 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const groupedEvents = timelineEvents?.reduce((acc, event) => {
    if (!acc[event.era]) {
      acc[event.era] = [];
    }
    acc[event.era].push(event);
    return acc;
  }, {} as Record<string, TimelineEvent[]>);

  const eraConfig = {
    past: {
      title: "Past · Origins",
      description: "Sacred traditions and temple heritage",
      color: "deep-red",
    },
    present: {
      title: "Present · Revival",
      description: "Modern renaissance and global recognition",
      color: "temple-gold",
    },
    future: {
      title: "Future · Innovation",
      description: "Digital preservation and AI integration",
      color: "warm-orange",
    },
  };

  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold temple-gold mb-6"
            variants={fadeInUp}
          >
            Journey Through Time
          </motion.h2>
          <motion.p
            className="text-lg text-cream max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Discover the evolution of Bharatanatyam from ancient temple traditions to modern digital innovation
          </motion.p>
        </motion.div>

        {Object.entries(eraConfig).map(([era, config], eraIndex) => {
          const events = groupedEvents?.[era] || [];
          if (events.length === 0) return null;

          return (
            <motion.section
              key={era}
              id={era}
              className="mb-20"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div
                className="text-center mb-12"
                variants={fadeInUp}
              >
                <h3 className={`text-3xl md:text-4xl font-serif font-bold mb-4 ${config.color}`}>
                  {config.title}
                </h3>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  {config.description}
                </p>
              </motion.div>

              <div className="space-y-12">
                {events.map((event, index) => (
                  <motion.div
                    key={event.id}
                    className={`grid md:grid-cols-2 gap-12 items-center ${
                      index % 2 === 0 ? '' : 'md:grid-flow-col-dense'
                    }`}
                    variants={index % 2 === 0 ? slideInLeft : slideInRight}
                  >
                    <div className={index % 2 === 0 ? '' : 'md:col-start-2'}>
                      <Card className="bg-gray-800 border-temple-gold/20">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="outline" className="temple-gold border-temple-gold/50">
                              {event.year}
                            </Badge>
                            <Badge variant="secondary" className={`${config.color} bg-current/20`}>
                              {event.era}
                            </Badge>
                          </div>
                          <CardTitle className="text-2xl font-serif text-cream">
                            {event.title}
                          </CardTitle>
                          <CardDescription className="text-gray-300 text-base">
                            {event.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-sm text-gray-400 font-semibold">
                            Cultural Significance:
                          </p>
                          <p className="text-gray-300">{event.significance}</p>
                          
                          {event.innovations && event.innovations.length > 0 && (
                            <div>
                              <p className="text-sm text-gray-400 font-semibold mb-2">
                                Key Innovations:
                              </p>
                              <ul className="space-y-1">
                                {event.innovations.map((innovation, i) => (
                                  <li key={i} className="text-gray-300 text-sm flex items-start">
                                    <span className="temple-gold mr-2">•</span>
                                    {innovation}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {event.keyFigures && event.keyFigures.length > 0 && (
                            <div>
                              <p className="text-sm text-gray-400 font-semibold mb-2">
                                Key Figures:
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {event.keyFigures.map((figure, i) => (
                                  <Badge key={i} variant="outline" className="text-xs">
                                    {figure}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className={index % 2 === 0 ? '' : 'md:col-start-1'}>
                      <motion.img
                        src={event.imageUrl || "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"}
                        alt={event.title}
                        className="rounded-xl shadow-2xl w-full h-64 md:h-80 object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          );
        })}
      </div>
    </div>
  );
}
