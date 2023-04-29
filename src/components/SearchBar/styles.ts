import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	appBar: {
		backgroundColor: '#222',
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: theme.palette.grey[100],
		'&:hover': {
			backgroundColor: theme.palette.grey[200],
		},
		width: '100%',
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
		[theme.breakpoints.up('md')]: {
			width: 800,
			'&:focus': {
				width: 850,
			},
		},
	},
}));
