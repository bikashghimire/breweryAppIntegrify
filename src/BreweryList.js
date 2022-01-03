import React from 'react';
import FetchApi from './usefetch';
import Button from './Button';

const BreweryList = () => {

	const { data: userData, error, loading } = FetchApi('/breweries')
	if (loading) return "Loading..."
	if (error) throw error

	

	if ((userData.length) > 0) {
		return (
			<div className="brewerylist-page">
				{userData.map((user) => (
					<div className="user-items">
						
					
						<div>
							<div className="user-name">Name:{user.name}</div>
							<div className="username">Brewery_type:{user.brewery_type}</div>
							<div className="username">CIty:{user.city}</div>
							
						</div>
						<Button id={user.id} />
					</div>

				))}
			</div>
		);
	}


};

export default BreweryList;
