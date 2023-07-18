const axios = require('axios');

const token = process.env.LINE_NOTIFY_TOKEN;
const actor = process.env.GITHUB_ACTOR;
const message = `因為${actor}的餵食，Docusaurus又長大了`;

axios.post('https://notify-api.line.me/api/notify', `message=${message}&stickerPackageId=11538&stickerId=51626498`, {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Bearer ${token}`,
  },
})
  .then(() => {
    console.log('Docusaurus又更厲害拉'); // 成功時顯示訊息
  })
  .catch(error => {
    console.error('Docusaurus因為 ' + error.message + ' 跌了一跤');
    throw error;
  });