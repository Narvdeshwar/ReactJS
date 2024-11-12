import { useEffect, useState } from "react";

const useCurrency = (fromPriceOption, toPriceOption, amountToChange = 0) => {
  const [options, setOptions] = useState([]); // Initialize as an array
  const [currency, setConvertedCurrency] = useState(0);
  const URL =
    "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=50a884a7e7dd4ebc81606b5e8601126a";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data.rates);

        const convertedCurrency =
          (data.rates[toPriceOption] / data.rates[fromPriceOption]) *
          amountToChange;

        setConvertedCurrency(convertedCurrency);

        
        setOptions(Object.keys(data.rates));
      } catch (error) {
        console.log("Error fetching the currency data from the API", error);
      }
    };

    fetchData();
  }, [fromPriceOption, toPriceOption, amountToChange]);

  return { options, currency };
};

export { useCurrency };
