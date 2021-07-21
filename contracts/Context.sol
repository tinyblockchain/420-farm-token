// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

abstract contract Context {

    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msdData() internal view virtual returns (bytes memory) {
        return msg.data;
    }

}