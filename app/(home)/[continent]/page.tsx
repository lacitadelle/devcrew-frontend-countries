import CountryButton from "../../components/country-button";
import { getContinents, getCountriesByContinent } from "../../lib/data";

export default async function Page({
  params,
}: {
  params: { continent: string };
}) {
  const continents = getContinents();
  const requestedContinent = params.continent.replace(/-/g, " ");

  // look up continent code from the country's name
  const { code } = continents.find(
    (continent) => continent.name.toLowerCase() == requestedContinent
  );

  // use the code to fetch countries in that continent
  const countries = await getCountriesByContinent(code);

  console.log(countries);
  return (
    <div>
      {countries.map((country) => {
        return (
          <CountryButton
            key={country.code}
            {...country}
            continentPath={requestedContinent}
          />
        );
      })}
    </div>
  );
}
