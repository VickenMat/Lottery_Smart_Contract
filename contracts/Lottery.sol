// SPDX-License-Identifier: UNLICENSED

// msg is a global variable to describe who just sent in a function indication
// msg.data     'data' field from tx
// msg.gas      amount of gas the current fn has available
// msg.sender   address of account that started fn call
// msg.value    amount if eth(in wei) that was sent along with the function call

// array in solidity is a reference type
// reference types

pragma solidity ^0.8.17;

contract Lottery {
    address public manager;
    // creates a dynamic array of only addresses
    address[] public players;

    // updates manager variable to the wallet of the contract creator
    constructor() {
        manager = msg.sender;
    }

    // enter into lottery by sending in some amount of ether
    // when we expect ether to be sent into fn, we use payable
    // when someone calls enter fn, we take their address and add it to the address array
    function enter() public payable {
        // require is used for validation, if false, fn is exited and no changes are made
        // basically saying require the wallet entering the lottery to send > x ether
        require(msg.value > 0.00001 ether);
        players.push(msg.sender);
    }
}
