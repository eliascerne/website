import { utilsDatabaseConnect } from './UtilsDatabaseConnect';

describe('utilsDatabaseConnect', () => {
  it('should work', () => {
    expect(utilsDatabaseConnect()).toEqual('utils-database-connect');
  });
});
