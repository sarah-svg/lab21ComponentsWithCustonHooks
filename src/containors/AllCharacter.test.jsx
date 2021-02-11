/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor, cleanup, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import AllCharacters from './AllCharacters';
import charactersApi from '../fixtures/characters.json';
import { NewTheme } from '../hooks/theme';

const server = setupServer(
  rest.get('https://last-airbender-api.herokuapp.com/api/v1/characters', (req, res, ctx) => {
    return res(ctx.json(charactersApi));
  })
);
describe('Containor All Characters', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => cleanup());
  it('displays a loding screen and characters', async() => {
    render(<NewTheme><MemoryRouter><AllCharacters /></MemoryRouter></NewTheme>);
    screen.getAllByText('Loading...');
    const ul = await screen.findByTestId('characters');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
  it('creates a snapshot test of the character containor', () => {
    const { asFragment } = render(<MemoryRouter>
      <AllCharacters />
    </MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});


