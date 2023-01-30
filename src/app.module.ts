import { Module } from '@nestjs/common';
import { AuthModule } from './core/auth/auth.module';
import { UserModule } from './core/user/user.module';
import { TodoModule } from './core/todo/todo.module';

@Module({
  imports: [AuthModule, UserModule, TodoModule],
})
export class AppModule {}
