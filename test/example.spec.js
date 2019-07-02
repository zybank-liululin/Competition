import assert from 'assert';
import { car, car1 } from '../src/example';

describe('example', function() {
  it('设置汽车颜色为red，获取颜色为red', function() {
    assert.equal((new car1('red')).getColor('red'), 'red');
  });
});
