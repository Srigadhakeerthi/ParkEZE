
import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Car, LogOut, Settings, User } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const Layout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-blue-600">
            <Car className="h-8 w-8" />
            <span>Park Pulse</span>
          </Link> */}
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold" style={{ color: '#9900E6' }}>
  <Car className="h-8 w-8" />
  <span>ParkEZE</span>
</Link>

          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors">
              Dashboard
            </Link>
            <Link to="/booking" className="text-gray-700 hover:text-blue-600 transition-colors">
              Book Slot
            </Link>
            {user?.role === 'admin' && (
              <Link to="/admin" className="text-gray-700 hover:text-blue-600 transition-colors">
                Admin Panel
              </Link>
            )}
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2 text-gray-700">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">{user.name}</span>
                </div>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className="space-x-2">
                <Link to="/login">
                  <Button variant="outline" size="sm">Login</Button>
                </Link>
                <Link to="/register">
                  <Button size="sm">Register</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="bg-white border-t mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-gray-600">
          <p>&copy; 2025 ParkEZE: Smart Parking System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
