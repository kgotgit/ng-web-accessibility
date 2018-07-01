import { AccessbilityModule } from './accessbility.module';

describe('AccessbilityModule', () => {
  let accessbilityModule: AccessbilityModule;

  beforeEach(() => {
    accessbilityModule = new AccessbilityModule();
  });

  it('should create an instance', () => {
    expect(accessbilityModule).toBeTruthy();
  });
});
