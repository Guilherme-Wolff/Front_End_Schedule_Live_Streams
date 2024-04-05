import './App.css'

import { useState, useEffect } from 'react'

export default function App() {

  const [blob_value, setBlob] = useState<Blob>(new Blob)
  const [text_value, setText] = useState<string>('');
  const handleDownload = async () => {
    try {
      const response = await fetch('https://pixeldrain.com/api/file/HFZvUjpT'); // Substitua 'https://example.com/file.txt' pelo URL do seu arquivo
      const data = await response.text(); // Converte a resposta para texto
      const name_file = 'file.m3u8'
      const resp_blob = new Blob([data], { type: 'application/x-mpegURL' }); // Cria um Blob a partir dos dados
      setBlob(resp_blob)

      // Cria um link temporário para o Blob
      const url = window.URL.createObjectURL(blob_value);
      // Cria um elemento de link para iniciar o download
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', name_file); // Define o nome do arquivo para download
      document.body.appendChild(link);

      // Inicia o download
      link.click();

      // Remove o link temporário
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
    } catch (error) {
      console.error('Erro ao baixar o arquivo:', error);
    }
  };

  const readBlob = (blob: Blob) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setText(event.target.result as string);
      }
    };
    reader.readAsText(blob);
  };

  useEffect(() => {
    readBlob(blob_value);
  }, [blob_value]);

  return (
    <div>
      <button onClick={handleDownload}>Baixar Arquivo</button>

      {text_value &&
        <textarea value={text_value} readOnly rows={10} cols={50} />}
    </div>
  );
}