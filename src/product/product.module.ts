import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { productProviders } from './product.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ...productProviders],
  imports: [DatabaseModule],
})
export class ProductModule {}
