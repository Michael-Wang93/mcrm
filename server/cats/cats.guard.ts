import { CanActivate, Guard, ExecutionContext } from '@nestjs/common';

@Guard()
export class CatsGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    return true;
  }
}
