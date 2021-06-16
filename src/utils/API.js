import axios from "axios";


const populate = {
    populateEmployees: function() {
        return axios.get('https://randomuser.me/api/?results=10');
    }
};

export default populate;