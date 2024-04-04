import { Module } from '@nestjs/common';
import { ReposController } from './repos.controller';
import { ReposService } from './repos.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [ReposController],
  providers: [ReposService],
  imports: [HttpModule],
})
export class ReposModule {}
