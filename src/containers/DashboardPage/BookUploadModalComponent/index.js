import React, {useRef} from "react";
import Modal from 'react-bootstrap/Modal';
import ButtonComponent from "components/ButtonComponent";
import * as PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {
    makeSelectBookDialogOpen,
    makeSelectSaveStatus,
    makeSelectUploadFile,
    makeSelectUploadStatus
} from "containers/DashboardPage/selectors";
import Archive from 'epubjs/lib/archive';
import ePubjs from 'epubjs';
import {saveBook, uploadBook, uploadBookFieldUpdate} from "containers/DashboardPage/actions";
import Spinner from "react-bootstrap/Spinner";
import InPlaceLoader from "components/InPlaceLoader";
import configureStore from "setup/redux/store";
import {Switch} from "react-bootstrap";
import {makeSelectUser, makeSelectUserIsAdmin} from "containers/LoginSignupPage/selectors";

function BookUploadModalComponent(props) {
    const fileUpload = useRef(null);
    const handleClose = () => dispatch(uploadBookFieldUpdate('dialogOpen', false));
    const dispatch = useDispatch();
    const {title, cover, isPublic} = useSelector(makeSelectUploadFile());
    const userIsAdmin = useSelector(makeSelectUserIsAdmin());
    const {dialogOpen} = useSelector(makeSelectBookDialogOpen());
    const {loading, error} = useSelector(makeSelectUploadStatus());
    const {loading: saving, error: savingError} = useSelector(makeSelectSaveStatus());
    const fieldChanged = (field) => (event) => dispatch(uploadBookFieldUpdate(field, event.target.value));
    const checkboxChanged = (field) => (event) => {
        console.log(event.target.value);
        dispatch(uploadBookFieldUpdate(field, event.target.value === 'true'));
    }
    const handleSaveBook = () => dispatch(saveBook());
    const startFileUpload = $event => {
        const file = fileUpload.current.files[0];
        if (file) {
            dispatch(uploadBook(file));
        }
    };

    const renderPublicCheckbox = (
        <div>
            <input
                style={{display: 'inline', width: 'unset'}}
                type="checkbox"
                checked={isPublic}
                onChange={checkboxChanged('isPublic')}
                value={isPublic ? 'false' : 'true'}
            />
            Make Public
        </div>
    );

    return (
        <Modal show={dialogOpen} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add new book</Modal.Title>
            </Modal.Header>
            <Modal.Body className="translucentBox">
                <form>

                    <div className="error">{error}</div>
                    <div className="error">{savingError}</div>

                    <input type="file"
                           ref={fileUpload}
                           onChange={startFileUpload}
                           accept=".epub,"
                    />
                    {
                        loading && <div> Uploading
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Uploading...</span>
                            </Spinner>
                        </div>
                    }
                    <input style={{marginTop: '20px'}} value={title} onChange={fieldChanged('title')} type="text"
                           placeholder="Title"/>
                    <input style={{marginTop: '20px'}} value={cover} onChange={fieldChanged('cover')} type="text"
                           placeholder="Cover Image URL"/>

                    {
                        //Show Public Checkbox if user is Admin
                        userIsAdmin && renderPublicCheckbox
                    }
                </form>
            </Modal.Body>
            {
                saving || loading ? (
                    <Modal.Footer>
                        <InPlaceLoader/>
                    </Modal.Footer>

                ) : (
                    <Modal.Footer>
                        <ButtonComponent onClick={handleSaveBook}>
                            Save
                        </ButtonComponent>
                        <ButtonComponent onClick={handleClose}>
                            Close
                        </ButtonComponent>
                    </Modal.Footer>
                )
            }

        </Modal>
    )
}


export default BookUploadModalComponent;