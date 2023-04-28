import React, { VFC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppBar, Toolbar, IconButton, TextField } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { searchMovies } from '../../actions';
import { useStyles } from './styles'; // styles.ts 파일에서 useStyles 함수 불러오기
import MovieList from '../../components/MovieList/MovieList';

const SearchBar: VFC = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [query, setQuery] = useState('');

	const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
	};

	const handleSearch = async () => {
		await dispatch(searchMovies(query) as any);
	};

	const handleKeyPress = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			console.log('enter');
			handleSearch();
		}
	};

	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<TextField
							placeholder="Search…"
							value={query}
							onChange={handleQueryChange}
							onKeyPress={handleKeyPress}
							classes={{
								root: classes.inputRoot,
							}}
							inputProps={{ 'aria-label': 'search', className: classes.inputInput }}
						/>
					</div>
					<IconButton aria-label="search" color="inherit" onClick={handleSearch}>
						<SearchIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<MovieList />
		</div>
	);
};

export default SearchBar;
