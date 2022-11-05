import { ethers, network } from "hardhat";
import { sleep } from "../../src/utils";
import { getAddressBookByNetwork } from "../../src/config";
import VoteEscrow from "../build/contracts/VotingEscrow.json";
import EscrowDelegation from "../build/contracts/DelegationProxy.json";
import Gauge from "../build/contracts/LiquidityGaugeV4.json";

const addresses = getAddressBookByNetwork(network.name);

const deploy = async () => {
  if (
    network.name === "mainnet" ||
    network.name === "matic" ||
    network.name === "optimism" ||
    network.name === "arbitrum"
  ) {
    console.log(
      `Deploying Vyper Contracts to ${network.name}. Hit ctrl + c to abort`
    );
    await sleep(20000);
  }
  const [signer] = await ethers.getSigners();
  const veFactory = ethers.ContractFactory.fromSolidity(VoteEscrow);
  const ve = await veFactory.connect(signer).deploy(
    addresses.MockCRV,
    "Vote Escrowed CRV",
    "veCRV",
    "1.0.0",
    { gasLimit: 6000000, gasPrice: ethers.utils.parseUnits("0.1", "gwei") }
  );
  console.log("VOTING ESCROW DEPLOYED:", ve.address);
  await sleep(10000);
  const veBoostFactory = ethers.ContractFactory.fromSolidity(EscrowDelegation);
  const veBoost = await veBoostFactory
    .connect(signer)
    .deploy(
      ve.address,
      ethers.constants.AddressZero,
      addresses.AdminMultiSig,
      { gasLimit: 6000000, gasPrice: ethers.utils.parseUnits("0.1", "gwei") }
    );
  console.log("DELEGATION PROXY DEPLOYED:", veBoost.address);
  await sleep(10000);
  const gaugeImplFactory = ethers.ContractFactory.fromSolidity(Gauge);
  const gaugeImpl = await gaugeImplFactory
    .connect(signer)
    .deploy({ gasLimit: 6000000, gasPrice: ethers.utils.parseUnits("0.1", "gwei") });
  console.log("GAUGE IMPLEMENTATION DEPLOYED:", gaugeImpl.address);
};

(async () => {
  await deploy();
})();
