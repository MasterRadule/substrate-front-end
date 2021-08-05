export const rpcConfig = {
  defiModule: {
    getBalance: {
      alias: ['get_balance'],
      description: 'RPC for getting user balance',
      jsonrpc: 'defiModule_getBalance',
      method: 'getBalance',
      isSubscription: false,
      params: [
        {
          name: 'user',
          type: 'AccountId'
        }
      ],
      section: 'defiModule',
      type: 'BalanceInfo'
    },
    getDebt: {
      alias: ['get_debt'],
      description: 'RPC for getting user debt',
      jsonrpc: 'defiModule_getDebt',
      method: 'getDebt',
      isSubscription: false,
      params: [
        {
          name: 'user',
          type: 'AccountId'
        }
      ],
      section: 'defiModule',
      type: 'BalanceInfo'
    },
    getAllowedBorrowingAmount: {
      alias: ['get_allowed_borrowing_amount'],
      description: 'RPC for getting user allowed borrowing amount',
      jsonrpc: 'defiModule_getAllowedBorrowingAmount',
      method: 'getAllowedBorrowingAmount',
      isSubscription: false,
      params: [
        {
          name: 'user',
          type: 'AccountId'
        }
      ],
      section: 'defiModule',
      type: 'BalanceInfo'
    },
    getDepositAPY: {
      alias: ['get_deposit_apy'],
      description: 'RPC for getting deposit APY',
      jsonrpc: 'defiModule_getDepositAPY',
      method: 'getDepositAPY',
      isSubscription: false,
      params: [],
      section: 'defiModule',
      type: 'BalanceInfo'
    },
    getBorrowingAPY: {
      alias: ['get_borrowing_apy'],
      description: 'RPC for getting borrowing APY',
      jsonrpc: 'defiModule_getBorrowingAPY',
      method: 'getBorrowingAPY',
      isSubscription: false,
      params: [],
      section: 'defiModule',
      type: 'BalanceInfo'
    }
  }
};
