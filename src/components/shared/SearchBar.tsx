import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="rounded-xl p-[1px] bg-gradient-to-r from-violet-500/40 via-violet-500/20 to-transparent hover:from-violet-500/60">
      <TextInput
        aria-label="Search movies"
        placeholder="Search for movies or shows..."
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        leftSection={<IconSearch size={16} />}
        radius="md"
        size="md"
        classNames={{
          input:
            "bg-[#111111] text-white placeholder:text-gray-400 border-none",
        }}
      />
    </div>
  );
}
