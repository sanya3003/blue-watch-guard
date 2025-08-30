import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { 
  MapPin, 
  Layers, 
  Search, 
  Filter,
  BarChart3,
  Download
} from 'lucide-react';

const Map = () => {
  const [threshold, setThreshold] = useState([2]);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const mangroveZones = [
    { id: 1, name: "Sundarbans Delta", area: "6,017 km²", status: "Protected", threats: 2 },
    { id: 2, name: "Florida Everglades", area: "2,357 km²", status: "Monitored", threats: 5 },
    { id: 3, name: "Amazon Delta", area: "1,200 km²", status: "At Risk", threats: 8 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">GeoMap Dashboard</h1>
          <p className="text-muted-foreground">Monitor mangrove zones worldwide with real-time data and AI analysis</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Control Panel */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Map Controls
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Search Location</label>
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Enter coordinates or location" className="pl-10" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Region Threshold: {threshold[0]} hectares
                  </label>
                  <Slider
                    value={threshold}
                    onValueChange={setThreshold}
                    max={10}
                    min={0.5}
                    step={0.5}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Map Layers</label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Mangrove Zones</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Report Locations</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Threat Zones</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Protected Areas</span>
                    </label>
                  </div>
                </div>

                <Button className="w-full bg-gradient-ocean shadow-ocean">
                  <Download className="w-4 h-4 mr-2" />
                  Export Data
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Zone Statistics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Total Zones</span>
                    <span className="font-semibold">147</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">At Risk</span>
                    <span className="font-semibold text-accent">23</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Protected</span>
                    <span className="font-semibold text-success">89</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Under Monitor</span>
                    <span className="font-semibold text-warning">35</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Area */}
          <div className="lg:col-span-3">
            <Card className="shadow-card h-[600px]">
              <CardContent className="p-0 h-full">
                <div className="h-full bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder map - will be replaced with actual Mapbox integration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                  <div className="text-center z-10">
                    <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Map</h3>
                    <p className="text-muted-foreground">Mapbox integration will be implemented here</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Features: GeoTIFF layers, polygon visualization, region segmentation
                    </p>
                  </div>
                  
                  {/* Sample zone markers */}
                  <div className="absolute top-20 left-20 w-4 h-4 bg-success rounded-full border-2 border-white shadow-lg animate-pulse" />
                  <div className="absolute top-32 right-24 w-4 h-4 bg-accent rounded-full border-2 border-white shadow-lg animate-pulse" />
                  <div className="absolute bottom-24 left-32 w-4 h-4 bg-warning rounded-full border-2 border-white shadow-lg animate-pulse" />
                </div>
              </CardContent>
            </Card>

            {/* Zone List */}
            <div className="mt-6 space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Mangrove Zones</h3>
              {mangroveZones.map((zone) => (
                <Card key={zone.id} className="shadow-card hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() => setSelectedRegion(selectedRegion === zone.name ? null : zone.name)}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">{zone.name}</h4>
                        <p className="text-sm text-muted-foreground">Area: {zone.area}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant={zone.status === 'Protected' ? 'default' : 
                                  zone.status === 'At Risk' ? 'destructive' : 'secondary'}
                        >
                          {zone.status}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {zone.threats} threats
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;