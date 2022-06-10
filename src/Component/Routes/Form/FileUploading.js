import { Select } from 'antd';
import Cross from "../../../Assets/Img/Group 208.png"
import SignDoc from '../../Atoms/SignDoc/SignDoc';
import { useState } from 'react';
import PostData from "../../../API/PostData"
import { Button, Modal } from 'antd';
import UpperNavigation from '../../Atoms/UpperNavigation';
import RequiredFeild from '../../Atoms/RequiredFeild';



const { Option } = Select;

const FileUploading = ({
    handleDrctChange,
    prevStep,
    nextStep,
    handleChange,
    values,
}) => {


    return (
        <div className="container-fluid pb-3">
            <div className="container">
                <div className="mt-3">
                    <div className="">
                        <UpperNavigation
                            Title="Required Documents"
                            prevSec="Next to Kin"
                            prevStep={prevStep} />

                        <form onSubmit={nextStep}>
                            <div className="row mt-40">
                                <div className="col-12">
                                    <div className="row mb-3">
                                        <div className="col-sm-6">
                                            <div className='CNIC'>
                                                <div className="row">
                                                    <p className="mt-3 tc-grey fw-700 fs14">CNIC Front & Back Images</p>
                                                    <div className="col-6">
                                                        {values.CNICFrontFile ? (
                                                            <>
                                                                <div className="d-table">
                                                                    <div className="Circularprogress yellow">
                                                                        <span className="Circularprogress-left">
                                                                            <span className="Circularprogress-bar"></span>
                                                                        </span>
                                                                        <span className="Circularprogress-right">
                                                                            <span className="Circularprogress-bar"></span>
                                                                        </span>
                                                                        <div className="Circularprogress-value t-pink fs12 fw-400">
                                                                            PDF
                                                                        </div>
                                                                    </div>
                                                                    <div className="position-absolute ml-55">
                                                                        <div>
                                                                            <p className="m-0 t-grey-600 fs16 fw-500 dotted">

                                                                                {values.CNICFrontFile.name}

                                                                            </p>
                                                                            <div>

                                                                                <p className="m-0 t-grey-400 fw-400 fs14 ">

                                                                                    {Math.round(values.CNICFrontFile.size / 1024)} kb /
                                                                                    {Math.round(values.CNICFrontFile.size / 1024)} kb
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="remove_File">
                                                                    <img src={Cross} alt="cross" className="mx-auto d-block" onClick={() => handleDrctChange('CNICFrontFile', '')} />
                                                                </div>


                                                            </>
                                                        ) : (
                                                            <input
                                                                type="file"
                                                                name="CNICFrontFile"
                                                                onChange={handleChange}
                                                                className="custom-file-input"
                                                                accept=".jpg, .jpeg, .png"
                                                                required
                                                            />
                                                        )}
                                                    </div>
                                                    <div className="col-6">
                                                        {values.CNICBackFile ? (
                                                            <>
                                                                <div className="d-table">
                                                                    <div className="Circularprogress yellow">

                                                                        <span className="Circularprogress-left">

                                                                            <span className="Circularprogress-bar"></span>
                                                                        </span>
                                                                        <span className="Circularprogress-right">


                                                                            <span className="Circularprogress-bar"></span>
                                                                        </span>

                                                                        <div className="Circularprogress-value t-pink fs12 fw-400">
                                                                            PDF
                                                                        </div>
                                                                    </div>


                                                                    <div className="position-absolute ml-55">
                                                                        <div>
                                                                            <p className="m-0 t-grey-600 fs16 fw-500 dotted">

                                                                                {values.CNICBackFile.name}

                                                                            </p>
                                                                            <div>

                                                                                <p className="m-0 t-grey-400 fw-400 fs14 ">




                                                                                    {Math.round(values.CNICBackFile.size / 1024)} kb /
                                                                                    {Math.round(values.CNICBackFile.size / 1024)} kb
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="remove_File">
                                                                    <img src={Cross} alt="cross" className="mx-auto d-block" onClick={() => handleDrctChange('CNICBackFile', '')} />
                                                                </div>


                                                            </>
                                                        ) : (
                                                            <input
                                                                type="file"
                                                                name="CNICBackFile"
                                                                onChange={handleChange}
                                                                className="custom-file-input"
                                                                accept=".jpg, .jpeg, .png"
                                                                required
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                                <p className="tc-lg-grey-2 fw-600 fs14 mt-3">The file uploaded must either be a PNG or JPEG file and must be 5MB or smaller</p>
                                            </div>



                                            <div className='CNIC'>
                                                <div className="row">
                                                    <p className="mt-3 tc-grey fw-700 fs14">Next to Kin CNIC Front & Back Images</p>
                                                    <div className="col-6">
                                                        {values.kinCNICFrontFile ? (
                                                            <>
                                                                <div className="d-table">
                                                                    <div className="Circularprogress yellow">
                                                                        <span className="Circularprogress-left">
                                                                            <span className="Circularprogress-bar"></span>
                                                                        </span>
                                                                        <span className="Circularprogress-right">
                                                                            <span className="Circularprogress-bar"></span>
                                                                        </span>
                                                                        <div className="Circularprogress-value t-pink fs12 fw-400">
                                                                            PNG
                                                                        </div>
                                                                    </div>
                                                                    <div className="position-absolute ml-55">
                                                                        <div>
                                                                            <p className="m-0 t-grey-600 fs16 fw-500 dotted">

                                                                                {values.kinCNICFrontFile.name}

                                                                            </p>
                                                                            <div>

                                                                                <p className="m-0 t-grey-400 fw-400 fs14 ">

                                                                                    {Math.round(values.kinCNICFrontFile.size / 1024)} kb /
                                                                                    {Math.round(values.kinCNICFrontFile.size / 1024)} kb
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="remove_File">
                                                                    <img src={Cross} alt="cross" className="mx-auto d-block" onClick={() => handleDrctChange('kinCNICFrontFile', '')} />
                                                                </div>


                                                            </>
                                                        ) : (
                                                            <input
                                                                type="file"
                                                                name="kinCNICFrontFile"
                                                                onChange={handleChange}
                                                                className="custom-file-input"
                                                                accept=".jpg, .jpeg, .png"
                                                                required
                                                            />
                                                        )}
                                                    </div>
                                                    <div className="col-6">
                                                        {values.kinCNICBackFile ? (
                                                            <>
                                                                <div className="d-table">
                                                                    <div className="Circularprogress yellow">

                                                                        <span className="Circularprogress-left">

                                                                            <span className="Circularprogress-bar"></span>
                                                                        </span>
                                                                        <span className="Circularprogress-right">


                                                                            <span className="Circularprogress-bar"></span>
                                                                        </span>

                                                                        <div className="Circularprogress-value t-pink fs12 fw-400">
                                                                            PNG
                                                                        </div>
                                                                    </div>


                                                                    <div className="position-absolute ml-55">
                                                                        <div>
                                                                            <p className="m-0 t-grey-600 fs16 fw-500 dotted">

                                                                                {values.kinCNICBackFile.name}

                                                                            </p>
                                                                            <div>

                                                                                <p className="m-0 t-grey-400 fw-400 fs14 ">




                                                                                    {Math.round(values.kinCNICBackFile.size / 1024)} kb /
                                                                                    {Math.round(values.kinCNICBackFile.size / 1024)} kb
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="remove_File">
                                                                    <img src={Cross} alt="cross" className="mx-auto d-block" onClick={() => handleDrctChange('kinCNICBackFile', '')} />
                                                                </div>


                                                            </>
                                                        ) : (
                                                            <input
                                                                type="file"
                                                                name="kinCNICBackFile"
                                                                onChange={handleChange}
                                                                className="custom-file-input"
                                                                accept=".jpg, .jpeg, .png"
                                                                required
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                                <p className="tc-lg-grey-2 fw-600 fs14 mt-3">The file uploaded must either be a PNG or JPEG file and must be 5MB or smaller</p>
                                            </div>

                                            <div className="MailingAddressProof">

                                                <div className="row">
                                                    <p className="mt-3 tc-grey fw-700 fs14">Proof of Mailing Address</p>
                                                    <div className="col-12">
                                                        {values.MailingAddProof ? (
                                                            <>
                                                                <div className="d-table">
                                                                    <div className="Circularprogress yellow">

                                                                        <span className="Circularprogress-left">

                                                                            <span className="Circularprogress-bar"></span>
                                                                        </span>
                                                                        <span className="Circularprogress-right">


                                                                            <span className="Circularprogress-bar"></span>
                                                                        </span>

                                                                        <div className="Circularprogress-value t-pink fs12 fw-400">
                                                                            PDF
                                                                        </div>
                                                                    </div>


                                                                    <div className="position-absolute ml-55">
                                                                        <div>
                                                                            <p className="m-0 t-grey-600 fs16 fw-500 dotted">

                                                                                {values.MailingAddProof.name}

                                                                            </p>
                                                                            <div>

                                                                                <p className="m-0 t-grey-400 fw-400 fs14 ">




                                                                                    {Math.round(values.MailingAddProof.size / 1024)} kb /
                                                                                    {Math.round(values.MailingAddProof.size / 1024)} kb
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="remove_File">
                                                                    <img src={Cross} alt="cross" className="mx-auto d-block" onClick={() => handleDrctChange('MailingAddProof', '')} />
                                                                </div>


                                                            </>
                                                        ) : (
                                                            <input
                                                                type="file"
                                                                name="MailingAddProof"
                                                                onChange={handleChange}
                                                                className="custom-file-input"
                                                                accept=".jpg, .jpeg, .png, .pdf"
                                                            // required
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                                <p className="tc-lg-grey-2 fw-600 fs14 mt-3">In case the address provided is same as in CNIC, no additional document is mandatory. In other cases, any of the following documents shall be obtained:
                                                    Utility bills; rental agreement; insurance policy, bank statement, NTN certificate, mobile bills or any other document considered acceptable by NCCPL.</p>
                                            </div>
                                            {/* <div className="IncomeProof">

                                                <div className="row">
                                                    <p className="mt-3 tc-grey fw-700 fs14">Proof of Income</p>
                                                    <div className="col-12">
                                                        {values.IncomeProof ? (
                                                            <>
                                                                <div className="d-table">
                                                                    <div className="Circularprogress yellow">

                                                                        <span className="Circularprogress-left">

                                                                            <span className="Circularprogress-bar"></span>
                                                                        </span>
                                                                        <span className="Circularprogress-right">


                                                                            <span className="Circularprogress-bar"></span>
                                                                        </span>

                                                                        <div className="Circularprogress-value t-pink fs12 fw-400">
                                                                            PDF
                                                                        </div>
                                                                    </div>


                                                                    <div className="position-absolute ml-55">
                                                                        <div>
                                                                            <p className="m-0 t-grey-600 fs16 fw-500 dotted">

                                                                                {values.IncomeProof.name}

                                                                            </p>
                                                                            <div>

                                                                                <p className="m-0 t-grey-400 fw-400 fs14 ">




                                                                                    {Math.round(values.IncomeProof.size / 1024)} kb /
                                                                                    {Math.round(values.IncomeProof.size / 1024)} kb
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="remove_File">
                                                                    <img src={Cross} alt="cross" className="mx-auto d-block" onClick={() => handleDrctChange('IncomeProof', '')} />
                                                                </div>


                                                            </>
                                                        ) : (
                                                            <input
                                                                type="file"
                                                                name="IncomeProof"
                                                                onChange={handleChange}
                                                                className="custom-file-input"
                                                                accept=".jpg, .jpeg, .png"
                                                                required
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                                <p className="tc-lg-grey-2 fw-600 fs14 mt-3">The file uploaded must either be a PNG or JPEG file and must be 5MB or smaller</p>
                                            </div> */}
                                        </div>
                                        <div className="col-sm-6">




                                            <div className="IncomeProof">

                                                <div className="row">
                                                    <p className="mt-3 tc-grey fw-700 fs14">Proof of Income</p>
                                                    <div className="col-12">
                                                        {values.IncomeProof ? (
                                                            <>
                                                                <div className="d-table">
                                                                    <div className="Circularprogress yellow">

                                                                        <span className="Circularprogress-left">

                                                                            <span className="Circularprogress-bar"></span>
                                                                        </span>
                                                                        <span className="Circularprogress-right">


                                                                            <span className="Circularprogress-bar"></span>
                                                                        </span>

                                                                        <div className="Circularprogress-value t-pink fs12 fw-400">
                                                                            PDF
                                                                        </div>
                                                                    </div>


                                                                    <div className="position-absolute ml-55">
                                                                        <div>
                                                                            <p className="m-0 t-grey-600 fs16 fw-500 dotted">

                                                                                {values.IncomeProof.name}

                                                                            </p>
                                                                            <div>

                                                                                <p className="m-0 t-grey-400 fw-400 fs14 ">




                                                                                    {Math.round(values.IncomeProof.size / 1024)} kb /
                                                                                    {Math.round(values.IncomeProof.size / 1024)} kb
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="remove_File">
                                                                    <img src={Cross} alt="cross" className="mx-auto d-block" onClick={() => handleDrctChange('IncomeProof', '')} />
                                                                </div>


                                                            </>
                                                        ) : (
                                                            <input
                                                                type="file"
                                                                name="IncomeProof"
                                                                onChange={handleChange}
                                                                className="custom-file-input"
                                                                accept=".jpg, .jpeg, .png"
                                                                required
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                                <p className="tc-lg-grey-2 fw-600 fs14 mt-3">The file uploaded must either be a PDF, PNG or JPEG file and must be 5MB or smaller</p>
                                            </div>












                                            {/* <div>

                                                <div className="row">
                                                    <p className="mt-3 tc-grey fw-700 fs14">Bank Account Maintenance Certificate</p>
                                                    <div className="col-12">
                                                        {values.AccMaintCertificate ? (
                                                            <>
                                                                <div className="d-table">
                                                                    <div className="Circularprogress yellow">

                                                                        <span className="Circularprogress-left">

                                                                            <span className="Circularprogress-bar"></span>
                                                                        </span>
                                                                        <span className="Circularprogress-right">


                                                                            <span className="Circularprogress-bar"></span>
                                                                        </span>

                                                                        <div className="Circularprogress-value t-pink fs12 fw-400">
                                                                            PDF
                                                                        </div>
                                                                    </div>


                                                                    <div className="position-absolute ml-55">
                                                                        <div>
                                                                            <p className="m-0 t-grey-600 fs16 fw-500 dotted">

                                                                                {values.AccMaintCertificate.name}

                                                                            </p>
                                                                            <div>

                                                                                <p className="m-0 t-grey-400 fw-400 fs14 ">




                                                                                    {Math.round(values.AccMaintCertificate.size / 1024)} kb /
                                                                                    {Math.round(values.AccMaintCertificate.size / 1024)} kb
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="remove_File">
                                                                    <img src={Cross} alt="cross" className="mx-auto d-block" onClick={() => handleDrctChange('AccMaintCertificate', '')} />
                                                                </div>


                                                            </>
                                                        ) : (
                                                            <input
                                                                type="file"
                                                                name="AccMaintCertificate"
                                                                onChange={handleChange}
                                                                className="custom-file-input"
                                                                accept=".jpg, .jpeg, .png, .pdf"
                                                                required
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                                <ol className="tc-lg-grey-2 fw-600 fs14 mt-3">
                                                    <li>Employment Certificate</li>
                                                    <li>Business: NTN Certificate, Sales Tax Registration or Certificate of Registration with Trade Bodies</li>
                                                    <li>Gift/ inheritance, Undertaking on standard format on Rs 100 non judicial stamp paper duly notarized</li>
                                                    <li>Retired, employment/ Retirement proof or Undertaking on standard format on Rs 100 non judicial stamp paper duly notarized</li>
                                                    <li>Others, as per nature of the Case</li>
                                                </ol>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 position-relative">
                                    <p className="mt-3 tc-grey fw-700 fs14">Provide Signature</p>
                                    <SignDoc handleDrctChange={handleDrctChange} />
                                    {values?.Signatures == "" && <RequiredFeild />}
                                </div>
                                {values?.Signatures && <p className="text-center mt-3">Signature Taken</p>}


                            </div>

                            <hr />




                            <div className="col-sm-12 text-end">
                                {/* <button className="btn-outlined fs16 px-3 py-1 mx-1">
                                    Save & Exit
                                </button> */}
                                <button
                                    className="btn-filled fs16 px-3 py-1 mx-1"
                                    type="submit"
                                    style={{ width: "111px", height: "44px" }}
                                >
                                    Next
                                </button>
                            </div>










                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default FileUploading;
