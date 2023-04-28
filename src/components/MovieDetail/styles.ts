import { createMuiTheme, makeStyles } from '@material-ui/core/styles';

export const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#00bcd4',
		},
		secondary: {
			main: '#f44336',
		},
	},
});

export const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		padding: theme.spacing(3),
		backgroundColor: '#fafafa',
		boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
		borderRadius: '10px',
		maxWidth: '800px',
		margin: '0 auto',
	},
	title: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(2),
		fontWeight: 'bold',
		color: '#444',
		textTransform: 'uppercase',
		letterSpacing: '1px',
		textAlign: 'center',
	},
	overview: {
		marginBottom: theme.spacing(2),
		color: '#555',
		fontSize: '1.2rem',
		lineHeight: '1.5',
		textAlign: 'center',
	},
	poster: {
		maxWidth: '100%',
		height: 'auto',
	},
	releaseDate: {
		marginTop: theme.spacing(2),
		color: '#777',
		fontSize: '1rem',
		textAlign: 'center',
	},
}));
