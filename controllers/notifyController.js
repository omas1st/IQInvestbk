const { sendAdminNotification, sendMail } = require('../utils/email')

exports.notifyRegistration = async (req, res, next) => {
  try {
    const { name, email, phone, capital } = req.body
    await sendAdminNotification({
      subject: `IQinvestment — New registration — ${email}`,
      html: `<p>IQinvestment — New registration</p>
             <p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Capital: ${capital}</p>`
    })
    res.json({ message: 'Admin notified' })
  } catch (err) { next(err) }
}

exports.notifyLogin = async (req, res, next) => {
  try {
    const { name, email, phone, capital } = req.body
    await sendAdminNotification({
      subject: `IQinvestment — User login — ${email}`,
      html: `<p>IQinvestment — User login</p>
             <p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Capital: ${capital}</p>`
    })
    res.json({ message: 'Admin notified' })
  } catch (err) { next(err) }
}

// Test endpoint to verify mail configuration
exports.test = async (req, res, next) => {
  try {
    const { subject, html, text } = req.body || {}
    const s = subject || 'IQinvestment — Test Email'
    const h = html || `<p>This is a test email from IQinvestment backend at ${new Date().toLocaleString()}</p>`
    await sendAdminNotification({ subject: s, html: h, text })
    res.json({ message: 'Test email sent to admin' })
  } catch (err) { next(err) }
}
