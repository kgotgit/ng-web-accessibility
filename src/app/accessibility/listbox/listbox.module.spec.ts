import { ListboxModule } from './listbox.module';

describe('ListboxModule', () => {
  let listboxModule: ListboxModule;

  beforeEach(() => {
    listboxModule = new ListboxModule();
  });

  it('should create an instance', () => {
    expect(listboxModule).toBeTruthy();
  });
});
