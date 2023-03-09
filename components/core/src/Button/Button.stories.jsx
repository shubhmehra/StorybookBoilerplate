import React from 'react';

import { Button } from './Button';

storiesOf('Button', module)
  .add('Primary Button', () => (
    <Button
      primary
      label="Primary"
      size="small"
    />
  ))