import { Fragment } from 'react';
import {useParams} from 'react-router-dom';
import { Route } from "react-router-dom";


const QuoteDetail = () => {

    //  returns a params object
    const params = useParams();

    return <Fragment>
        <h1>Quote Detail Page</h1>
        <p>{params.quoteId}</p>
        <Route path="/quotes/:quoteId/comments">
            <p>Placeholder Text</p>
        </Route>
    </Fragment>;
};

export default QuoteDetail;