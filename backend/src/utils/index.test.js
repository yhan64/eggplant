import * as utils from '.';

describe('getMissingMsg', () => {
  it('should return err message if anythig is missing', () => {
    const obj = {
      field1: 'bababa',
      field2: 'ccosidks'
    };
    const requiredFields = ['field1', 'field2', 'field3'];
    const err = utils.getMissingMsg(obj, requiredFields);
    expect(err).toEqual('Missing field3');
  });
  it('should return null if nothing is missing', () => {
    const obj = {
      field1: 'bababa',
      field2: 'ccosidks'
    };
    const requiredFields = ['field1', 'field2'];
    const err = utils.getMissingMsg(obj, requiredFields);
    expect(err).toBeNull();
  });
});
