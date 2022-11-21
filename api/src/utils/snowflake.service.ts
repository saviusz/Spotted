import { ClusterService } from './cluster.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SnowflakeService {
  constructor(private cluster: ClusterService) {}

  static epoch = new Date('2022-01-01T00:00:00');
  static counterBytes = 11;

  lastTimestamp = BigInt(0);
  counter = 0;

  async generate(): Promise<bigint> {
    /* |---- 41 bits -----|----- 11 bits ------|
       | timestamp        | host and counter   |
    */
    const timestamp = this.getSnowflakeForDate();
    if (timestamp > this.lastTimestamp) {
      this.counter = 0;
      this.lastTimestamp = timestamp;
    } else {
      this.counter++;
    }

    if (this.counter >= (1 << (SnowflakeService.counterBytes + 1)) - 1)
      return new Promise((resolve) => {
        setTimeout(() => resolve(this.generate()), 100);
      });
    console.log(timestamp);

    const host = this.cluster.getId() << SnowflakeService.counterBytes;
    const counter = this.counter;
    const snowflake = timestamp + BigInt(host) + BigInt(counter);
    return snowflake;
  }

  getSnowflakeForDate(date: Date = new Date()): bigint {
    let snowflake = BigInt(date.getTime() - SnowflakeService.epoch.getTime());
    snowflake <<= BigInt(22);
    return snowflake;
  }

  getDate(snowflake: bigint) {
    let output = snowflake;
    output >>= BigInt(22);
    return new Date(Number(output) + SnowflakeService.epoch.getTime());
  }
}
