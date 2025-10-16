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

  // Add custom filter to merge base performers with overrides
  eleventyConfig.addFilter("mergePerformers", function(basePerformers, overrides) {
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
  });

  // Compile Tailwind before Eleventy processes the files.
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
