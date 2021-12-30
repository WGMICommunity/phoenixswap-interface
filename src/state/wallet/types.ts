import { CurrencyAmount, Token } from '@phoenixswapv2/core-sdk'

type TokenAddress = string

export type TokenBalancesMap = Record<TokenAddress, CurrencyAmount<Token>>
