import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Car, Clock, MapPin, CreditCard, Calendar, TrendingUp } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { Link } from 'react-router-dom';
import BookingHistory from './BookingHistory';
import ExtendBooking from './ExtendBooking';
import NearbyParking from './NearbyParking';
import PaymentHistory from './PaymentHistory';

const Dashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'extend' | 'nearby' | 'payments'>('overview');

  const stats = [
    {
      title: 'Total Bookings',
      value: '12',
      icon: Calendar,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Active Bookings',
      value: '2',
      icon: Car,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Total Spent',
      value: '₹2,450',
      icon: CreditCard,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      title: 'Hours Parked',
      value: '48',
      icon: Clock,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      action: 'Booked parking slot A03',
      location: 'Ground Floor',
      time: '2 hours ago',
      status: 'active'
    },
    {
      id: 2,
      action: 'Completed parking at B01',
      location: 'First Floor',
      time: '1 day ago',
      status: 'completed'
    },
    {
      id: 3,
      action: 'Payment successful',
      location: 'Slot C02',
      time: '2 days ago',
      status: 'completed'
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'extend':
        return <ExtendBooking />;
      case 'nearby':
        return <NearbyParking />;
      case 'payments':
        return <PaymentHistory />;
      default:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-purple-200">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-yellow-50">
                <CardTitle className="flex items-center gap-2 text-purple-900">
                  <TrendingUp className="h-5 w-5" />
                  Recent Activity
                </CardTitle>
                <CardDescription className="text-purple-700">Your latest parking activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between p-3 border border-purple-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <Car className="h-5 w-5 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-purple-900">{activity.action}</p>
                          <p className="text-sm text-purple-600">{activity.location}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant="outline" 
                          className={activity.status === 'active' ? 'bg-green-100 text-green-800 border-green-300' : 'bg-blue-100 text-blue-800 border-blue-300'}
                        >
                          {activity.status}
                        </Badge>
                        <p className="text-xs text-purple-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-yellow-50">
                <CardTitle className="text-purple-900">Quick Actions</CardTitle>
                <CardDescription className="text-purple-700">Common tasks and shortcuts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link to="/booking">
                    <Button variant="outline" className="w-full justify-start border-purple-200 text-purple-700 hover:bg-purple-50">
                      <Car className="h-4 w-4 mr-2" />
                      Book New Parking Slot
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-purple-200 text-purple-700 hover:bg-purple-50"
                    onClick={() => setActiveTab('nearby')}
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Find Nearby Parking
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-purple-200 text-purple-700 hover:bg-purple-50"
                    onClick={() => setActiveTab('extend')}
                  >
                    <Clock className="h-4 w-4 mr-2" />
                    Extend Current Booking
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-purple-200 text-purple-700 hover:bg-purple-50"
                    onClick={() => setActiveTab('payments')}
                  >
                    <CreditCard className="h-4 w-4 mr-2" />
                    Payment History
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      <div className="royal-gradient p-6 rounded-lg text-white shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, {user?.name}!</h1>
            <p className="mt-2 opacity-90">Here's your parking activity overview</p>
          </div>
          <Link to="/booking">
            {/* <Button className="gold-accent text-purple-900 hover:opacity-90 font-semibold">
              <Car className="h-4 w-4 mr-2" />
              Book New Slot
            </Button> */}
            <Button className="gold-accent text-white hover:opacity-90 font-semibold">
  <Car className="h-4 w-4 mr-2" />
  Book New Slot
</Button>

          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-purple-200 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-700">{stat.title}</p>
                  <p className="text-2xl font-bold text-purple-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex gap-2 mb-4">
        <Button
          variant={activeTab === 'overview' ? 'default' : 'outline'}
          onClick={() => setActiveTab('overview')}
          className={activeTab === 'overview' ? 'royal-gradient' : 'border-purple-200 text-purple-700 hover:bg-purple-50'}
        >
          Overview
        </Button>
        <Button
          variant={activeTab === 'extend' ? 'default' : 'outline'}
          onClick={() => setActiveTab('extend')}
          className={activeTab === 'extend' ? 'royal-gradient' : 'border-purple-200 text-purple-700 hover:bg-purple-50'}
        >
          Extend Booking
        </Button>
        <Button
          variant={activeTab === 'nearby' ? 'default' : 'outline'}
          onClick={() => setActiveTab('nearby')}
          className={activeTab === 'nearby' ? 'royal-gradient' : 'border-purple-200 text-purple-700 hover:bg-purple-50'}
        >
          Nearby Parking
        </Button>
        <Button
          variant={activeTab === 'payments' ? 'default' : 'outline'}
          onClick={() => setActiveTab('payments')}
          className={activeTab === 'payments' ? 'royal-gradient' : 'border-purple-200 text-purple-700 hover:bg-purple-50'}
        >
          Payment History
        </Button>
      </div>

      {renderTabContent()}

      {activeTab === 'overview' && <BookingHistory />}
    </div>
  );
};

export default Dashboard;
