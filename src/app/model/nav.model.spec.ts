import { NavModel } from './nav.model';

describe('NavModel', () => {
  it('should create an instance', () => {
    expect(new NavModel("/sample","sample")).toBeTruthy();
  });
});
