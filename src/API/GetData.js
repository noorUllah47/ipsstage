import axios from "axios";

class GetData {
    constructor() {
        this.result = [];
    }



    getEditCorrectionData = () => {
        let uid = localStorage.getItem('uid')

        const res = async () => {
            const resp = await axios
                .get(`https://ips-backend-staging.finqalab.com/v1/form/get?uid=${uid}`)
                .catch(function (error) {
                    console.log(error);
                });
            this.result = resp;
            // console.log(resp);
            return resp;
        };
        return res();
    };







    Return() {
        return this.result;
    }
}
export default new GetData();
