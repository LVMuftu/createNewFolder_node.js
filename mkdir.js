const fs = require('fs');

const createFolder = (path, folderName) => {
  const folderPath = `${path}/${folderName}`;

  fs.mkdir(folderPath, { recursive: true }, (err) => {
    if (err) {
      console.error('Klasör oluşturulurken bir hata oluştu:', err);
    } else {
      console.log(`"${folderPath}" klasörü oluşturuldu.`);
    }
  });
};

// Kullanım örneği
createFolder('C:/Users/yusuf/Desktop', 'Yeni Klasör');
