import axios from 'axios';
export default function FetchCategory():any{
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
        const categoryDetails:String[] = res.data;
        return categoryDetails
    }) .catch(err => {
        // Handle Error Here
        console.error(err);
        return []
    });
}