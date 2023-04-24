import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: theme.palette.grey[100],
		'&:hover': {
			backgroundColor: theme.palette.grey[200],
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
	},
	searchIcon: {
		position: 'absolute',
		top: '50%',
		transform: 'translateY(-50%)',
		marginLeft: theme.spacing(1),
		pointerEvents: 'none',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 7),
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: 200,
			'&:focus': {
				width: 250,
			},
		},
	},
	grid: {
		marginTop: theme.spacing(2),
	},
	noResults: {
		marginTop: theme.spacing(2),
	},
}));
