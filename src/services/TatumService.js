import {useDataApi} from '../hooks/useDataApi';


const TatumService = () => {

  const clients = () => {
    const data = {
        data: [
            {
              "customerCountry": "US",
              "enabled": true,
              "externalId": 651234,
              "id": 1,
              "providerCountry": "US"
            },
            {
                "customerCountry": "UK",
                "enabled": true,
                "externalId": 651235,
                "id": 2,
                "providerCountry": "UK"
              },
              {
                "customerCountry": "CZ",
                "enabled": true,
                "externalId": 651235,
                "id": 3,
                "providerCountry": "CZ"
              }
          ]
    }

    return data;
}

const accounts = () => {

}

const transactions = () => {

}

  return {}
}


export default TatumService;