import {describe, it, expect} from 'vitest';
import { vi } from 'vitest';
import { routesConfig } from './routes.jsx';
import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
// import {Routes} from './App';
import {userEvent} from '@testing-library/user-event'
import App from './App';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import Cart from './pages/Cart.jsx';

describe("App component", ()=>{

  it("renders the app I am not sure what to expect", ()=>{
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/"],
    });
    const {container} = render(<RouterProvider router={router} />);
    expect(container).toMatchSnapshot();
  })

  it("renders shop page heading", async ()=>{
    const user = userEvent.setup();

    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/"],
    });

    global.fetch = vi.fn(() => 
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([]),
     })
    );
    render(<RouterProvider router={router} />);

    const shopLink=screen.getByRole("link", { name:/^Shop$/i });
    await user.click(shopLink);

    const shopHeading= await screen.findByRole('heading', {level:2});

    expect(shopHeading.textContent).toMatch(/our collection/i);

    global.fetch.mockClear();

  })

  it("Allows user to add product to cart", ()=>{
    const user = userEvent.setup();
     
    const fakeProducts = [
      {
        id: 101,
        title: "Custom Gaming Mouse",
        price: 29.99,
        rating:4, 
      }
    ];
    
    global.fetch = vi.fn(() => 
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(fakeProducts),
     })
    );

    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={router} />);
  })
});