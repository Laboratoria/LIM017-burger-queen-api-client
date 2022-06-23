import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,  HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { RouterTestingModule } from '@angular/router/testing';


describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        HttpClientModule,
      RouterTestingModule]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    const guard = AuthGuard;    
    expect(guard).toBeTruthy();
  });
});
