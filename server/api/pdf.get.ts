import puppeteer from 'puppeteer';

const cssContent = `
> * + * {
  margin-top: 0.75em;
}

ul,
ol {
  padding: 0 1rem;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.1;
}

code {
  background-color: rgba(#616161, 0.1);
  color: #616161;
}

pre {
  background: black;
  color: white;
  font-family: "JetBrainsMono", monospace;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
}

pre > code {
  color: inherit;
  padding: 0;
  background: none;
  font-size: 0.8rem;
}


img {
  max-width: 100%;
  height: auto;
}

blockquote {
  padding-left: 1rem;
  border-left: 2px solid black;
}

hr {
  border: none;
  border-top: 1px solid black;
  margin: 2rem 0;
}
`;

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  console.log(query);
  try {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.setContent(query.htmlString?.toString(), {
      waitUntil: 'networkidle0',
    });

    await page.emulateMediaType('screen');

    await page.addStyleTag({ content: cssContent });

    const pdf = await page.pdf({ path: 'output.pdf', format: 'a4' });

    await browser.close();

    setResponseHeaders(event, {
      'Content-Type': 'application/pdf',
      'Content-Length': pdf.length,
    });

    return pdf;
  } catch (error) {
    console.error(error);
  }
});
