import { Fragment } from 'react';
import {useParams, Route, Link} from 'react-router-dom';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Max', text: 'Learning React is fun!'},
    {id: 'q2', author: 'Maximilian', text: 'Learning React is great!'}
];

//  Huh, I got this working: 
//  <Route path="/quotes/:quoteId/comments">
//  , but he did a more complicated thing....
//  He mentions your way is fine for a relative Route (this), but a Link needs this syntax.

const QuoteDetail = () => {

    //  returns a params object
    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    //  Means if quote is undefined (not false):
    if (!quote) {
        return <p>No quote found!</p>;
    }

    return <Fragment>
        <HighlightedQuote text={quote.text} author={quote.author} />
        <Route path={`/quotes/${params.quoteId}`} exact>
            <div className="centered">
                <Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>
                    Load Comments
                </Link>
            </div>
        </Route>
        <Route path={`/quotes/${params.quoteId}/comments`}>
            <Comments />
        </Route>
    </Fragment>;
};

export default QuoteDetail;