

import Logo from '../../../Assets/Img/Logo.svg'

import NavigationBar from '../../Atoms/NavgationBar';
const IPSFormSubmitted = () => {

    return (
        <div className="main">
            <NavigationBar step={0} />
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="ModalForm bg-white p-3">
                        <div className="p-3">
                            <div className="my-3">
                                <img className="logo d-block mx-auto mt-2" src={Logo} alt="Logo" />
                                <div className="py-3">
                                    <p className=" tf-light fw-800 thankyoup my-3 text-center">Thank You</p>
                                    <p className=" statusp fw-600 fs40 my-3 text-center">Your form has been submitted successfully and is currently being reviewed by Next Capital. For further information contact us at +92 300 367 2522</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default IPSFormSubmitted;