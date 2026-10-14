import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', ()=>{
  it('renders headline', ()=>{
    render(
      <MemoryRouter>
        <App title="React" />
      </MemoryRouter>
    );

    screen.debug();
  });
});

