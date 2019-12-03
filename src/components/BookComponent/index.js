import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import PropTypes from 'prop-types'
import LazyImage from "components/LazyImage";
import coverPlaceHolderImage from 'assets/images/BookComponent/bookCoverPlaceholder.png'
import {withRouter} from "react-router-dom";

let BookComponent = (props) => {
    return (
        <div style={{height: '300px'}} onClick={() => props.history.push(`/reader/${props.id}`)}>
            <div style={{height: '80%'}}>
                <LazyImage style={{height: '100%', width: '100%'}} srcPreload={coverPlaceHolderImage}
                           srcLoaded={props.cover}/>
            </div>
            <div>{props.title}</div>
            <div><ProgressBar now={props.progress}/></div>
        </div>
    )
};
BookComponent = withRouter(BookComponent);
BookComponent.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
};

export default BookComponent;