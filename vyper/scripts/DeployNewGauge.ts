import { ethers, network } from "hardhat";
import { sleep } from "../../src/utils";
import LiquidityGaugeV4 from "../build/contracts/LiquidityGaugeV4.json";
import { getAddressBookByNetwork } from "../../src/config";

const addresses = getAddressBookByNetwork(network.name);

const deploy = async (lpTokenAddr: string) => {
  if (
    network.name === "mainnet" ||
    network.name === "matic" ||
    network.name === "optimism"
  ) {
    console.log(
      `Deploying LiquidityGaugeV4 to ${network.name}. Hit ctrl + c to abort`
    );
    console.log("base implementation address:", addresses.GaugeImplementation);
    console.log("lp token address:", lpTokenAddr);
    console.log("crv token address:", addresses.MockCRV);
    console.log("ve address:", addresses.MockVE);
    console.log("veBoost proxy address:", addresses.MockBoost);
    await sleep(20000);
  }
  const [signer] = await ethers.getSigners();
  const gaugeImpl = await ethers.getContractAt(
    LiquidityGaugeV4.abi,
    addresses.GaugeImplementation
  );
  const encoded = gaugeImpl.interface.encodeFunctionData("initialize", [
    lpTokenAddr,
    addresses.AdminMultiSig,
    addresses.MockCRV,
    addresses.MockVE,
    addresses.MockBoost,
    addresses.AdminMultiSig,
  ]);
  const factory = await ethers.getContractFactory("EIP173Proxy");
  const contract = await factory
    .connect(signer)
    .deploy(addresses.GaugeImplementation, addresses.AdminMultiSig, encoded, {
      gasLimit: 2000000,
    });

  console.log("GAUGE DEPLOYED:", contract.address);
};

(async () => {
  await deploy(
    // LP TOKEN ADDRESS
    "LP-TOKEN-ADDRESS-HERE"
  );
})();
