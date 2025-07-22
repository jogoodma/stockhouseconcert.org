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

  //compile tailwind before eleventy processes the files
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
