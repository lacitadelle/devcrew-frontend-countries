import { Group } from "@mantine/core";
import BackButton from "../../../components/back-button";
import { getCountryFacts } from "../../../lib/data";
import styles from "./country-page.module.css";

export default async function Page({
  params,
}: {
  params: { countryId: string };
}) {
  const country = await getCountryFacts(params.countryId);
  return (
    <div className={styles.facts_container}>
      <Group align="center" className={styles.header_group}>
        <BackButton className={styles.back_button} />
        <h1>Country Information</h1>
      </Group>
      <p>
        <strong>Emoji:</strong> {country.emoji}
      </p>
      <p>
        <strong>Name:</strong> {country.name}
      </p>
      <p>
        <strong>Native Name:</strong> {country.native}
      </p>
      <p>
        <strong>Capital:</strong> {country.capital}
      </p>
      <p>
        <strong>ISO 3166-1 Code:</strong> {country.code}
      </p>
      <p>
        <strong>Continent:</strong> {country.continent.name}
      </p>
      <p>
        <strong>Currencies:</strong> {country.currency}
      </p>
      <p>
        <strong>Phone Code:</strong> +{country.phone}
      </p>
      <p>
        <strong>AWS Region:</strong> {country.awsRegion}
      </p>
      <h2>Languages</h2>
      <ol>
        {country.languages.map((language, index) => (
          <li key={index}>
            <p>
              <strong>Name:</strong> {language.name}
            </p>
            <p>
              <strong>ISO 639-1 Code:</strong> {language.code}
            </p>
            <p>
              <strong>Native Name:</strong> {language.native}
            </p>
            <p>
              <strong>Direction:</strong>{" "}
              {language.rtl ? "Right to Left" : "Left to Right"}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
