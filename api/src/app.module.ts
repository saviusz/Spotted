import { IgService } from './utils/ig.service';
import { ImageGeneratorService } from './utils/image-generator.service';
import { ClusterService } from './utils/cluster.service';
import { PrismaService } from './utils/prisma.service';
import { SnowflakeService } from './utils/snowflake.service';
import { PostsController } from './posts/posts.controller';

import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ScheduleModule.forRoot(), ConfigModule.forRoot({ isGlobal: true })],
  controllers: [PostsController, AppController],
  providers: [
    IgService,
    ImageGeneratorService,
    ClusterService,
    PrismaService,
    SnowflakeService,
    AppService,
  ],
})
export class AppModule {}
