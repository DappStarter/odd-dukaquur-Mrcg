require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt case area similar find radar shift push impulse light army gate'; 
let testAccounts = [
"0x15482cb89d2dab1e9e022947a6327e18cd660efc188d4383134ae1b7b13b7d4b",
"0x3521c32f47beecc91c9a20f48ed9509383453e4bcecc2f02a7bf8a38aa76794b",
"0xbf3a32ea5e14f41e360441350e836ef4d15aac421e9734b95ca0b80fbe76ee5b",
"0x38775b6c9e26b010369efbf5c6524d0b3684ce68ffd6571c654fec31c0972bce",
"0xc349e92ecdbfebadf5233d829466f2e737cfbb210fce900eb424b5eeb03475de",
"0x4811a89e039e43510fc5e1fae533ff91a1b6652af7bda629d5145255e3105eb9",
"0xed0825290fe009addb1b90a92f4dc33660f49687e9c22474b30de95dfc441964",
"0x633b58483980e5d5a6758a4101a604d11ca88cc46e6c745dad64a79c6575d136",
"0x2a3bb19382cf491176beb58908021e5f9f7a9ab42800d1ff42bbb490c353f4f9",
"0xee8d3481e2ffb3c305fe81d7092154bed3739eb733198f88c300eff5a1b29894"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

