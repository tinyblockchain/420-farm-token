// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

import "./Context.sol";

contract Ownable is Context {
    address private _owner;

    event OwnershipRenounced();

    constructor() {
        _owner = _msgSender();
    }

    modifier onlyOwner() {
        require(isOwner(), "Function accessible only by the owner.");
        _;
    }

    function owner() public view returns(address) {
        return _owner;
    }

    function isOwner() public view returns (bool) {
        return msg.sender == _owner;
    }

    function renounceOwnership() public virtual onlyOwner {
        emit OwnershipRenounced();
        _owner = address(0);
    }

}