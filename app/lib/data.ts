const apiUrl = "https://countries.trevorblades.com/";

export function getContinents() {
  const continents = [
    {
      name: "Africa",
      code: "AF",
    },
    {
      name: "Antarctica",
      code: "AN",
    },
    {
      name: "Asia",
      code: "AS",
    },
    {
      name: "Europe",
      code: "EU",
    },
    {
      name: "North America",
      code: "NA",
    },
    {
      name: "Oceania",
      code: "OC",
    },
    {
      name: "South America",
      code: "SA",
    },
  ];

  return continents;
}

export async function getCountriesByContinent(continentCode: string) {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `{
          countries(filter: {continent: {eq: "${continentCode}"}}) {
            name
            emoji
            code
          }
        }`,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.data.countries;
  } catch (e) {
    console.error("Error fetching data:", e);
    return [];
  }
}

export async function getCountryFacts(countryCode: string) {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `{
          country(code: "${countryCode}") {
            name
            native
            capital
            continent {
              name
            }
            currency
            languages
            awsRegion
          }
        }`,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.data.country;
  } catch (e) {
    console.error("Error fetching data:", e);
    return [];
  }
}
