
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { QrCode, Clock, MapPin, Car, CheckCircle } from 'lucide-react';
import { generateQRCode, generateBookingQRCode } from '@/utils/qrCodeGenerator';

interface BookingConfirmationProps {
  booking: {
    id: string;
    slotNumber: string;
    location: string;
    complex?: string;
    date: string;
    time: string;
    duration: number;
    amount: number;
    entryCode: string;
    exitCode: string;
    userName?: string;
  };
  onClose: () => void;
}

const BookingConfirmation: React.FC<BookingConfirmationProps> = ({ booking, onClose }) => {
  const [bookingQR, setBookingQR] = useState<string>('');

  useEffect(() => {
    const generateQRCodes = async () => {
      const bookingData = generateBookingQRCode(booking.id);
      const qrCode = await generateQRCode(bookingData);
      setBookingQR(qrCode);
    };

    generateQRCodes();
  }, [booking.id]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto border-purple-200 shadow-2xl">
        <CardHeader className="text-center bg-gradient-to-r from-purple-50 to-yellow-50">
          <div className="flex justify-center mb-2">
            <CheckCircle className="h-12 w-12 text-green-500" />
          </div>
          <CardTitle className="text-green-600">Booking Confirmed!</CardTitle>
          <p className="text-purple-700">
            Hello {booking.userName || 'User'}, your parking slot has been reserved
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-purple-50 p-4 rounded-lg border border-green-200">
            <div className="text-center mb-4">
              <h3 className="font-semibold text-lg text-purple-900">Booking ID: {booking.id}</h3>
              <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                Confirmed
              </Badge>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-purple-900">Slot:</span>
                <p className="text-purple-700">{booking.slotNumber}</p>
              </div>
              <div>
                <span className="font-medium text-purple-900">Location:</span>
                <p className="text-purple-700">{booking.location}</p>
              </div>
              {booking.complex && (
                <div className="col-span-2">
                  <span className="font-medium text-purple-900">Complex:</span>
                  <p className="text-purple-700">{booking.complex}</p>
                </div>
              )}
              <div>
                <span className="font-medium text-purple-900">Date:</span>
                <p className="text-purple-700">{booking.date}</p>
              </div>
              <div>
                <span className="font-medium text-purple-900">Time:</span>
                <p className="text-purple-700">{booking.time} ({booking.duration}h)</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-yellow-50 p-6 rounded-lg border border-purple-200 text-center">
            <h4 className="font-semibold mb-4 text-purple-800">Your Parking QR Code</h4>
            <div className="w-64 h-64 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg border-2 border-purple-200 shadow-lg">
              {bookingQR ? (
                <img src={bookingQR} alt="Parking QR Code" className="w-full h-full object-contain rounded-lg" />
              ) : (
                <QrCode className="h-32 w-32 text-purple-600 animate-pulse" />
              )}
            </div>
            <p className="text-sm text-purple-600 font-medium mb-2">Scan this QR code for both entry and exit</p>
            <p className="text-xs font-mono text-purple-800 bg-white p-2 rounded border">
              Booking ID: {booking.id}
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-yellow-50 p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold mb-2 text-purple-900">Important Instructions:</h4>
            <ul className="text-sm space-y-1 list-disc list-inside text-purple-700">
              <li>Show this QR code at the parking entrance scanner</li>
              <li>Park your vehicle in slot {booking.slotNumber}</li>
              <li>Keep your vehicle locked and secure</li>
              <li>Show the same QR code at the exit gate scanner</li>
              <li>Additional charges apply for overstay beyond {booking.duration} hours</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold mb-2 text-purple-900">Contact Information:</h4>
            <p className="text-sm text-purple-700">For assistance: +91 9177143069</p>
            <p className="text-sm text-purple-700">Email: support@parkeze.com</p>
            <p className="text-sm text-purple-700">Available 24/7 for your convenience</p>
          </div>

          <Button onClick={onClose} className="w-full royal-gradient hover:opacity-90">
            Close & Continue
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingConfirmation;
