# Hardhat Practica 1 - Contador

Este proyecto es mi primera práctica con Hardhat. Implementa un contrato `Contador` que incrementa un valor y lo lee.

## Archivos
- `contracts/Contador.sol`: Contrato Solidity.
- `scripts/deploy.js`: Script para desplegar.
- `test/ContadorTest.js`: Tests con Mocha/Chai.

## Comandos
- Compilar: `npx hardhat compile`
- Desplegar: `npx hardhat run scripts/deploy.js`
- Testear: `npx hardhat test`

## Resultados
- Desplegado en: `0x5FbDB2315678afecb367f032d93F642f64180aa3`
- Tests: 10 pruebas pasadas (1 de Contador, 9 de Lock).