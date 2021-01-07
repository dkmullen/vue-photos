// All the code related to reaching out to the Imgur api
import qs from 'qs';
import axios from 'axios';

const CLIENT_ID = '540ff24bde17e9f';
const ROOT_URL = 'https://api.imgur.com';

export default {
    login() {
        const querystring = {
            client_id: CLIENT_ID, // var names are fitted for the qs library which helps make such strings
            response_type: 'token'
        };
        // push user to the imgur authorize location
        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
    },

    fetchImages(token) {
        return axios.get(`${ROOT_URL}/3/account/me/images`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    },

    uploadImages(images, token) { 
        // Array.from converts an array-like object into a real array
        // imgur accepts one image per post, so we map the array to one post per image
        const promises = Array.from(images).map(image => {
            // FormData is vanilla js to turn the reference to the image into the image itself
            const formData = new FormData();
            formData.append('image', image); // imgur spec calls for key-> image, with an image as value

            return axios.post(`${ROOT_URL}/3/image`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        });
        // Promise.all is a built in function that waits for all promises in an array of promises to resolve.
        // This keeps this function from moving on until all images upload
        return Promise.all(promises);
    }
}