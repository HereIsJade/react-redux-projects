export function selectBook (book){
	// console.log("selected:", book.title)
	return {
		type: 'BOOK_SELECTED',
		payload: book
	}
}