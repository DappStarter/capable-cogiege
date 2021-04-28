require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note misery undo harvest clinic sun giant'; 
let testAccounts = [
"0x19f8c6255c04a213c61229010d7e2c2c8bb5854392a17bb30717d2ef67c7a1b3",
"0x033a33ed45006c79f481d785f20de136ea5d0d65afa8da9781eafb05ba83e2ab",
"0x51d108fa40038b7d7997b6bb373808d4db28755a012662105bece73bec19c5d6",
"0x1b53812c2ab875ab798f443381aa2f9ece0f82e7ccf28ba473929cbd5add7585",
"0xc28d5212f2fcabcf23ed1fb27b6370e1486f827338b9fcc59d6669d2d7da6d51",
"0xb606d3e7eba9aa7e082b4168a21b54eb1544df729c491a1ebbf9d8efa2188529",
"0xc7ead32c10f01313166ff03ca771c4cc95fc173efc394e83e4bcaf84254e9125",
"0x8f9982d44c701a5c9b099f7d68ef0d71b20ddd50e8ba415b8f313dd0bbee769c",
"0x206221c2ecc4402d286da6a01311a2e399d52c5c9aaa6a232c1007d638cf2a23",
"0x2c85a50e6527a90cbf11b67c0a8542f6da61b8b2e8e5584ba18d747a31b90000"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
