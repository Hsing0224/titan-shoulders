const axios = require('axios');

const token = process.env.LINE_NOTIFY_TOKEN;
const message = 'Deployment to GitHub Pages is successful!';

axios.post('https://notify-api.line.me/api/notify', `message=${message}`, {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Bearer ${token}`,
  },
})
  .then(response => {
    console.log('Docusaurus又更厲害拉');
  })
  .catch(error => {
    console.error('Docusaurus因為 ' + error.message + ' 跌了一跤');
    throw error;
  });