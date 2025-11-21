import { exec } from "node:child_process";
import { chromium } from "playwright";
import { promisify } from "node:util";
import { mkdir } from "node:fs/promises";

const execAsync = promisify(exec);

// Function to wait for the server to be ready
async function waitForServer(url, timeout = 30000) {
  const startTime = Date.now();
  while (true) {
    try {
      const response = await fetch(url, { method: "HEAD" });
      if (response.ok) {
        console.log("Server is ready.");
        return;
      }
    } catch (error) {
      // Ignore connection errors and try again
    }
    if (Date.now() - startTime > timeout) {
      throw new Error("Server did not start within the timeout period.");
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
}

async function generatePdf() {
  let serverProcess;
  let browser;

  try {
    // Ensure the output directory exists
    await mkdir("dist", { recursive: true });

    // 1. Start the eleventy dev server
    console.log("Starting Eleventy dev server...");
    serverProcess = exec("pnpm run serve");

    // Add logging for server process
    serverProcess.stdout.on("data", (data) =>
      console.log(`Server stdout: ${data}`),
    );
    serverProcess.stderr.on("data", (data) =>
      console.error(`Server stderr: ${data}`),
    );

    // 2. Wait for the server to be ready
    const baseUrl = "http://localhost:8080";
    await waitForServer(baseUrl);

    // 3. Launch the browser and create a page
    console.log("Launching headless browser...");
    browser = await chromium.launch();
    const page = await browser.newPage();

    // 4. Navigate to the program page and generate the PDF
    const programUrl = `${baseUrl}/program`;
    console.log(`Navigating to ${programUrl}`);
    await page.goto(programUrl, { waitUntil: "networkidle" });

    await page.evaluate(() => {
      const programLayout = document.querySelector(".program-layout1");
      if (programLayout) {
        const styleTag = programLayout.nextElementSibling;
        const headHTML = document.head.innerHTML;
        const bodyClasses = document.body.className;
        const styleTagHTML = styleTag ? styleTag.outerHTML : "";

        document.documentElement.innerHTML = `
          <head>
            ${headHTML}
          </head>
          <body class="${bodyClasses}">
            ${programLayout.outerHTML}
            ${styleTagHTML}
          </body>
        `;
      }
    });

    console.log("Generating PDF...");
    await page.pdf({
      path: "dist/program.pdf",
      format: "Letter",
      printBackground: true,
      margin: {
        top: "1in",
        right: "1in",
        bottom: "1in",
        left: "1in",
      },
    });

    console.log("✅ PDF successfully generated at dist/program.pdf");
  } catch (error) {
    console.error("❌ An error occurred during PDF generation:", error);
    process.exitCode = 1;
  } finally {
    // 5. Clean up
    if (browser) {
      console.log("Closing browser...");
      await browser.close();
    }
    if (serverProcess) {
      console.log("Stopping Eleventy dev server...");
      serverProcess.kill();
    }
  }
}

generatePdf();
