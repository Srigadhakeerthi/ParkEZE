
import QRCode from 'qrcode';

export const generateQRCode = async (data: string): Promise<string> => {
  try {
    const qrCodeDataUrl = await QRCode.toDataURL(data, {
      width: 256,
      margin: 2,
      color: {
        dark: '#4C1D95', // Purple
        light: '#FFFFFF'
      },
      errorCorrectionLevel: 'M'
    });
    return qrCodeDataUrl;
  } catch (error) {
    console.error('Error generating QR code:', error);
    return '';
  }
};

export const generateBookingQRCode = (bookingId: string) => {
  const bookingData = JSON.stringify({
    bookingId,
    entryCode: `ENTRY_${bookingId}_${Date.now()}`,
    exitCode: `EXIT_${bookingId}_${Date.now()}`,
    timestamp: Date.now(),
    location: 'Smart Pulse Parking',
    type: 'PARKING_BOOKING'
  });
  
  return bookingData;
};

export const generateEntryExitCodes = (bookingId: string) => {
  const entryData = JSON.stringify({
    type: 'ENTRY',
    bookingId,
    timestamp: Date.now(),
    location: 'Smart Pulse Parking'
  });
  
  const exitData = JSON.stringify({
    type: 'EXIT',
    bookingId,
    timestamp: Date.now(),
    location: 'Smart Pulse Parking'
  });
  
  return { entryData, exitData };
};
