// helper library
import assert from 'assert';
import { compiledContract } from '../scripts/compile';
// import { enterPlayerInLottery } from 'utils/helper';
// npm install web3     in terminal for this to worl
import Web3 from 'web3';
// import { Dai } from '..generatedTypes/dai';

// local test network that only gets created when we start running our tests
const ganache = require('ganache-cli');
// provider is what allows us to connect to a given network, can change from ganache to something else
const provider = ganache.provider();
// require in interface
// THIS IS THE ISSUE WITH RUNNING TEST
const { abi, evm } = compiledContract;
// set up instance of web3
const web3 = new Web3(provider);

let lottery: any;
let accounts: string[];

beforeEach(async () => {
    // get list of all accounts
    accounts = await web3.eth.getAccounts();
    // use one of those accounts to deploy the contract
    lottery = (await new web3.eth.Contract(abi)
        .deploy({ data: '0x' + evm.bytecode.object, })
        .send({
            from: accounts[0], gas: 1000000,
        }));
});

describe('Lottery Contract', () => {
    it('deploys a contract', () => {
        assert.ok(lottery.options.address);
    });
});