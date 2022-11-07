import { createTheme } from '@material-ui/core/styles'
const theme = createTheme({
	palette: {
		primary: {
			main: '#0D4A81',
		},
		secondary: {
			main: '#1944ac',
		},
		error: {
			main: '#ff5555',
		},
		background: {
			default: '#fff',
		},
	},
	typography: {
		fontFamily: '"Montserrat",sans-serif',
	},
})

export default theme
