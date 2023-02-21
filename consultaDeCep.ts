const axios = require('axios');
const cep = `85805-190`;
const main = async () => {
    const request = await axios.get(`https://cdn.apicep.com/file/apicep/${cep}.json`);
    console.log(`${request.data.address} - ${request.data.district} - ${request.data.city} - ${request.data.state} - ${request.data.code}`);
}

main();

export {};