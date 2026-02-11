// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract BaitSwap {
    IERC20 public token0;
    IERC20 public token1;

    uint256 public reserve0;
    uint256 public reserve1;

    constructor(address _token0, address _token1) {
        token0 = IERC20(_token0);
        token1 = IERC20(_token1);
    }

    function getReserves() public view returns (uint256, uint256) {
        return (reserve0, reserve1);
    }
}
