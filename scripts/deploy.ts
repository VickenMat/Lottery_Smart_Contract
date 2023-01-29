const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { abi, evm } = require('compile'); // used to be ./compile to move back a directory

const provider = new HDWalletProvider(
    'scare diary later practice toast dress liquid visual sorry kitchen debris say',
    'https://goerli.infura.io/v3/a0d4d23faaca4ca1b0e7ab55fc77ed6c'
)
// takes provider and passes it to Web3 constructor
// get an instance of web3 enabled for Goerli
// this instance of web3 can be used to interact with the test network in any way we want
// can use to send eth, deploy/update contracts...
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account:', accounts[0]);

    const result = await new web3.eth.Contract(abi) 
        .deploy({ data: '0x' + evm.bytecode.object})
        .send({ from: accounts[0], gas: '1000000'});

    console.log('Contract deployed to', result.options.address);
    provider.engine.stop();
};

deploy();



/*
import HDWalletProvider from '@truffle/hdwallet-provider';
import { compiledContract } from 'scripts/compile';
import { config } from 'scripts/config';
import Web3 from 'web3';

import { Dai } from '../generatedTypes/dai';

const { abi, evm, } = compiledContract;
const mnemonicPhrase = config.accountMnemonic;
const network = config.rinkebyEndpoint;

if (!mnemonicPhrase || !network)
  throw new Error(
    'Please make sure ACCOUNT_MNEMONIC and RINKEBY_ENDPOINT are provided '
  );

const provider = new HDWalletProvider({
  mnemonic: {
    phrase: mnemonicPhrase,
  },
  providerOrUrl: network,
});

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);

  const result = (await new web3.eth.Contract(abi)
    .deploy({
      data: '0x' + evm.bytecode.object,
    })
    .send({ from: accounts[0], })) as unknown as Dai;

  // console.log('abi is:',abi)
  console.log(JSON.stringify(abi, undefined, 4));
  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};

deploy();
*/
