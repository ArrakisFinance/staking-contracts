# polygon-staking

Smart contracts for distributing MATIC rewards to Arrakis Finance Vaults on Polygon

To distribute MATIC rewards, each Arrakis Vault (itself a public, fungible position on a Uniswap V3 pair) has a corresponding `LiquidityGaugeV4` which will distribute WMATIC rewards to staked RAKIS LP tokens pro-rata over the 3 month period.

## Audit

The smart contracts in this repo are all 1:1 forks of existing production implementations. We added Chainsecurity's recent audit on Angle's improvements to `LiquidityGaugeV4` 

The audit can be found in `audits/` directory

The Gauge contract itself can be found in `vyper/contracts/` directory.