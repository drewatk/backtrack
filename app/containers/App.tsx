import * as React from 'react';

interface IAppProps {
  children: React.ReactNode;
}

export default class App extends React.Component<IAppProps> {
  public props!: IAppProps;

  constructor(props: IAppProps) {
    super(props);
  }

  public render() {
    const { children } = this.props;
    return <>{children}</>;
  }
}
