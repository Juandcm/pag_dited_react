// private function
// internal URI spitter method - direct from RFC 3986
export const splitUri = function (uri) {
	var splitted = uri.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/)
	return splitted
}

export function isUri(value) {
	if (!value) {
		return false
	}

	// check for illegal characters
	if (/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(value)) return false

	// check for hex escapes that aren't complete
	if (/%[^0-9a-f]/i.test(value)) return false
	if (/%[0-9a-f](:?[^0-9a-f]|$)/i.test(value)) return false

	var splitted = []
	var scheme = ''
	var authority = ''
	var path = ''
	var query = ''
	var fragment = ''
	var out = ''

	// from RFC 3986
	splitted = splitUri(value)
	scheme = splitted[1]
	authority = splitted[2]
	path = splitted[3]
	query = splitted[4]
	fragment = splitted[5]

	// scheme and path are required, though the path can be empty
	if (!(scheme && scheme.length && path.length >= 0)) return false

	// if authority is present, the path must be empty or begin with a /
	if (authority && authority.length) {
		if (!(path.length === 0 || /^\//.test(path))) return false
	} else {
		// if authority is not present, the path must not start with //
		if (/^\/\//.test(path)) return false
	}

	// scheme must begin with a letter, then consist of letters, digits, +, ., or -
	if (!/^[a-z][a-z0-9\+\-\.]*$/.test(scheme.toLowerCase())) return false

	// re-assemble the URL per section 5.3 in RFC 3986
	out += scheme + ':'
	if (authority && authority.length) {
		out += '//' + authority
	}

	out += path

	if (query && query.length) {
		out += '?' + query
	}

	if (fragment && fragment.length) {
		out += '#' + fragment
	}

	return out
}

export function isHttpUri(value, allowHttps) {
	if (!isUri(value)) {
		return false
	}

	var splitted = []
	var scheme = ''
	var authority = ''
	var path = ''
	var port = ''
	var query = ''
	var fragment = ''
	var out = ''

	// from RFC 3986
	splitted = splitUri(value)
	scheme = splitted[1]
	authority = splitted[2]
	path = splitted[3]
	query = splitted[4]
	fragment = splitted[5]

	if (!scheme) return false

	if (allowHttps) {
		if (scheme.toLowerCase() != 'https') return false
	} else {
		if (scheme.toLowerCase() != 'http') return false
	}

	// fully-qualified URIs must have an authority section that is
	// a valid host
	if (!authority) {
		return false
	}

	// enable port component
	if (/:(\d+)$/.test(authority)) {
		port = authority.match(/:(\d+)$/)[0]
		authority = authority.replace(/:\d+$/, '')
	}

	out += scheme + ':'
	out += '//' + authority

	if (port) {
		out += port
	}

	out += path

	if (query && query.length) {
		out += '?' + query
	}

	if (fragment && fragment.length) {
		out += '#' + fragment
	}

	return out
}

export function isHttpsUri(value) {
	return isHttpUri(value, true)
}

export function isWebUri(value) {
	return isHttpUri(value) || isHttpsUri(value)
}
