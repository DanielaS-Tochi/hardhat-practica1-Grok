const hre = require("hardhat");

async function main() {
    const Contador = await hre.ethers.getContractFactory("Contador");
    const contador = await Contador.deploy();
    console.log("Contador desplegado en:", await contador.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});