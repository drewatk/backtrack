interface IClassNames {
  [className: string]: string;
}

declare module '*.css' {
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.json' {
  const value: any;
  export default value;
}
