const BlocksService = require('../../../services/blocks');

describe('BlocksService', () => {
  let blocksService;

  beforeEach(() => {
    blocksService = new BlocksService();
  });

  describe('getBlock()', () => {
    let hash;

    beforeEach(() => {
      return blocksService.generate(1).then(result => {
        hash = result.result[0];
      });
    });

    it('gets the specified block', (done) => {
      blocksService.getBlock(hash).then(result => {
        expect(result.result.hash).toBe(hash);
        done();
      });
    });
  });

  describe('getChainHeight()', () => {
    it('gets the current height of the chain', (done) => {
      blocksService.getChainHeight().then(result => {
        expect(result.result > 0).toBe(true);
        done();
      });
    });
  });

  describe('generate()', () => {
    it('generates blocks', (done) => {
      const numberOfBlocks = 5;

      blocksService.generate(numberOfBlocks).then(result => {
        expect(result.result.length).toBe(numberOfBlocks);
        done();
      });
    });
  });
});
