import React from 'react';

import {ProtectedRoute } from '../../util/route_util';

import HeaderContainer from './header_container';
// import Sidebar from './sidebar';
// import FeaturedContainer from './featured_container';
import FooterOne from './footer_one';
// import FooterTwo from './footer_two';
import { Route, Switch } from 'react-router-dom';
import Item from '../item_page/item_show_container';
import ItemIndex from '../item_page/item_index_container';
import ItemCreateContainer from '../item_form/item_create_container';
import ItemEditContainer from '../item_form/item_edit_container';
import CartIndexContainer from '../cart_page/cart_index_containter';
import Search from '../search_page/search_container'
import HomePage from '../home_page/home_page_container'
import UserProfile from '../user_profile/user_profile';

class MainBody extends React.Component {
    componentDidMount() {
        this.props.fetchItems()
        this.props.fetchReviews()
    }    

    componentDidUpdate(prevProps){
        if (JSON.stringify(prevProps.items[0]) != JSON.stringify(this.props.items[0])){
            this.props.fetchItems()
        }
    }

    render() {
        return(
            <div className="mainPage">
                <HeaderContainer/>
                <div className="mainPageBody">
                    {/* <Sidebar /> */}
                    <div className="smoke-screen" id="smoke-screen"></div>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/items/:id" component={Item} />
                        <Route exact path="/items" component={ItemIndex} /> 
                        <Route path="/search" component={Search} />
                        <ProtectedRoute exact path="/new_item" component={ItemCreateContainer} />
                        <ProtectedRoute exact path="/edit_item/:id" component={ItemEditContainer} />
						            <ProtectedRoute exact path="/cart" component={CartIndexContainer} />
						            <ProtectedRoute exact path="/users/:id" component={UserProfile} />
                    </Switch>
                </div>
                <FooterOne userId={this.props.currentUser.id}/>
                {/* <FooterTwo /> */}
            </div>
        )
    }
}

export default MainBody;