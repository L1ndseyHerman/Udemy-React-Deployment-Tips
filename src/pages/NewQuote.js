import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/hooks/use-http';
import {addQuote} from '../lib/lib/api';

const NewQuote = () => {

    const {sendRequest, status} = useHttp(addQuote);

    //  History is a stack that adds or removes urls. Can .push() or .replace() (the current page).
    const history = useHistory();

    useEffect(() => {
        if (status === 'completed') {
            history.push('/quotes');
        }
    }, [status, history]);

    const addQuoteHandler = quoteData => {

        sendRequest(quoteData);

        console.log(quoteData);

        history.push('/quotes');
    };

    return <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />;
};

export default NewQuote;