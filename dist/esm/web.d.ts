import { WebPlugin } from '@capacitor/core';
import { KotlinMultiPlatformCapacitorPlugin } from './definitions';
export declare class KotlinMultiPlatformCapacitorWeb extends WebPlugin implements KotlinMultiPlatformCapacitorPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const KotlinMultiPlatformCapacitor: KotlinMultiPlatformCapacitorWeb;
export { KotlinMultiPlatformCapacitor };
