// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// solhint-disable func-name-mixedcase
interface ILiquidityGaugeV4 is IERC20 {
    function deposit(uint256 value, address addr, bool claim) external;
    function withdraw(uint256 value, bool claim) external;
    function user_checkpoint(address addr) external;
    function claim_rewards(address addr) external;
    function claimable_reward(address addr, address token) external view returns (uint256);
    function claimed_reward(address addr, address token) external view returns (uint256);
    function name() external view returns (string memory);
    function symbol() external view returns (string memory);
    function decimals() external view returns (uint8);
}