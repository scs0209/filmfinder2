import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(2),
	},
	title: {
		marginBottom: theme.spacing(2),
	},
	pagination: {
		marginTop: theme.spacing(2),
		display: 'flex',
		justifyContent: 'center',
		'& .MuiPaginationItem-root': {
			borderRadius: '50%',
		},
		'& .Mui-selected': {
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.common.white,
		},
	},
}));
