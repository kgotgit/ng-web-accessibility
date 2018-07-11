import { AccessibilityModule } from './accessibility.module';

describe('AccessibilityModule', () => {
  let accessibilityModule: AccessibilityModule;

  beforeEach(() => {
    accessibilityModule = new AccessibilityModule();
  });

  it('should create an instance', () => {
    expect(accessibilityModule).toBeTruthy();
  });
});
