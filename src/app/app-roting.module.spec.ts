import { AppRotingModule } from './app-roting.module';

describe('AppRotingModule', () => {
  let appRotingModule: AppRotingModule;

  beforeEach(() => {
    appRotingModule = new AppRotingModule();
  });

  it('should create an instance', () => {
    expect(appRotingModule).toBeTruthy();
  });
});
