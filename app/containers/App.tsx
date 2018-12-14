import * as React from 'react';

interface IAppProps {
  children: React.ReactNode;
}

export default class App extends React.Component<IAppProps> {
  props!: IAppProps;

  constructor(props: IAppProps) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return <React.Fragment>{children}</React.Fragment>;
  }
}
