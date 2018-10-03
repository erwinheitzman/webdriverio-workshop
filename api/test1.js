const chai = require('chai');
const chaiHttp = require('chai-http');
const request = require('request');
const https = require('https');

chai.use(chaiHttp);

const agentOptions = {
  host: 'www.example.com',
  port: '443',
  path: '/',
  rejectUnauthorized: false
};

const agent = new https.Agent(agentOptions);

request({
  url: 'https://tst-etsl-stub-1950967019.eu-west-1.elb.amazonaws.com',
  method: 'GET',
  agent: agent
}, (err, resp, body) => {
  console.log('err: ', err);
  // console.log('resp: ', resp);
  console.log('body: ', body);
});

// chai
//   .request('https://tst-etsl-stub-1950967019.eu-west-1.elb.amazonaws.com')
//   .get('/')
//   .send()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
