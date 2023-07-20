const token = process.env.LINE_NOTIFY_TOKEN;
const actor = process.env.GITHUB_ACTOR;
const message = `因為${actor}的餵食，Docusaurus又長大了`;

const url = 'https://notify-api.line.me/api/notify';
const data = `message=${encodeURIComponent(message)}&stickerPackageId=11538&stickerId=51626498`;

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Bearer ${token}`,
  },
  body: data,
}).then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  console.log('Docusaurus又更厲害拉');
}).catch(error => {
  console.error('Docusaurus因為 ' + error.message + ' 跌了一跤');
  throw error;
});