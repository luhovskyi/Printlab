import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageContent from '../components/PageContent';
import {render} from 'react-dom';
import Main from './Main'
import NotFound from './NotFound';
import Admin from './Admin';
import AdminOrders from './AdminOrders'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/admin" component={Admin} />
            <Route path="/admin/:id" component={AdminOrders} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export  default Router;