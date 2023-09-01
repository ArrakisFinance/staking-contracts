# staking-rewards

Smart contracts for distributing rewards to Arrakis Finance Vaults

To distribute rewards, each Arrakis Vault has a corresponding `LiquidityGaugeV4` which will distribute rewards to staked LP tokens pro-rata over the reward period.

## Audit

The smart contracts in this repo are all 1:1 forks of existing production implementations. We added Chainsecurity's recent audit on Angle's improvements to `LiquidityGaugeV4`

The audit can be found in `audits/` directory

The Gauge contract itself can be found in `vyper/contracts/` directory.
