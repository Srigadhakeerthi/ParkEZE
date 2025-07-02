import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Car, Users, CreditCard, Settings, Plus, Edit, Trash2, TrendingUp } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const AdminPanel = () => {
  const [slots, setSlots] = useState([
    { id: '1', number: 'A01', type: 'regular', price: 50, available: true, location: 'Ground Floor' },
    { id: '2', number: 'A02', type: 'regular', price: 50, available: false, location: 'Ground Floor' },
    { id: '3', number: 'A03', type: 'premium', price: 80, available: true, location: 'Ground Floor' },
    { id: '4', number: 'B01', type: 'regular', price: 50, available: true, location: 'First Floor' },
    { id: '5', number: 'B02', type: 'disabled', price: 40, available: true, location: 'First Floor' },
  ]);

  const [newSlot, setNewSlot] = useState({
    number: '',
    type: 'regular',
    price: 50,
    location: 'Ground Floor'
  });

  const adminStats = [
    { title: 'Total Slots', value: '50', icon: Car, color: 'text-blue-600' },
    { title: 'Occupied Slots', value: '32', icon: Car, color: 'text-red-600' },
    { title: 'Available Slots', value: '18', icon: Car, color: 'text-green-600' },
    { title: 'Today\'s Revenue', value: '₹12,450', icon: CreditCard, color: 'text-purple-600' },
    { title: 'Total Users', value: '156', icon: Users, color: 'text-orange-600' },
    { title: 'Monthly Revenue', value: '₹3,45,600', icon: TrendingUp, color: 'text-indigo-600' }
  ];

  const recentBookings = [
    { id: 'SP123456', user: 'John Doe', slot: 'A01', time: '2 hours ago', amount: '₹100', status: 'active' },
    { id: 'SP123457', user: 'Jane Smith', slot: 'B02', time: '3 hours ago', amount: '₹150', status: 'completed' },
    { id: 'SP123458', user: 'Mike Johnson', slot: 'C01', time: '5 hours ago', amount: '₹200', status: 'active' },
  ];

  const handleAddSlot = (e: React.FormEvent) => {
    e.preventDefault();
    const id = (slots.length + 1).toString();
    const slot = { ...newSlot, id, available: true };
    setSlots([...slots, slot]);
    setNewSlot({ number: '', type: 'regular', price: 50, location: 'Ground Floor' });
    toast({
      title: "Slot Added",
      description: `Parking slot ${newSlot.number} has been added successfully.`,
    });
  };

  const toggleSlotAvailability = (slotId: string) => {
    setSlots(slots.map(slot => 
      slot.id === slotId ? { ...slot, available: !slot.available } : slot
    ));
    toast({
      title: "Slot Updated",
      description: "Slot availability has been updated.",
    });
  };

  const deleteSlot = (slotId: string) => {
    setSlots(slots.filter(slot => slot.id !== slotId));
    toast({
      title: "Slot Deleted",
      description: "Parking slot has been removed.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
        <p className="text-gray-600 mt-2">Manage your parking system</p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {adminStats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="slots" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="slots">Slot Management</TabsTrigger>
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="slots" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Add New Slot */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Add New Slot
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddSlot} className="space-y-4">
                  <div>
                    <Label htmlFor="slotNumber">Slot Number</Label>
                    <Input
                      id="slotNumber"
                      value={newSlot.number}
                      onChange={(e) => setNewSlot({...newSlot, number: e.target.value})}
                      placeholder="e.g., A01"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="slotType">Slot Type</Label>
                    <select
                      id="slotType"
                      value={newSlot.type}
                      onChange={(e) => setNewSlot({...newSlot, type: e.target.value as any})}
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="regular">Regular</option>
                      <option value="premium">Premium</option>
                      <option value="disabled">Disabled</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="price">Price per Hour</Label>
                    <Input
                      id="price"
                      type="number"
                      value={newSlot.price}
                      onChange={(e) => setNewSlot({...newSlot, price: parseInt(e.target.value)})}
                      min="1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <select
                      id="location"
                      value={newSlot.location}
                      onChange={(e) => setNewSlot({...newSlot, location: e.target.value})}
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="Ground Floor">Ground Floor</option>
                      <option value="First Floor">First Floor</option>
                      <option value="Second Floor">Second Floor</option>
                    </select>
                  </div>
                  <Button type="submit" className="w-full">Add Slot</Button>
                </form>
              </CardContent>
            </Card>

            {/* Existing Slots */}
            <Card>
              <CardHeader>
                <CardTitle>Existing Slots</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {slots.map((slot) => (
                    <div key={slot.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-semibold">{slot.number}</p>
                        <p className="text-sm text-gray-600">{slot.location}</p>
                        <p className="text-sm">₹{slot.price}/hr</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={slot.available ? "default" : "destructive"}>
                          {slot.available ? 'Available' : 'Occupied'}
                        </Badge>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => toggleSlotAvailability(slot.id)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteSlot(slot.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="bookings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Bookings</CardTitle>
              <CardDescription>Latest parking slot bookings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentBookings.map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-semibold">Booking #{booking.id}</p>
                      <p className="text-sm text-gray-600">{booking.user} • Slot {booking.slot}</p>
                      <p className="text-sm text-gray-500">{booking.time}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{booking.amount}</p>
                      <Badge 
                        variant={booking.status === 'active' ? 'default' : 'secondary'}
                      >
                        {booking.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Manage registered users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Users className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-500">User management features coming soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                System Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="parkingName">Parking Facility Name</Label>
                  <Input id="parkingName" defaultValue="Smart Pulse Parking" />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" defaultValue="123 Main Street, City, State" />
                </div>
                <div>
                  <Label htmlFor="phone">Contact Phone</Label>
                  <Input id="phone" defaultValue="+91 9177143069" />
                </div>
                <div>
                  <Label htmlFor="email">Contact Email</Label>
                  <Input id="email" defaultValue="support@parkpulse.com" />
                </div>
                <Button>Save Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminPanel;
