# Tokenomics

## Uniswap V3

### Limitations

#### Fee-on-transfer

Will not function with router contracts.
Token createors may create token wrapper or custom router

#### Rebasing Tokens

- Tokens that adjust supply based on price

Rebasing will succeed in pool creation and swapping,
BUT LP's will bear loss of a negative rebase with no way to recover

### Advantages

#### Concentrated Liquidity

LP's can set upper and lower bounds (ticks) to their liquidity.

When a price is within a tick range, it may ONLY access liquidity
within that tick range.

Price changes grant access to different liquidity.

This decouples price from liqiudity provided.

#### Range Orders

Special type of liquidity providing

##### Take-Profit Order

- LP provides liquidity to pair, token0/token1
- IF pair price crosses an increase threshold
	- all of token1 swaps to token0
- LP collects fees on position until swap executes

Expected: Price increases on pair, then continues to increase

##### Buy Limit Orders

- LP provides liquidity to token0/token1
- IF pair price crosses downward threshold
	- all of token0 swaps to token1
- LP collects fees on position until swap executes

Expected: Price drops on pair, then rebounds


