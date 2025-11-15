declare module 'gray-matter' {
  interface GrayMatterFile<T = Record<string, unknown>> {
    data: T;
    content: string;
    excerpt?: string;
    orig: Buffer;
    language: string;
    matter: string;
    stringify(lang?: string): string;
  }

  interface GrayMatterOption {
    parser?: (input: string) => unknown;
    eval?: boolean;
    excerpt?: boolean | ((file: GrayMatterFile) => void);
    excerpt_separator?: string;
    engines?: Record<string, (input: string) => unknown>;
    language?: string;
    delimiters?: string | [string, string];
  }

  function matter<T = Record<string, unknown>>(
    input: string | Buffer,
    options?: GrayMatterOption
  ): GrayMatterFile<T>;

  export = matter;
}

