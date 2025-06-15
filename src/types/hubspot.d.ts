
declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (options: any) => void;
      };
    };
  }
}

export {};
