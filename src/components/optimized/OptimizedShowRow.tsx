/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState, useDeferredValue } from "react";
import { Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
import ShowCard from "../shared/ShowCard";
import { tmdbConfig } from "../../config/tmdb";

type Show = {
  id: number;
  title: string;
  posterUrl: string | null;
  year?: number;
};

type Props = {
  query?: string;
};

export default function OptimizedShowRow({ query = "" }: Props) {
  const [allShows, setAllShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState(true);

  const deferredQuery = useDeferredValue(query);

  useEffect(() => {
    fetch(
      `${tmdbConfig.baseUrl}/trending/movie/week?api_key=${tmdbConfig.apiKey}`,
    )
      .then((res) => res.json())
      .then((data) => {
        const mapped: Show[] = data.results.map((m: any) => ({
          id: m.id,
          title: m.title,
          posterUrl: m.poster_path
            ? `${tmdbConfig.imageBaseUrl}${m.poster_path}`
            : null,
          year: m.release_date
            ? new Date(m.release_date).getFullYear()
            : undefined,
        }));

        setAllShows(mapped);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredShows = useMemo(() => {
    const q = deferredQuery.toLowerCase();
    return allShows.filter((show) => show.title.toLowerCase().includes(q));
  }, [allShows, deferredQuery]);

  if (loading) {
    return <Text c="dark.2">Loading…</Text>;
  }

  return (
    <Carousel
      slideSize="auto"
      slideGap="md"
      withControls
      controlSize={40}
      nextControlIcon={<IconChevronRight size={32} />}
      previousControlIcon={<IconChevronLeft size={32} />}
      styles={{
        controls: {
          top: "50%",
          transform: "translateY(-50%)",
          transition: "opacity 150ms ease",
          zIndex: 2,
        },

        control: {
          backgroundColor: "transparent",
          border: "none",
          boxShadow: "none",
          color: "#fff",

          "&[data-inactive]": {
            opacity: 0,
            pointerEvents: "none",
          },

          "&:hover": {
            backgroundColor: "transparent",
            color: "#8A2BE2", // KS accent
          },
        },

        indicator: {
          display: "none",
        },
      }}
      className="group"
    >
      {filteredShows.map((show) => (
        <Carousel.Slide key={show.id}>
          {/* 🔑 FIXED WIDTH WRAPPER */}
          <div style={{ width: 160 }}>
            <ShowCard
              title={show.title}
              year={show.year}
              posterUrl={show.posterUrl ?? undefined}
            />
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
