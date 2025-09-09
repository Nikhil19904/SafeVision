const nodemailer = require("nodemailer");

let contacts = [];

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // ✅ from .env
    pass: process.env.EMAIL_PASS, // ✅ from .env
  },
});

exports.createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Name, email and message are required!" });
    }

    const newContact = { id: Date.now(), name, email, phone, message };
    contacts.push(newContact);

    // ✅ Email to Admin
    await transporter.sendMail({
      from: `"CCTV Security" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Received</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // ✅ Acknowledgment to user
    await transporter.sendMail({
      from: `"CCTV Security" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your message",
      text: `Hello ${name},\n\nThank you for contacting us. Our team will get back to you shortly.\n\nYour message: ${message}\n\nBest Regards,\nCCTV Security Team`,
    });

    res.status(201).json({
      message: "Contact saved & email sent successfully!",
      contact: newContact,
    });
  } catch (error) {
    console.error("Email Error:", error);
    res
      .status(500)
      .json({ error: "Server error while saving contact or sending email." });
  }
};

exports.getContacts = (req, res) => {
  res.status(200).json(contacts);
};
