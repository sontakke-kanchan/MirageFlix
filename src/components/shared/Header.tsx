import { Text, NavLink, Container, Group } from "@mantine/core";
import Logo from "../../assets/logo.svg";
export default function AppHeader() {
  return (
    <Container size="xl">
      <Group h={64} display="flex" justify="space-between" align="center">
        <Text fw={700} size="xl" c="violet.4" aria-label="MirageFlix logo">
          <img src={Logo} alt="MirageFlix Logo" className="w-36" />
        </Text>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <Group gap="sm" wrap="nowrap">
            <NavLink label="Home" c="dark.0" />
            <NavLink label="Explore" c="dark.0" />
            <NavLink label="My List" c="dark.0" style={{ whiteSpace: "pre" }} />
          </Group>
        </nav>
      </Group>
    </Container>
  );
}
