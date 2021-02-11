import React from 'react';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import characterApi from '../fixtures/character.json';
import Character from './Character';
import { NewTheme } from '../hooks/theme';

const server = setupServer(
  // eslint-disable-next-line max-len
  rest.get('https://last-airbender-api.herokuapp.com/api/v1/characters/', (req, res, ctx) => {
    return res(ctx.json(characterApi));
  })
);
describe('Character Page', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => cleanup());
  it('it displays the character id page', async() => {
    render(
      <NewTheme>
        <MemoryRouter>
          <Character 
            match={{ params: { id: '5cf5679a915ecad153ab68d1' } }}/>
        </MemoryRouter>
      </NewTheme>);
    screen.getAllByText('Loading...');
    const name = await screen.findByTestId('name');

    return waitFor(() => {
      expect(name).not.toBeEmptyDOMElement();
    });
  });
  it('creates a snapshot test of the character containor', async() => {
    const { asFragment } = render(<MemoryRouter>
      <Character 
        match={{ params: { id: '5cf5679a915ecad153ab68d1' } }}/>
    </MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});

