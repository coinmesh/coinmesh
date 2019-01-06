import { Balance } from './balance';

describe('', () => {
  it('sets the total balance', () => {
    const fakeBalance = {
      chain_balance: 1,
      channel_balance: 2
    };
    const result = new Balance(fakeBalance);
    expect(result.total_balance).toBe(3);
  });
});

