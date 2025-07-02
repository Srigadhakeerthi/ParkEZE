
// Email notification service - Ready for backend integration
export interface EmailTemplate {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export interface BookingConfirmation {
  userEmail: string;
  userName: string;
  slotNumber: string;
  date: string;
  time: string;
  duration: number;
  amount: number;
  bookingId: string;
}

export const createBookingConfirmationEmail = (booking: BookingConfirmation): EmailTemplate => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Booking Confirmation - Smart Pulse</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #3b82f6, #6366f1); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
        .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
        .booking-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .detail-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e2e8f0; }
        .detail-row:last-child { border-bottom: none; }
        .total { font-weight: bold; font-size: 1.2em; color: #3b82f6; }
        .footer { text-align: center; margin-top: 30px; color: #64748b; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚗 Booking Confirmed!</h1>
          <p>Your parking slot has been successfully reserved</p>
        </div>
        <div class="content">
          <p>Dear ${booking.userName},</p>
          <p>Thank you for choosing Smart Pulse! Your parking reservation has been confirmed.</p>
          
          <div class="booking-details">
            <h3>Booking Details</h3>
            <div class="detail-row">
              <span>Booking ID:</span>
              <span><strong>${booking.bookingId}</strong></span>
            </div>
            <div class="detail-row">
              <span>Parking Slot:</span>
              <span><strong>${booking.slotNumber}</strong></span>
            </div>
            <div class="detail-row">
              <span>Date:</span>
              <span><strong>${booking.date}</strong></span>
            </div>
            <div class="detail-row">
              <span>Time:</span>
              <span><strong>${booking.time}</strong></span>
            </div>
            <div class="detail-row">
              <span>Duration:</span>
              <span><strong>${booking.duration} hours</strong></span>
            </div>
            <div class="detail-row total">
              <span>Total Amount:</span>
              <span>₹${booking.amount}</span>
            </div>
          </div>

          <p><strong>Important Instructions:</strong></p>
          <ul>
            <li>Please arrive within 15 minutes of your scheduled time</li>
            <li>Keep this confirmation email handy for verification</li>
            <li>Contact support if you need to modify or cancel your booking</li>
          </ul>
          
          <div class="footer">
            <p>Thank you for choosing Smart Pulse!</p>
            <p>For support, contact us at support@smartpulse.com</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  const text = `
    Booking Confirmation - Smart Pulse
    
    Dear ${booking.userName},
    
    Your parking reservation has been confirmed!
    
    Booking Details:
    - Booking ID: ${booking.bookingId}
    - Parking Slot: ${booking.slotNumber}
    - Date: ${booking.date}
    - Time: ${booking.time}
    - Duration: ${booking.duration} hours
    - Total Amount: ₹${booking.amount}
    
    Important Instructions:
    - Please arrive within 15 minutes of your scheduled time
    - Keep this confirmation email handy for verification
    - Contact support if you need to modify or cancel your booking
    
    Thank you for choosing Smart Pulse!
    For support, contact us at support@smartpulse.com
  `;

  return {
    to: booking.userEmail,
    subject: `Parking Confirmed - Slot ${booking.slotNumber} | Smart Pulse`,
    html,
    text
  };
};

// Mock email sending function - Replace with actual email service
export const sendEmail = async (emailData: EmailTemplate): Promise<boolean> => {
  try {
    console.log('Sending email:', emailData);
    
    // Simulate API call to email service (Nodemailer, SendGrid, etc.)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Email sent successfully to:', emailData.to);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};
