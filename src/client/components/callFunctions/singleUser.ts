import {User} from '../../../server/db/index'
import axios from 'axios'

export const getSingleUser = async function(id){
    try {
        const {data} = await axios.get(`/${id}`, )
        console.log(data)
    } catch (error) {
        console.log(error)
    }
    
}