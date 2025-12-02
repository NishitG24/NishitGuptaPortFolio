import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 3001;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nishitautomationtest@gmail.com',
    pass: (process.env.GMAIL_APP_PASSWORD || '').replace(/\s/g, '')
  }
});

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.url === '/api/books' && req.method === 'GET') {
    const data = fs.readFileSync(path.join(__dirname, 'data', 'MyBooksData.txt'), 'utf8');
    const books = [];
    const blocks = data.split('\n\n\n').filter(b => b.trim());

    blocks.forEach(block => {
      const lines = block.split('\n');
      const book = {};
      lines.forEach(line => {
        if (line.startsWith('Title :')) book.title = line.replace('Title :', '').trim();
        else if (line.startsWith('Description :')) book.description = line.replace('Description :', '').trim();
        else if (line.startsWith('Amazon Link :')) book.amazonLink = line.replace('Amazon Link :', '').trim();
        else if (line.startsWith('Image :') || line.startsWith('Image:')) {
          book.image = line.replace(/Image\s*:\s*/i, '').replace('src="', '').replace('"', '').trim();
        }
        else if (book.description && !line.startsWith('Title') && !line.startsWith('Amazon') && !line.startsWith('Image')) {
          book.description += ' ' + line.trim();
        }
      });
      if (book.title) books.push(book);
    });

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(books));
    return;
  }

  if (req.url === '/api/contact' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', async () => {
      try {
        const { name, email, message } = JSON.parse(body);
        
        await transporter.sendMail({
          from: 'nishitautomationtest@gmail.com',
          to: 'nishitautomationtest@gmail.com',
          subject: `Portfolio Contact: ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          html: `<h3>New Contact Form Submission</h3>
                 <p><strong>Name:</strong> ${name}</p>
                 <p><strong>Email:</strong> ${email}</p>
                 <p><strong>Message:</strong></p>
                 <p>${message}</p>`
        });

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: 'Message sent successfully!' }));
      } catch (error) {
        console.error('Email error:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Failed to send message' }));
      }
    });
    return;
  }

  if (req.url === '/api/resume' && req.method === 'GET') {
    const resumePath = path.join(__dirname, 'data', 'Nishit_Gupta_SDET_Resume (1).pdf');
    const data = fs.readFileSync(resumePath);
    res.writeHead(200, { 
      'Content-Type': 'application/pdf', 
      'Content-Disposition': 'attachment; filename="Nishit_Gupta_SDET_Resume.pdf"'
    });
    res.end(data);
    return;
  }

  res.writeHead(404);
  res.end('Not Found');
});

server.listen(PORT, () => {
  console.log(`API Server running at http://localhost:${PORT}/`);
});
