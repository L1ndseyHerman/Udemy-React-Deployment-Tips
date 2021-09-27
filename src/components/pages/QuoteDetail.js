import { Fragment } from 'react';
import {useParams, Route} from 'react-router-dom';

import Comments from '../../components/comments/Comments';

//  Huh, I got this working: 
//  <Route path="/quotes/:quoteId/comments">
//  , but he did a more complicated thing....
//  He mentions your way is fine for a relative Route (this), but a Link needs this syntax.

const QuoteDetail = () => {

    //  returns a params object
    const params = useParams();

    return <Fragment>
        <h1>Quote Detail Page</h1>
        <p>{params.quoteId}</p>
        <Route path={`/quotes/${params.quoteId}/comments`}>
            <Comments />
        </Route>
    </Fragment>;
};

export default QuoteDetail;