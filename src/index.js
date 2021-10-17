const { OpenVidu, OpenViduRole } = require('openvidu-node-client');

console.log('script started');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

(async () => {
  console.log('Creating OV\n');
  const OV = new OpenVidu('https://localhost:4443', 'MY_SECRET');

  console.log('Creating session...');
  const session = await OV.createSession();
  console.log('Session created\n');

  console.log('Try create single connection...');
  await session.createConnection({
    role: OpenViduRole.PUBLISHER,
    data: JSON.stringify({userId: -1}),
  });
  console.log('Connection created\n');

  const nConnections = 100;
  const promises = [];

  console.log('Creating connections...');
  for(let i = 0; i < nConnections; i++) {
    const promise = session.createConnection({
      role: OpenViduRole.PUBLISHER,
      data: JSON.stringify({userId: i}),
    });

    promises.push(promise);
  }

  console.log('Wait promises...');
  await Promise.all(promises);
  console.log('Done');
})();
