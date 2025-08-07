import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeInUp } from "@/lib/animations";
import type { CulturalElement } from "@shared/schema";

export function CulturalElementGrid() {
  const { data: culturalElements, isLoading } = useQuery<CulturalElement[]>({
    queryKey: ["/api/cultural"],
  });

  if (isLoading) {
    return <p className="text-center text-[#b38000]">Loading cultural elements...</p>;
  }

  if (!culturalElements || culturalElements.length === 0) {
    return <p className="text-center text-[#999999]">No cultural elements found.</p>;
  }

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="max-w-screen-xl mx-auto px-4"
    >
      <motion.h3
        className="text-2xl md:text-3xl font-serif font-bold text-[#b38000] mb-8 text-center"
        variants={fadeInUp}
      >
        Geometry & Choreography
      </motion.h3>

      <motion.div
        className="grid md:grid-cols-3 gap-6"
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {culturalElements.map((element) => (
          <motion.div key={element.id} variants={fadeInUp}>
            <Card className="bg-[#fdf6ec] border border-neutral-200 h-full text-[#3c2d1d] shadow-md">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge
                    variant="outline"
                    className="border-[#b38000] text-[#b38000] bg-[#f4ead9] capitalize text-xs"
                  >
                    {element.type}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-serif font-bold text-[#b38000]">
                  {element.name}
                </CardTitle>
                <CardDescription className="text-sm text-[#5f4330]/80">
                  {element.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-[#b38000] font-semibold mb-1">
                    Significance:
                  </p>
                  <p className="text-sm text-[#3c2d1d] leading-relaxed">
                    {element.significance}
                  </p>
                </div>
              </CardContent>

              {element.imageUrl && (
                <div className="w-full h-60 flex items-center justify-center overflow-hidden bg-[#f9f4e8]">
                  <img
                    src={element.imageUrl}
                    alt={element.name}
                    className="object-contain h-full"
                  />
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
