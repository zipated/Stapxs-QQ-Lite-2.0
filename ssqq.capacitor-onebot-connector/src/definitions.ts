export interface OnebotPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
