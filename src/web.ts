import { WebPlugin } from '@capacitor/core';
import { KotlinMultiPlatformCapacitorPlugin } from './definitions';

export class KotlinMultiPlatformCapacitorWeb extends WebPlugin implements KotlinMultiPlatformCapacitorPlugin {
  constructor() {
    super({
      name: 'KotlinMultiPlatformCapacitor',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }

  async fillListOfPeople(options: { people: [] }): Promise<{ people: []}> {
    console.log('ECHO 2', options);
    return options;
  }
}

const KotlinMultiPlatformCapacitor = new KotlinMultiPlatformCapacitorWeb();

export { KotlinMultiPlatformCapacitor };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(KotlinMultiPlatformCapacitor);
