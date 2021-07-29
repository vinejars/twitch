import axios from "axios";

export type QuoteType = {
  quote?: string;
  name?: string;
};
export async function getRandomQuote() {
  let { data } = await axios.get("https://the-one-api.dev/v2/quote", {
    headers: { Authorization: `Bearer ${process.env.LOTR_KEY}` },
  });
  let randomQuoteIdx: number = Math.floor(Math.random() * 1000);
  let quoteObj: any = data.docs[randomQuoteIdx];
  let response = await axios.get(
    `https://the-one-api.dev/v2/character/${quoteObj.character}`,
    {
      headers: { Authorization: `Bearer ${process.env.LOTR_KEY}` },
    }
  );
  let name = response.data.docs[0].name;
  let quote = quoteObj.dialog;
  return { quote: quote, name: name };
}
