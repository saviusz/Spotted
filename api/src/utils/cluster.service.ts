import { PrismaService } from './prisma.service';
import { runningInstances } from '../../../prisma/generated';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class ClusterService implements OnModuleInit {
  constructor(private prisma: PrismaService) {}

  clusterInstance: runningInstances;

  onModuleInit() {
    this.prisma.runningInstances.deleteMany({
      where: {
        lastHearBeat: {
          lte: new Date(new Date().getTime() - 1000 * 60 * 60 * 3),
        },
      },
    });
    this.prisma.runningInstances
      .create({
        data: {
          lastHearBeat: new Date(),
        },
      })
      .then((x) => (this.clusterInstance = x));
  }

  getId() {
    return this.clusterInstance.id;
  }

  @Cron('0 */15 * * * *')
  handleCron() {
    this.prisma.runningInstances.update({
      where: {
        id: this.clusterInstance.id,
      },
      data: {
        lastHearBeat: new Date(),
      },
    });
  }
}
