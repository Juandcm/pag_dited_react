import { replace } from 'lodash/replace'

export const AddClassModalBody = () => {
	if (document.body.classList.contains('modal-open')) {
		let classList = document.body.classList.value
		document.body.className = replace('modal-open', '', classList)
	} else {
		let classList = document.body.classList.value
		document.body.className = `${classList} modal-open`
	}
}
