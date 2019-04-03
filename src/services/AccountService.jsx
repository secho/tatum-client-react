class AccountService {

    getAccounts(customerId) {
        console.log('calling getAccounts')
        const accounts =
            [
                {
                    "balance": {
                        "accountBalance": 0,
                        "availableBalance": 0
                    },
                    "created": 1546410660486,
                    "currency": "BTC",
                    "frozen": false,
                    "publicId": "7c21ed165e294db78b95f0f181086d6f"
                }
            ]
        return accounts;
    }

    getAccountAddresses(customerId) {
        console.log('calling getAccountAddresses')
        const addresses =
            [
                {
                    "address": "7c21ed165e294db78b95f0f181086d6f",
                    "derivationKey": "7c21ed165e294db78b95f0f181086d6f",
                    "xpub": "string"
                }
            ]
        return addresses
    }
}

export default AccountService