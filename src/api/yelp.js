import axios from "axios";
export default axios.create({
   
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{
        Authorization:
        "Bearer HEs4zcloukUhnmHEv8I9UiPedIEShV9oC2JGxEtX5MeITQj_RaXI0bgbu5v78EBSG-B45Y-2jIGB0tVTIHI_FkC9P-uXex43HjvdjXisd_A29FhW7vz-mU3EISv4ZHYx"
    },

});




