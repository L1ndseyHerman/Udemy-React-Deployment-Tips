import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {

    const addQuoteHandler = quoteData => {
        console.log(quoteData);
    };

    return <QuoteForm onAddProp={addQuoteHandler} />;
};

export default NewQuote;