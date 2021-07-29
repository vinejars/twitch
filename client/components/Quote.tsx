import React, { useEffect, useState } from 'react';
import { getRandomQuote, QuoteType } from './callFunctions/lotr';

const Quote: React.FunctionComponent = (props) => {
	const [quote, setQuote] = useState<QuoteType>({ quote: '', name: '' });

	async function grabQuote() {
		let quoteObj: QuoteType = await getRandomQuote();
		if (quoteObj.name) {
			setQuote(quoteObj);
		}
	}

	useEffect(() => {
		grabQuote();
	}, []);

	return (
		<div id='quote-info'>
			{quote.name ? (
				<div id='quote'>
					<h3> {quote.quote}</h3>
					<h5> -- {quote.name}</h5>
				</div>
			) : null}
		</div>
	);
};

export default Quote;
