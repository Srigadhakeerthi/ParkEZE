
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Lock, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

interface PinVerificationProps {
  onVerified: () => void;
  onCancel: () => void;
  bookingAmount: number;
}

const PinVerification: React.FC<PinVerificationProps> = ({
  onVerified,
  onCancel,
  bookingAmount
}) => {
  const { user, verifyPin } = useAuth();
  const [pin, setPin] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [error, setError] = useState('');

  const handleVerify = () => {
    if (verifyPin(pin)) {
      onVerified();
    } else {
      setError('Invalid PIN. Please try again.');
      setPin('');
    }
  };

  const handlePinChange = (value: string) => {
    if (value.length <= 4 && /^\d*$/.test(value)) {
      setPin(value);
      setError('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-md mx-4 border-cream-200">
        <CardHeader className="text-center bg-gradient-to-r from-cream-50 to-midnight-50">
          <div className="flex justify-center mb-2">
            <Lock className="h-8 w-8 text-midnight-600" />
          </div>
          <CardTitle className="text-midnight-900">Enter PIN to Confirm</CardTitle>
          <p className="text-sm text-midnight-700">
            Amount to be debited: ₹{bookingAmount}
          </p>
          <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
            Wallet Balance: ₹{user?.walletBalance}
          </Badge>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="relative">
              <Input
                type={showPin ? 'text' : 'password'}
                placeholder="Enter 4-digit PIN"
                value={pin}
                onChange={(e) => handlePinChange(e.target.value)}
                className="text-center text-lg tracking-widest border-cream-200"
                maxLength={4}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={() => setShowPin(!showPin)}
              >
                {showPin ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
            {error && (
              <p className="text-red-600 text-sm mt-2 text-center">{error}</p>
            )}
          </div>

          <div className="flex gap-4">
            <Button variant="outline" onClick={onCancel} className="flex-1">
              Cancel
            </Button>
            <Button 
              onClick={handleVerify} 
              disabled={pin.length !== 4}
              className="flex-1 midnight-gradient hover:opacity-90"
            >
              Verify PIN
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PinVerification;
