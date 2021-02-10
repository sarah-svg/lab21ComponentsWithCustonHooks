/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import AllCharacters from './AllCharacters';
import charactersApi from '../fixtures/characters.json';

const server = setupServer(
  rest.get('https://last-airbender-api.herokuapp.com/api/v1/characters', (req, res, ctx) => {
    return res(ctx.json(charactersApi));
  })
);
describe('Containor All Characters', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a loding screen and characters', async() => {
    render(<MemoryRouter><AllCharacters /></MemoryRouter>);
    screen.getAllByText('Loading...');
    const ul = await screen.findByTestId('characters');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });





});


