const nodemailer = require('nodemailer');

async function sendEmail() {
  // Create a transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: '', // Your email address
      pass: '', // Your email password (app password) -> google 2 step verification
    },
  });

  try {
    // Send email
    let info = await transporter.sendMail({
      from: '"Sender name" <email@gmail.com>', // sender address
      to: '', // list of receivers
      subject: 'Welcome to ...', // Subject line
      text: 'Thanks for registering on our site.', // plain text body
    });

    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

// Call the function to send the email
sendEmail();
