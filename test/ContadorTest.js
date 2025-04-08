const { expect } = require("chai");

describe("Contador", function () {
    it("Debería aumentar la cuenta correctamente", async function () {
        const Contador = await ethers.getContractFactory("Contador");
        const contador = await Contador.deploy();
        expect(await contador.obtenerCuenta()).to.equal(0);
        await contador.aumentar();
        expect(await contador.obtenerCuenta()).to.equal(1);
    });
});