import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from './App';

describe('test aplication all', () => {

  it('Before render component, appears on the initial screen ', () => {
    const { getByText } = renderWithRouter(<App />);
    const home = getByText(/you are in th page initial/);
    expect(home).toBeInTheDocument();
  });

  it('Render component About', () => {
    const { getByText, history } = renderWithRouter(<App />);
    fireEvent.click(getByText(/Sobre/i));
    const pathname = history.location.pathname;
    expect(pathname).toBe('/about');
    const aboutAll = getByText(/You are on the initial About/);
    expect(aboutAll).toBeInTheDocument();
  });

  it('deve testar um caminho não existente e a renderização do Not Found', () => {
    const { getByText, history } = renderWithRouter(<App />);
    history.push('/pagina/que-nao-existe/');
    const noMatch = getByText(/Página não encontrada/i);
    expect(noMatch).toBeInTheDocument();
  });

  it('Render component About  (only)', () => {
    const { getByText } = renderWithRouter(<about />); 
    const aboutOnly = getByText(/You are on the initial page About/i);
    expect(aboutOnly).toBeInTheDocument();
  });

});