import { Fragment, useEffect } from 'react';
//  useRouteMatch gets the main routes in the nested routes, so u only need to change the
//  main routes in App.js, and then these will auto-change, no need to change them here.
import {useParams, Route, Link, useRouteMatch} from 'react-router-dom';
import useHttp from '../hooks/hooks/use-http';
import { getSingleQuote } from '../lib/lib/api';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';
import LoadingSpinner from '../components/UI/LoadingSpinner';

//  Huh, I got this working: 
//  <Route path="/quotes/:quoteId/comments">
//  , but he did a more complicated thing....
//  He mentions your way is fine for a relative Route (this), but a Link needs this syntax.

const QuoteDetail = () => {

    const match = useRouteMatch();
    //  returns a params object
    const params = useParams();

    //  More object destructuring.
    const {quoteId} = params;

    const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if (status === 'pending') {
        return <div className='centered'>
            <LoadingSpinner />
        </div>;
    }

    if (error) {
        return <p className='centered'>{error}</p>;
    }

    //  Means if quote is undefined (not false):
    if (!loadedQuote.text) {
        return <p>No quote found!</p>;
    }

    return <Fragment>
        <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
        <Route path={match.path} exact>
            <div className="centered">
                <Link className='btn--flat' to={`${match.url}/comments`}>
                    Load Comments
                </Link>
            </div>
        </Route>
        <Route path={`${match.path}/comments`}>
            <Comments />
        </Route>
    </Fragment>;
};

export default QuoteDetail;