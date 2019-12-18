const {remoteServer} = require('../config/config');
const axios = require('axios');

class Connection {
  constructor() {
    this.http = axios.create({
      baseURL: remoteServer,
    });
  }

  async registerMachine(machineInfo) {
    return new Promisse( (resolve, reject) => {
      this.http.post('/', machineInfo)
        .then(
          ({data}) => {
            resolve(data);
          },
          (err) => reject(err)
      );
    });
  }
}

