import { WebPlugin } from '@capacitor/core';

import type { OnebotPlugin } from './definitions';

export class OnebotWeb extends WebPlugin implements OnebotPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
