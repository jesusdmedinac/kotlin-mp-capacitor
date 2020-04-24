declare module "@capacitor/core" {
  interface PluginRegistry {
    KotlinMultiPlatformCapacitor: KotlinMultiPlatformCapacitorPlugin;
  }
}

export interface KotlinMultiPlatformCapacitorPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
