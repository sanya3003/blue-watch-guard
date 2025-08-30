import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Camera, 
  Bot, 
  Award, 
  MessageSquare, 
  BarChart3,
  Smartphone,
  Shield
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "GeoMap Dashboard",
      description: "Interactive maps showing mangrove zones with real-time data and region segmentation",
      badge: "Core Feature"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Smart Reporting",
      description: "Upload photos with automatic metadata extraction and GPS coordinates",
      badge: "AI Powered"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI Validation",
      description: "Advanced models validate reports before sending to authorities",
      badge: "Premium"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "BCE Credits",
      description: "Earn Blue Carbon Ecosystem credits for verified reports and conservation actions",
      badge: "Rewards"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Telegram Integration",
      description: "Submit reports directly from your phone via our Telegram bot",
      badge: "Mobile First"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics Dashboard",
      description: "Track impact, view statistics, and monitor ongoing conservation efforts",
      badge: "Insights"
    }
  ];

  const premiumFeatures = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Advanced AI Scoring",
      description: "Enhanced severity assessment with RandomForest models"
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "IoT & Drone Integration",
      description: "Real-time sensor data and drone surveillance"
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Detailed Analytics",
      description: "AI decision logs and action planning tools"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Powerful Features for
            <span className="block text-primary">Environmental Protection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            BlueCarbonWatch combines cutting-edge technology with community action to create 
            the most effective mangrove monitoring platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card shadow-card hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-12 h-12 bg-gradient-ocean rounded-lg flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Premium Features */}
        <div className="bg-gradient-forest rounded-3xl p-8 md:p-12 text-center text-white shadow-forest">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Premium Plan Features
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Unlock advanced AI capabilities, IoT integrations, and detailed analytics 
            for professional environmental monitoring.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {premiumFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-white/80 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <Button size="lg" variant="secondary" className="bg-white/90 text-primary hover:bg-white">
            Upgrade to Premium
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;