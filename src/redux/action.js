import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const covidUrl = "https://covid-19-statistics.p.rapidapi.com/reports";

const headers = {
  "x-rapidapi-key": "883873c3f6msh66369b1d8262fa3p168b07jsn5a287a73e2ae",
  "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
};

const getData = createAsyncThunk("covid/getData", async ({ code, query }) => {
  const params = { iso: code, q: query };

  const req1 = axios.get(covidUrl, { params, headers });

  const req2 = axios.get(
    code
      ? `https://restcountries.com/v3.1/alpha/${code}`
      : `https://restcountries.com/v3.1/name/${query}`
  );

  const res = await Promise.all([req1, req2]);

  const covid = { ...res[0].data.data[0], ...res[0].data.data[0].region };

  delete covid.cities;
  delete covid.region;

  return { covid, country: res[1].data[0] };
});

export default getData;
