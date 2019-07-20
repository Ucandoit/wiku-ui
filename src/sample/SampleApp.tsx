import * as React from 'react';
import { Button } from '../';

const SampleApp: React.FunctionComponent = (): JSX.Element => {
  return (
    <React.Fragment>
      <Button>Test</Button>
      <Button big>Test</Button>
      <Button secondary>Test</Button>
      <Button inverse>Test</Button>
    </React.Fragment>
  );
};

export default SampleApp;
