import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RanksModule } from './ranks/ranks.module';
import { VotesModule } from './votes/votes.module';
import { ItemsModule } from './items/items.module';
import { CandidatesModule } from './candidates/candidates.module';

@Module({
  imports: [UsersModule, RanksModule, VotesModule, ItemsModule, CandidatesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
