import { Fragment } from "react";
import { Route } from "react-router";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";


export const ProfileTemplate = (props) => { //path, exact, Component

    const { Component, ...restProps } = props;

    return <Route {...restProps} render={(propsRoute) => { //props.location,props.history,props.match

        return <Fragment>
            <Header {...propsRoute}/>

            <Component {...propsRoute} />


            <hr className="mt-5" />
            <Footer />

        </Fragment>
    }} />

}