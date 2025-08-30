import { Card, CardContent } from '@/components/ui/card';
import { Waves, Leaf, AlertTriangle, TrendingUp } from 'lucide-react';

const ImpactSection = () => {
  const impacts = [
    {
      icon: <Waves className="w-8 h-8 text-primary" />,
      title: "Carbon Storage",
      description: "Mangroves store 3-4x more carbon per hectare than tropical rainforests",
      stat: "10.15 billion tons",
      label: "Global carbon stored"
    },
    {
      icon: <Leaf className="w-8 h-8 text-secondary" />,
      title: "Biodiversity Haven",
      description: "Home to thousands of species and critical nursery habitats",
      stat: "80%",
      label: "Of fish depend on mangroves"
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-accent" />,
      title: "Crisis Point",
      description: "Rapid deforestation threatens these critical ecosystems",
      stat: "35%",
      label: "Lost in recent decades"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-success" />,
      title: "Economic Value",
      description: "Provides billions in ecosystem services and coastal protection",
      stat: "$1.6 billion",
      label: "Annual ecosystem value"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            The Critical Importance of
            <span className="block text-primary">Mangrove Conservation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mangrove forests are among Earth's most productive ecosystems, yet they're disappearing faster 
            than tropical rainforests. Your participation in BlueCarbonWatch helps protect these vital habitats.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, index) => (
            <Card key={index} className="bg-gradient-card shadow-card hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {impact.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{impact.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{impact.description}</p>
                <div className="border-t border-border pt-4">
                  <p className="text-2xl font-bold text-primary mb-1">{impact.stat}</p>
                  <p className="text-xs text-muted-foreground">{impact.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-ocean rounded-3xl p-8 md:p-12 text-center text-white shadow-ocean">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Every Report Counts
          </h3>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            When you report illegal activities through BlueCarbonWatch, you're not just earning BCE credits - 
            you're actively participating in the protection of these irreplaceable ecosystems.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div>
              <p className="text-3xl font-bold text-accent">1,247</p>
              <p className="text-white/80">Reports Verified</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-secondary">89</p>
              <p className="text-white/80">Illegal Activities Stopped</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-warning">456 ha</p>
              <p className="text-white/80">Mangroves Protected</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;