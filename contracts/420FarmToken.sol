// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "./Ownable.sol";
import "./Context.sol";

contract FarmToken is ERC20, Ownable, Context {
    using SafeMath for uint256;

    struct Investor {
        address account;
        uint256 amount;
    }

    struct GerminationPeriod {
        uint256 id;
        Investor[] investors;
        uint256 totalAmount;
    }

    GerminationPeriod[] germinationPeriods = [];
    bool public germinating = false;
    uint8 constant public maxGerminationId = 9;

    string constant public _name = "420FarmToken";
    string constant public _symbol = "FFT";
    uint256 constant public _decimals = 2;
    uint256 constant public _distributionIncrement = 420000;
    uint256 constant public _totalSupply = _distributionIncrement * maxGerminations * decimals;

    event LogStartGerminationPeriod(uint8 indexed _germinationId);
    event LogEndGerminationPeriod(uint8 indexed _germinationId);
    event LogEtherDeposit(
        uint8 indexed _germinationId,
        address indexed _investor,
        uint256 indexed amount
    );
    event LogFundsDistributed(
        uint8 indexed _germinationId,
        address indexed _investor,
        uint256 _amount
    );

    constructor() {
        _mint(address(this), _totalSupply);
    }

    function startGerminationPeriod() public onlyOwner returns (bool started) {
        require(!germinating, "Germination active");
        _toggleGermination();
        uint8 germinationId = _addGerminationPeriod();
        emit LogStartGerminationPeriod(germinationId);
        return true;
    }

    function endGerminationPeriod() public onlyOwner returns (bool sucess) {
        require(germinating, "Germination inactive");
        _toggleGermination();
        emit LogStartGerminationPeriod(germinationsPassed);
        return true;
    }

    function etherDeposit() public payable returns (bool success) {
        Investor memory investor;
        investor.account = _msgSender();
        investor.amount = msg.value;
        emit LogEtherDeposit(germinationPerid, _investor, amount);
    }

    function distributeFunds() public onlyOwner returns (bool success) {
        uint256 total = totalInvestments();
        for (uint256 iterator=0; iterator < investors.length; iterator ++) {
            uint256 portion = total.div(investors[iterator], total);
            address investor = investors[iterator];
            uint256 amount = portion.mul(_distributionIncrement);
            _balances[investor] += amount;
            emit LogFundsDistributed(germinationId, investor, amount);
        }
    }

    function isGerminating() public view returns (bool) {
        return germinating;
    }

    function totalGerminationsPassed() public view returns (uint8) {
        return germinationPeriods.length;
    }

    function totalInvestments() public view returns (uint256 total) {
        for (uint256 index=0; index < investors.length; index ++) {
            total += investors[index].amount;
        }
        return total;
    }

    function _toggleGermination() private returns (bool) {
        germinating = !germinating;
        return true;
    }

    function _addGerminationPeriod() private returns (uint8 germinationId) {
        GerminationPeriod memory period;
        period.id = germinationPeriods.length;
        period.investors = [];
        period.amount = 0;
        germinationId = germiantionPeriods.push(period);
        return germinationId;
    }

}

/*
Appreciate value
	(aave, uniswap, etc)
Monthly dividend
Fixed supply at launch (4,000,000)
Every day, 10% minted, 10 days
*/