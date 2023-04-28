import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(2),
	},
	title: {
		marginBottom: theme.spacing(2),
	},
}));
