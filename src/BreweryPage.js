import React from 'react';
import { Link, useParams } from 'react-router-dom';
import FetchApi from './usefetch';

// https://www.openbrewerydb.org/documentation/01-listbreweries
const BreweryPage = () => {
	const { id } = useParams();
	console.log("id", id)
	const { data: eachData, loading, error } = FetchApi(`/breweries/${id}`)
	console.log("Eachdata", eachData)

	if (loading) return "Loading..."
	if (error) return error
	return (
		<>
		
			<div className="user-info">
				<p>Name: {eachData.name}</p>
                <p>Brewery_type: {eachData.brewery_type}</p>
				<p>Street:{eachData.street}</p>
				<p>Address_2: {eachData.address_2}</p>
				<p>Address_3: {eachData.address_3}</p>
				<p>City: {eachData.city}</p>
				<p>State: {eachData.state}</p>
				<p>County_Province: {eachData.county_province}</p>
				<p>Postal_code: {eachData.postal_code}</p>

		    <div className="home-link">
				<Link to="/"><button className="button"> Go Back </button></Link>
			 </div>

			 </div>
			

		</>
	);
};

export default BreweryPage;
