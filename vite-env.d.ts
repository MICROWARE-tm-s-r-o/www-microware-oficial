// Inline replacement for vite/client types to fix missing type definition error
declare const __DATE__: string;
declare const __git_version__: string;

interface ImportMetaEnv {
  [key: string]: string | boolean | undefined;
  readonly BASE_URL: string;
  readonly MODE: string;
  readonly DEV: boolean;
  readonly PROD: boolean;
  readonly SSR: boolean;
}

interface ImportMeta {
  url: string;
  readonly env: ImportMetaEnv;
  readonly glob: (pattern: string) => Record<string, () => Promise<any>>;
}