import axios from 'axios';
export interface IServices{
            "service_name": string,
            "service_display_name": string,
            "service_url":string,
            "no_of_services":number,
            "service_img_url": string
}
export default async function FetchCategory(url){
    return await axios.get(url)
    .then(res => res.data.services
    ).catch(err => {
        // Handle Error Here
        console.error(err); 
    });
}