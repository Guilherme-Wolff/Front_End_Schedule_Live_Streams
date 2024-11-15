const functions = require('firebase-functions');
const express = require('express');
const path = require('path');
const admin = require('firebase-admin');
const fs = require('fs');

admin.initializeApp();

const auth = admin.auth(); // Inicializa o módu

const app = express();
const port = 5001;

const buildDir = path.join(__dirname, 'build'); // Ajuste conforme necessário


// Função para construir o HTML com SSR

app.use(express.static(buildDir));

app.get('*', async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  let filePath = path.join(buildDir, url.pathname);
  
  if (fs.existsSync(filePath)) {
    if (fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, "index.html");
    }
    return res.sendFile(filePath);
  }

  if (url.pathname === '/ssr') {
    
    try {
    //  const content =  renderToString()

      res.send('<h1>OLA</h1>');
    } catch (error) {
      console.error('Rendering error:', error);
      //res.status(500).send('Internal Server Error');
    }
  }
  res.sendFile(path.join(buildDir, "index.html"));
});



//porta padrao function é 5001
exports.ssrServer = functions.https.onRequest(app);
