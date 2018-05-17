const CommandsService = require('../../../services/commands');

describe('CommandsService', () => {
  const path = 'spec/sample-dir/';
  let commandsService;

  beforeEach(() => {
    commandsService = new CommandsService();
  });

  describe('issueCommand()', () => {
    it('runs ls and returns dir output', (done) => {
      const command = 'ls';

      commandsService.issueCommand(command, 'spec/sample-dir').then(result => {
        expect(result.indexOf('info.txt') > -1).toBe(true);
        done();
      });
    });
  });

  describe('issueStreamedCommand()', () => {
    beforeEach(() => {
      commandsService.issueCommand('cp spec/sample-dir/clear-info.txt spec/sample-dir/info.txt');
    });

    it('runs tail -f and returns future output from the stream', (done) => {
      const command = 'tail'
      const flags = ['-f', 'info.txt'];

      commandsService.issueStreamedCommand(command, flags, 'spec/sample-dir').then(events => {
        let output = '';

        events.on('data', data => {
          output += data;
        });

        setTimeout(() => {
          expect(output).toBe('testing');

          setTimeout(() => {
            commandsService.issueCommand("echo 'testing again' >> spec/sample-dir/info.txt");

            setTimeout(() => {
              expect(output.indexOf('testing again') > -1).toBe(true);
              done();
            }, 100);
          }, 100);
        }, 100);
      });
    });
  });
});
