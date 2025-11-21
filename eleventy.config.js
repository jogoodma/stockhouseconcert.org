import fs from "fs";
import path from "path";

import cssnano from "cssnano";
import postcss from "postcss";
import tailwindcss from "@tailwindcss/postcss";

export default function (eleventyConfig) {
  const processor = postcss([
    // Compile Tailwind.
    tailwindcss(),

    // Minify Tailwind CSS.
    cssnano({
      preset: "default",
    }),
  ]);

  // Add custom filter to merge base performers with overrides for a single song
  eleventyConfig.addFilter(
    "mergePerformers",
    function (basePerformers, overrides) {
      if (!overrides) {
        return basePerformers;
      }

      const merged = {};

      // First, add all overrides
      for (const [instrument, players] of Object.entries(overrides)) {
        merged[instrument] = players;
      }

      // Then, add base performers for instruments not in overrides
      for (const [instrument, players] of Object.entries(basePerformers)) {
        if (!merged[instrument]) {
          merged[instrument] = players;
        }
      }

      return merged;
    },
  );

  // Add custom filter to merge all performers across all songs
  eleventyConfig.addFilter(
    "mergeAllPerformers",
    function (basePerformers, songs) {
      const allPerformers = {};

      // Start with base performers
      for (const [instrument, players] of Object.entries(basePerformers)) {
        allPerformers[instrument] = [...players];
      }

      // Process each song's overrides
      for (const song of songs) {
        if (song.performerOverrides) {
          for (const [instrument, players] of Object.entries(
            song.performerOverrides,
          )) {
            if (!allPerformers[instrument]) {
              allPerformers[instrument] = [];
            }
            // Add players that aren't already in the list
            for (const player of players) {
              const exists = allPerformers[instrument].some(
                (p) => p.name === player.name && p.gradYear === player.gradYear,
              );
              if (!exists) {
                allPerformers[instrument].push(player);
              }
            }
          }
        }
      }

      return allPerformers;
    },
  );

  // Compile Tailwind before Eleventy processes the files.
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.on("eleventy.before", async () => {
    const tailwindInputPath = path.resolve("./src/assets/styles/index.css");

    const tailwindOutputPath = "./dist/assets/styles/index.css";

    const cssContent = fs.readFileSync(tailwindInputPath, "utf8");

    const outputDir = path.dirname(tailwindOutputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const result = await processor.process(cssContent, {
      from: tailwindInputPath,
      to: tailwindOutputPath,
    });

    fs.writeFileSync(tailwindOutputPath, result.css);
  });

  return {
    dir: { input: "src", output: "dist" },
  };
}
