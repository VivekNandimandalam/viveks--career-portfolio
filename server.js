// Simple Express server to forward website messages to WhatsApp via Twilio
// Usage:
// 1. npm install express twilio cors dotenv
// 2. Create a .env file with TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_WHATSAPP_FROM (e.g. 'whatsapp:+1415XXXXXXX'), OWNER_WHATSAPP (e.g. 'whatsapp:+353899507630')
// 3. node server.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Twilio = require('twilio');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_WHATSAPP_FROM, OWNER_WHATSAPP } = process.env;

if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_WHATSAPP_FROM || !OWNER_WHATSAPP) {
  console.warn('Missing Twilio env vars. Please set TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_WHATSAPP_FROM, OWNER_WHATSAPP');
}

const client = Twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

app.post('/api/send-whatsapp', async (req, res) => {
  try {
    const { message, visitorName, visitorEmail } = req.body;
    if (!message || message.trim().length === 0) return res.status(400).json({ error: 'Empty message' });

    const text = `New message from portfolio website:\n${visitorName ? `Name: ${visitorName}\n` : ''}${visitorEmail ? `Email: ${visitorEmail}\n` : ''}\nMessage:\n${message}`;

    // send via Twilio WhatsApp
    const msg = await client.messages.create({
      from: TWILIO_WHATSAPP_FROM,
      to: OWNER_WHATSAPP,
      body: text,
    });

    return res.json({ ok: true, sid: msg.sid });
  } catch (err) {
    console.error('send-whatsapp error', err);
    return res.status(500).json({ error: 'send_failed', details: err.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`WhatsApp forwarder listening on http://localhost:${PORT}`));
