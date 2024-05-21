import { Flex, Text } from "@mantine/core";
import Link from "next/link";
import styles from "./country-button.module.css";
interface CountryButtonProps {
  name: string;
  emoji: string;
  code: string;
  continentPath: string;
}

function CountryButton({
  name,
  emoji,
  code,
  continentPath,
}: CountryButtonProps) {
  return (
    <Link
      href={`/${continentPath}/${code.toLowerCase()}`}
      className={styles.link}
    >
      <Flex className={styles.link_container}>
        <Text>{emoji}</Text>
        <Text>{name}</Text>
      </Flex>
    </Link>
  );
}

export default CountryButton;
