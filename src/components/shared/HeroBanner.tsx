import { Button, Stack, Title, Text, Group } from "@mantine/core";
import { IconPlayerPlay, IconInfoCircle } from "@tabler/icons-react";
import SearchBar from "./SearchBar";
type Props = {
  title: string;
  tagline: string;
  backdropUrl?: string;
  searchQuery: string;
  onSearchChange: (value: string) => void;
};
export default function HeroBanner({
  title,
  tagline,
  backdropUrl,
  searchQuery,
  onSearchChange,
}: Props) {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative w-full rounded-[6px] overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        {backdropUrl ? (
          <img
            src={backdropUrl}
            alt=""
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-dark-8" />
        )}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        {/* Brand accent */}
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-900/30 to-transparent" />
      </div>
      {/* Content */}
      <div className="relative px-8 py-8 md:px-14 md:py-14 lg:py-16 lg:px-16">
        <Stack gap="sm" maw={520}>
          <Title id="hero-title" order={1} c="dark.0">
            {title}
          </Title>
          <Text c="dark.1">{tagline}</Text>
          <Group mt="md">
            <Button
              leftSection={<IconPlayerPlay size={18} />}
              variant="gradient"
              gradient={{ from: "violet", to: "grape" }}
            >
              Watch Now
            </Button>
            <Button
              leftSection={<IconInfoCircle size={18} />}
              variant="subtle"
              color="dark"
            >
              More Info
            </Button>
          </Group>
          {/* 🔍 Search INSIDE hero */}
          <div className="pt-4 max-w-md">
            <SearchBar value={searchQuery} onChange={onSearchChange} />
          </div>
        </Stack>
      </div>
    </section>
  );
}
