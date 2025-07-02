import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Car, Clock, CreditCard, Shield, MapPin, Smartphone } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: Car,
      title: 'Smart Slot Booking',
      description: 'Reserve your parking spot in advance with our intelligent booking system.'
    },
    {
      icon: Clock,
      title: 'Real-time Availability',
      description: 'Check live parking slot availability and save time finding the perfect spot.'
    },
    {
      icon: CreditCard,
      title: 'Secure Payments',
      description: 'Safe and secure payment processing with multiple payment options.'
    },
    {
      icon: Shield,
      title: 'Guaranteed Security',
      description: 'Your vehicle and data are protected with our advanced security measures.'
    },
    {
      icon: MapPin,
      title: 'Multiple Locations',
      description: 'Find parking spots across various locations in the city.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: 'Access our platform from any device, anywhere, anytime.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-pink-500 text-white">
      <div className="relative overflow-hidden">
         <div className="container mx-auto px-4 py-16 sm:py-24">
           <div className="text-center">
             <div className="flex justify-center mb-8">
               {/* <div className="bg-blue-100 p-4 rounded-full">
                { <Car className="h-16 w-16 text-blue-600" /> }
              </div> */}
              {/* <div className="bg-blue-100 p-10 rounded-full flex items-center justify-center">
  <img
    src="public/Car.jpg"
    alt="Car Icon"
    className="h-16 w-16 object-contain"
  />
</div> */}
<div className="bg-white p-10 rounded-full flex items-center justify-center">
  <img
    src="public/Car.jpg"
    alt="Car"
    className="h-20 w-20 object-contain"
  />
</div>

             </div>
             <h1 className="text-4xl sm:text-6xl  text-white mb-6">
  Smart Vehicle Parking System
  </h1>

             <p className="text-l  text-white mb-8 max-w-3xl mx-auto">
               Experience the future of parking with our intelligent slot management system. 
               Book, pay, and park with ease using parkEZE technology.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link to="/register">
                 {/* <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8">
                   Get Started
                 </Button> */}
                 <Button
  size="lg"
  className="bg-white text-black hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-600 hover:text-white px-8 border border-gray-300"
>
  Get Started
</Button>

               </Link>
               <Link to="/login">
                 {/* <Button variant="outline" size="lg" className="bg-white text-black hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-600 hover:text-white px-8 border border-gray-300">
                   Sign In
                 </Button> */}
                 <Button
  size="lg"
  className="bg-white text-black hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-600 hover:text-white px-8 border border-gray-300 focus:outline-none focus:ring-0 active:bg-white"
>
  Sign In
</Button>

               </Link>
             </div>
           </div>
         </div>
       </div>
      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose ParkEZE?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Our comprehensive parking management system offers everything you need for a seamless parking experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white text-purple-900">
              <CardHeader>
                <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-purple-700" />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white text-purple-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-700 mb-2">1000+</div>
              <div>Parking Slots</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-700 mb-2">50+</div>
              <div>Locations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-700 mb-2">10k+</div>
              <div>Happy Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-700 mb-2">99.9%</div>
              <div>Uptime</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-700 to-pink-500 rounded-2xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Parking Smart?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who have already revolutionized their parking experience.
          </p>
          <Link to="/register">
            <Button size="lg" variant="secondary" className="bg-white text-purple-700 hover:bg-purple-100 font-semibold px-8">
              Create Your Account
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;

