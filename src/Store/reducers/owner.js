import axiosInstance from "../../services/axios.sevrice"

const fetchOwner = () =>{
    axiosInstance.get('', {
        params: {
          name: '131312312',
        },
      });
    
    
}
export default fetchOwner

