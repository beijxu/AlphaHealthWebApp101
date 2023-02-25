import axios from 'axios';
var aws4 = require('aws4');

const apiBase = 'https://ivtp7bta1l.execute-api.us-west-2.amazonaws.com/beta';

export default async function getTrials() {

        let request = {
            host: 'ivtp7bta1l.execute-api.us-west-2.amazonaws.com',
            method: 'GET',
            url: `https://ivtp7bta1l.execute-api.us-west-2.amazonaws.com/beta/query/clinicalTrials`,
            path: `/beta/query/clinicalTrials`,
            headers: {
              'content-type': 'application/json'
            }
          }
          
          let signedRequest = aws4.sign(request,
            {
              // assumes user has authenticated and we have called
              // AWS.config.credentials.get to retrieve keys and
              // session tokens
              secretAccessKey: 'AKIA4VOXRQCYUITHAJQE',
              accessKeyId: 'Azq8AhIy0cQTXZWOBXGmfzFQ2Sy/jV4BdXzj+90u',
            })
          
          delete signedRequest.headers['Host']
          delete signedRequest.headers['Content-Length']
          
          let response = await axios(signedRequest);
          console.log(response);
        };