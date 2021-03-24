import BigNumber from 'bignumber.js';

export const state: TradeState = {
  polling: {
    real: null,
    spot: null,
  },
  sellPrice: {
    amount: new BigNumber(0),
    amountFormatted: '0',
  },
  shareTokenIds: [],
  spotPrice: {
    amount: new BigNumber(0),
    amountFormatted: '0',
  },
  subscriptions: [],
  tokenTradeMap: [],
  tradeAmount: new BigNumber(0) as BigNumber,
  tradeProperties: {
    actionType: 'buy',
    asset1: null,
    asset2: null,
  },
  transactions: {},
  unpairedTransactions: {},
};
