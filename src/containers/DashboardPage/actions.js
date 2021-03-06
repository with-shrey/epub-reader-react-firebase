import {
    UPLOAD_BOOK,
    UPLOAD_BOOK_ERROR,
    UPLOAD_BOOK_SUCCESS,
    UPLOAD_BOOK_FIELD_UPDATE,
    SAVE_BOOK,
    SAVE_BOOK_ERROR,
    SAVE_BOOK_SUCCESS,
    FETCH_BOOK,
    FETCH_BOOK_SUCCESS,
    FETCH_BOOK_ERROR,
    FETCH_PUBLIC_BOOK,
    DELETE_BOOK,
    FETCH_PUBLIC_BOOK_ERROR, FETCH_PUBLIC_BOOK_SUCCESS, DELETE_BOOK_LOADING, DELETE_BOOK_ERROR, DELETE_BOOK_SUCCESS
} from "containers/DashboardPage/constants";

export function deleteBook(id) {
    return {
        type: DELETE_BOOK,
        id
    };
}

export function deleteBookSuccess() {
    return {
        type: DELETE_BOOK_SUCCESS,
    };
}

export function deleteBookError(error) {
    console.error(error);
    return {
        type: DELETE_BOOK_ERROR,
        error: error.message
    };
}


export function uploadBook(file) {
    return {
        type: UPLOAD_BOOK,
        file
    };
}

export function uploadBookSuccess(book) {
    return {
        type: UPLOAD_BOOK_SUCCESS,
        ...book
    };
}

export function uploadBookFailure(error) {
    console.error(error);
    return {
        type: UPLOAD_BOOK_ERROR,
        error: error.message
    };
}

export function uploadBookFieldUpdate(field, value) {
    return {
        type: UPLOAD_BOOK_FIELD_UPDATE,
        field,
        value
    };
}

export function saveBook() {
    return {
        type: SAVE_BOOK,
    };
}

export function saveBookSuccess() {
    return {
        type: SAVE_BOOK_SUCCESS,

    };
}

export function saveBookFailure(error) {
    console.error(error);
    return {
        type: SAVE_BOOK_ERROR,
        error: error.message
    };
}

export function fetchBooks() {
    return {
        type: FETCH_BOOK,
    };
}

export function fetchBooksSuccess(books) {
    return {
        type: FETCH_BOOK_SUCCESS,
        books
    };
}

export function fetchBooksFailure(error) {
    console.error(error);
    return {
        type: FETCH_BOOK_ERROR,
        error: error.message
    };
}

export function fetchPublicBooks() {
    return {
        type: FETCH_PUBLIC_BOOK,
    };
}

export function fetchPublicBooksSuccess(publicBooks) {
    return {
        type: FETCH_PUBLIC_BOOK_SUCCESS,
        publicBooks
    };
}

export function fetchPublicBooksFailure(error) {
    console.error(error);
    return {
        type: FETCH_PUBLIC_BOOK_ERROR,
        error: error.message
    };
}
