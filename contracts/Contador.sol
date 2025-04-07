// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Contador {
    uint public cuenta;

    function aumentar() public {
        cuenta += 1;
    }

    function obtenerCuenta() public view returns (uint) {
        return cuenta;
    }
}