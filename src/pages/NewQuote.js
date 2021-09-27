import { useHistory } from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {

    //  History is a stack that adds or removes urls. Can .push() or .replace() (the current page).
    const history = useHistory();

    const addQuoteHandler = quoteData => {
        console.log(quoteData);

        history.push('/quotes');
    };

    return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;