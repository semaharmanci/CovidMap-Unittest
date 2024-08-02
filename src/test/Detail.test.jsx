import { render, screen } from "@testing-library/react";
import Detail from "../Detail/index";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { exa_data } from "../constants";

const mockStore = configureStore([thunk]);

it("loader bileşenleri", () => {
  const store = mockStore({ isLoading: true, error: null, data: null });

  render(
    <BrowserRouter>
      <Provider store={store}>
        <Detail />
      </Provider>
    </BrowserRouter>
  );

  // loader ekrana geliyor mu?
  screen.getByTestId("header-loader");
  screen.getAllByTestId("card-loader");
});

it("error bileşeni ", () => {
  const store = mockStore({
    isLoading: false,
    error: "404 content not found",
    data: null,
  });

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Detail />
      </BrowserRouter>
    </Provider>
  );

  screen.getByText(/404 content/i);
});

it("ülke bilgisi ve kart", () => {
  const store = mockStore({
    isLoading: false,
    error: null,
    data: exa_data,
  });

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Detail />
      </BrowserRouter>
    </Provider>
  );

  // 1) ülke detayları ekrana geliyor mu?

  // ülke ismi?
  screen.getByText("Turkiye");

  // ekranda resim
  const img = screen.getByRole("img");

  // resmin kaynağı
  expect(img).toHaveProperty("src", exa_data.country.flags.png);
  
  const arr = Object.entries(exa_data.covid);

  // key ve value değerleri ?
  arr.forEach((item) => {
    // başlık?
    screen.getByText(item[0].split("_").join(" "));
    // değer ?
    screen.getAllByText(item[1]);
  });
});