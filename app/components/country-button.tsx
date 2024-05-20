import { Flex } from "@mantine/core";
import Link from "next/link";

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
    <Link href={`/${continentPath}/${code.toLowerCase()}`}>
      <Flex>
        <div>{emoji}</div>
        <div>{name}</div>
      </Flex>
    </Link>
  );
}

export default CountryButton;
