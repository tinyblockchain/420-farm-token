# Uniswap Basics

Automated Market Maker

## Pools

Previously called Pairs in V1/V2.

Consists of a pair of tokens `token0/token1`

Price represents number of `token0` to 1 `token1`.

## Price

Price is automatically determined based on the amount of
liquidity provided and token utilization from that pool.

In V1/V2, the price was directly tied to liguidity and utilization.

In V3, the price is decoupled from liquidity since liquidity is
conditional.

## Price Impact

Since a swap affects the liquidity utilization, the price
is automatically imacted by a swap.

Price imact is defined by the price change resulting from the
swap.

## Slippage

Slippage is defined as the change in price that happens while a
transaction is pending. Providing a higher gas fee will reduce
transaction validation time, resulting in less slippage.

Slippage tolerance can be set for any swap, protecting users from
significant unfavorable price swings while their transaction is
pending.

## Liquidity Provider (LP)

Liquidity providers provide liquidity by providing both currencies
in a pair.

LP's collect fees on transactions that utilize the pair.

In V1/V2, liquidity was unconditional, therefore liquidity
was distributed evenly along a price curve between 0 and
infinity.

A pair such as DAI/USDC only utilizes ~0.05% of the total
available liquidity, which is for trading between 0.99USD
and 1.01USD, which is where the most volume exists.

In V3, LPs can concentrate liquidity within a set price range,
for example between 0.99USD and 1.01USD in the DAI/USDC pair.

## Concentrated Liquidity

When LPs concentrate liquidity to a specific price range,
they only provide liquidity (and therefore collect fees) when
the price is within the given range.

The market decides what a sensible distribution of liquidity is,
as rational LPs are incentivised to concentrate liquidity while
maximizing the activity of the provided liquidity.


