import { IgService } from './../utils/ig.service';
import { ImageGeneratorService } from './../utils/image-generator.service';
import { SnowflakeService } from './../utils/snowflake.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Logger,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { Prisma, Post as PostModel, PostType } from '../../../prisma/generated';
import { PrismaService } from 'src/utils/prisma.service';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ enum: PostType })
  type: PostType;

  @ApiProperty()
  content: string;

  @ApiProperty({ required: false })
  desc?: string;

  @ApiProperty()
  isFull?: boolean;
}

@Controller('posts')
export class PostsController {
  constructor(
    private snowflake: SnowflakeService,
    private prisma: PrismaService,
    private ig: IgService,
    private imgGenerator: ImageGeneratorService,
  ) {}

  @Get()
  async getAllPosts() {
    return await this.prisma.post.findMany();
  }

  @Post()
  async createPost(@Body() data: CreatePostDto) {
    const img = await this.imgGenerator.generate({ message: data.content });
    return await this.ig.addPost({ file: img, caption: 'elo' });
  }

  @Get(':id')
  async getPostByID(@Param('id') id: number) {
    return await this.prisma.post.findFirst({
      where: {
        id: BigInt(id),
      },
    });
  }

  @Delete(':id')
  @HttpCode(207)
  async deletePost(@Param('id') id: number) {
    try {
      return await this.prisma.post.delete({ where: { id: BigInt(id) } });
    } catch (err) {
      throw new NotFoundException(err.meta.cause);
    }
  }
}
