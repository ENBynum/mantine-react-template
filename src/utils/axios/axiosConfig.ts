import axios from 'axios'



const server = axios.create({
	baseURL: 'import.meta.env.VITE_API_DOMAIN',
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
		'Access-Control-Allow-Headers': '*'
	},
	withCredentials: true
})

export default server