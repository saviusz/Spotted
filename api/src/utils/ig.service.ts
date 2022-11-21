import { Logger, OnModuleInit } from '@nestjs/common';
import ipc from 'node-ipc';
/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

export interface postData {
  file: string;
  caption: string;
}

@Injectable()
export class IgService {
  private client;
  OnModuleInit() {
    ipc.config.id = 'app';
    ipc.config.retry = 1000;
    ipc.connectTo('ig-spotted-agent', () => {
      this.client = ipc.of['ig-spotted-agent'];
    });
  }

  async addPost(data: postData) {
    if (!this.client) Logger.error('Client not jet loaded');
    Logger.verbose('Wysłano dodanie posta');
    return this.client.emit('postImage', data);
  }
}
