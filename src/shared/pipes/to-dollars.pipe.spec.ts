import { ToDollarsPipe } from '../pipes/to-dollars.pipe';

describe('ToDollarsPipe', () => {
  it('create an instance', () => {
    const pipe = new ToDollarsPipe();
    expect(pipe).toBeTruthy();
  });
});
