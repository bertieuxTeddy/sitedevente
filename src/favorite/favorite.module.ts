import { Module } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { FavoriteController } from './favorite.controller';
import { DatabaseModule } from 'src/database/database.module';
import { favoriteProviders } from './favorite.providers';

@Module({
  controllers: [FavoriteController],
  providers: [FavoriteService, ...favoriteProviders],
  imports: [DatabaseModule],
})
export class FavoriteModule {}
