import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Users, 
  Award,
  TrendingUp,
  MapPin,
  Camera
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: "Active Reports",
      value: "127",
      change: "+12",
      changeType: "increase",
      icon: <Camera className="w-5 h-5" />
    },
    {
      title: "Urgent Alerts",
      value: "8",
      change: "-3",
      changeType: "decrease",
      icon: <AlertTriangle className="w-5 h-5" />
    },
    {
      title: "BCE Credits",
      value: "2,847",
      change: "+156",
      changeType: "increase",
      icon: <Award className="w-5 h-5" />
    },
    {
      title: "Areas Protected",
      value: "456 ha",
      change: "+23 ha",
      changeType: "increase",
      icon: <MapPin className="w-5 h-5" />
    }
  ];

  const recentReports = [
    {
      id: 1,
      title: "Illegal Logging in Sector 7",
      location: "Sundarbans Delta",
      status: "Under Review",
      severity: "High",
      time: "2 hours ago",
      credits: 250
    },
    {
      id: 2,
      title: "Oil Spill Detected",
      location: "Florida Everglades",
      status: "Verified",
      severity: "Critical",
      time: "4 hours ago",
      credits: 500
    },
    {
      id: 3,
      title: "Waste Dumping",
      location: "Amazon Delta",
      status: "Pending Authority",
      severity: "Medium",
      time: "6 hours ago",
      credits: 150
    }
  ];

  const actionItems = [
    {
      id: 1,
      title: "Cleanup Operation - Sector 12",
      progress: 75,
      deadline: "2 days",
      team: "Environmental Response Unit"
    },
    {
      id: 2,
      title: "Restoration Project - Zone A",
      progress: 45,
      deadline: "1 week",
      team: "Conservation Team"
    },
    {
      id: 3,
      title: "Investigation - Illegal Cutting",
      progress: 90,
      deadline: "Today",
      team: "Forest Authority"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Monitor conservation efforts and track your environmental impact</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className={`text-sm flex items-center ${
                      stat.changeType === 'increase' ? 'text-success' : 'text-accent'
                    }`}>
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {stat.change}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-ocean rounded-lg flex items-center justify-center text-primary-foreground">
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recent Reports */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Recent Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentReports.map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{report.title}</h4>
                      <p className="text-sm text-muted-foreground">{report.location}</p>
                      <p className="text-xs text-muted-foreground">{report.time}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge 
                        variant={
                          report.status === 'Verified' ? 'default' :
                          report.status === 'Under Review' ? 'secondary' : 'outline'
                        }
                      >
                        {report.status}
                      </Badge>
                      <Badge 
                        variant={
                          report.severity === 'Critical' ? 'destructive' :
                          report.severity === 'High' ? 'secondary' : 'outline'
                        }
                      >
                        {report.severity}
                      </Badge>
                      <span className="text-sm font-semibold text-success">+{report.credits} BCE</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                View All Reports
              </Button>
            </CardContent>
          </Card>

          {/* Action Items */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Ongoing Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {actionItems.map((action) => (
                  <div key={action.id} className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">{action.title}</h4>
                      <span className="text-sm text-muted-foreground">{action.deadline}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{action.team}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{action.progress}%</span>
                      </div>
                      <Progress value={action.progress} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 bg-gradient-forest shadow-forest">
                <Users className="w-4 h-4 mr-2" />
                View Team Actions
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* BCE Credits Overview */}
        <Card className="mt-6 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              BCE Credits Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-ocean rounded-xl text-white">
                <h3 className="text-lg font-semibold mb-2">Total Earned</h3>
                <p className="text-3xl font-bold">2,847</p>
                <p className="text-white/80 text-sm">BCE Credits</p>
              </div>
              <div className="text-center p-6 bg-gradient-forest rounded-xl text-white">
                <h3 className="text-lg font-semibold mb-2">This Month</h3>
                <p className="text-3xl font-bold">456</p>
                <p className="text-white/80 text-sm">New Credits</p>
              </div>
              <div className="text-center p-6 bg-gradient-card rounded-xl border">
                <h3 className="text-lg font-semibold mb-2 text-foreground">Available</h3>
                <p className="text-3xl font-bold text-foreground">1,923</p>
                <p className="text-muted-foreground text-sm">For Redemption</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;