



import { Select } from 'antd';
import { useState } from 'react';
import PostData from "../../../API/PostData"
import { Button, Modal } from 'antd';
import UpperNavigation from '../../Atoms/UpperNavigation';
import BottomNavigation from '../../Atoms/BottomNavigation';
import { useNavigate } from 'react-router-dom';



const { Option } = Select;

const ReviewApplication = ({
    handleDrctChange,
    prevStep,
    nextStep,
    handleChange,
    values,
}) => {
    const [Loading, setLoading] = useState(false)
    const history = useNavigate();
    const handleSubmit = (e) => {

        e.preventDefault();
        // isConfirmModalVisible()


        setLoading(true)
        const res = PostData.SubmitDocument(values);
        res.then(value => {
            const FormSubmit = PostData.SubmitForm(values, onSuccess);
            FormSubmit.then(value => {
                console.log({ value })
                setLoading(false)
                // onSuccess()
            })
        })

    }
    const onSuccess = () => {
        history('/FormSubmitted')
    };





    return (

        <div className="container-fluid px-0 bg-grey-100">

            <div className="container px-0">
                <div >
                    <div className="px-1">


                        <div className="mt-3">
                            <div className="">
                                <UpperNavigation
                                    Title="Review Application"
                                    prevSec="Terms And Conditions"
                                    prevStep={prevStep} />

                            </div>
                        </div>

                        <div className="accordion mt-40" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button accordion-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Personal Details
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body px-0">
                                        <div className="row mt28">

                                            <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                <p className=" fw-600 fs16 tc-grey mb-0">Account Type</p>
                                                <p className=" fw-700 fs16 tc-plum Bold">
                                                    {values?.AccountType}
                                                </p>
                                            </div>

                                            <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                <p className=" fw-600 fs16 tc-grey mb-0">Full Name</p>
                                                <p className=" fw-700 fs16 tc-plum Bold">
                                                    {values?.firstName}
                                                </p>
                                            </div>

                                            <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                <p className=" fw-600 fs16 tc-grey mb-0">Father’s or Husband’s Name</p>
                                                <p className=" fw-700 fs16 tc-plum Bold">
                                                    {values?.RelativeName}
                                                </p>
                                            </div>

                                            <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                <p className=" fw-600 fs16 tc-grey  mb-0">Email Address</p>
                                                <p className=" fw-700 fs16 tc-plum Bold">
                                                    {values?.email}
                                                </p>
                                            </div>

                                            <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                <p className=" fw-600 fs16 tc-grey  mb-0">Phone Number</p>
                                                <p className=" fw-700 fs16 tc-plum Bold">
                                                    {values?.phoneNumber}
                                                </p>
                                            </div>

                                            <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                <p className=" fw-600 fs16 tc-grey mb-0">Date of Birth (DD-MM-YYYY)</p>
                                                <p className=" fw-700 fs16 tc-plum Bold">
                                                    {values?.BirthDay}
                                                </p>
                                            </div>
                                            <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                <p className=" fw-600 fs16 tc-grey mb-0">
                                                    Country of Birth
                                                </p>
                                                <p className=" fw-700 fs16 tc-plum Bold">
                                                    {values?.BirthCountry}
                                                </p>
                                            </div>
                                            <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                <p className=" fw-600 fs16 tc-grey mb-0">City of Birth</p>
                                                <p className=" fw-700 fs16 tc-plum Bold">
                                                    {values?.BirthCity}
                                                </p>
                                            </div>
                                            <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                <p className=" fw-600 fs16 tc-grey mb-0">Nationality</p>
                                                <p className=" fw-700 fs16 tc-plum Bold">
                                                    {values?.Nationality?.label}
                                                </p>
                                            </div>

                                            <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                <p className=" fw-600 fs16 tc-grey mb-0">Resident</p>
                                                <p className=" fw-700 fs16 tc-plum Bold">

                                                    {values?.Resident?.children}
                                                </p>
                                            </div>

                                            <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                <p className=" fw-600 fs16 tc-grey mb-0">
                                                    ID Document
                                                </p>
                                                <p className=" fw-700 fs16 tc-plum Bold">
                                                    {values?.IDType}
                                                </p>
                                            </div>

                                            <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                <p className=" fw-600 fs16 tc-grey mb-0">ID Document Number</p>
                                                <p className=" fw-700 fs16 tc-plum Bold">
                                                    {values?.CNIC}
                                                </p>
                                            </div>


                                            <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                <p className=" fw-600 fs16 tc-grey mb-0">ID Issue Date (DD-MM-YYYY)</p>
                                                <p className=" fw-700 fs16 tc-plum Bold">
                                                    {values?.IssueDate}
                                                </p>
                                            </div>
                                            {values?.lifeTimeExpiry ? <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                <p className=" fw-600 fs16 tc-grey mb-0">Life Time Expiry</p>
                                                <p className=" fw-700 fs16 tc-plum Bold">
                                                    True
                                                </p>
                                            </div> :
                                                <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">ID Expiry Date (DD-MM-YYYY)</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold">
                                                        {values?.ExpiryDate}
                                                    </p>
                                                </div>
                                            }
                                            <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                <p className=" fw-600 fs16 tc-grey mb-0">Gender</p>
                                                <p className=" fw-700 fs16 tc-plum Bold">{values?.Gender}</p>
                                            </div>

                                        </div>
                                        <div className="col-lg-12 col-md-6 col-12">
                                            <div className="row">
                                                <div className="col-md-6 col-12 mb-3">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">
                                                        Street Address
                                                    </p>
                                                    <p className=" fw-700 fs16 tc-plum Bold">
                                                        {values?.Street}
                                                    </p>
                                                </div>

                                                <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">Country</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold">
                                                        {values?.country?.label}
                                                    </p>
                                                </div>

                                                <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">Province / State</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold">
                                                        {values?.Provinces?.label}
                                                    </p>
                                                </div>

                                                <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">City</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold">
                                                        {values?.City?.label}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {!values?.MailingAddress &&
                                            <div className="col-lg-12 col-md-6 col-12">
                                                <div className="row">
                                                    <div className="col-md-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">
                                                            Mailing Street Address
                                                        </p>
                                                        <p className=" fw-700 fs16 tc-plum Bold">
                                                            {values?.MailStreet}
                                                        </p>
                                                    </div>

                                                    <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">Mailing Country</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold">
                                                            {values?.mailCountry?.label}
                                                        </p>
                                                    </div>

                                                    <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">Mailing Province / State</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold">
                                                            {values?.MailProvinces?.label}
                                                        </p>
                                                    </div>

                                                    <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">Mailing City</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold">
                                                            {values?.MailCity?.label}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        <div className="col-12">
                                            <div className="col-2">
                                                <button
                                                    className="LogoutBtn tc-blue bg-white w-100"

                                                    onClick={() => handleDrctChange("step", 1)}
                                                >Edit</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed accordion-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Financial Details
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div

                                    >
                                        <div className="row mt28">

                                            <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                <p className=" fw-600 fs16 tc-grey mb-0">Profession</p>
                                                <p className=" fw-700 fs16 tc-plum Bold">
                                                    {values.BussType?.children}
                                                </p>
                                            </div>
                                            <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                <p className=" fw-600 fs16 tc-grey mb-0">Source of Income</p>
                                                <p className=" fw-700 fs16 tc-plum Bold">
                                                    {values?.IncomeSource?.children}
                                                </p>
                                            </div>

                                            <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                <p className=" fw-600 fs16 tc-grey mb-0">Bussiness / Employer Name</p>
                                                <p className=" fw-700 fs16 tc-plum Bold">
                                                    {values?.CompName}
                                                </p>
                                            </div>

                                            <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                <p className=" fw-600 fs16 tc-grey  mb-0">Gross Annual Income</p>
                                                <p className=" fw-700 fs16 tc-plum Bold">
                                                    {values?.AnnualIncome}
                                                </p>
                                            </div>


                                        </div>
                                        <div className="col-lg-12 col-md-12 col-12">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">Other Income</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold">
                                                        {values?.OtherIncome}
                                                    </p>
                                                </div>
                                                <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">
                                                        Tax Filer
                                                    </p>
                                                    <p className=" fw-700 fs16 tc-plum Bold">
                                                        {values?.TaxFiler == 'YES' ? 'Yes' : "No"}
                                                    </p>
                                                </div>
                                                {values?.TaxFiler == 'YES' &&
                                                    <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">
                                                            Nation Tax Number
                                                        </p>
                                                        <p className=" fw-700 fs16 tc-plum Bold">
                                                            {values?.NTN}
                                                        </p>
                                                    </div>}
                                                <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">Political Exposed Person</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold">
                                                        {values?.PoliticalExpose}
                                                    </p>
                                                </div>
                                                <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">Bank Title</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold">
                                                        {values?.BankTitle}
                                                    </p>
                                                </div>

                                                <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">Bank Account Number</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold">

                                                        {values?.BankNum}
                                                    </p>
                                                </div>

                                                <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">Bank Branch Address</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold">
                                                        {values?.BankAddress}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-12">
                                            <div className="row">

                                                <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">Are You an American Citizen</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold">
                                                        {values?.USCitizen}
                                                    </p>
                                                </div>


                                                <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">US Green Card Holder</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold">
                                                        {values?.USGREENCARD}
                                                    </p>
                                                </div>
                                                {values?.USCitizen === 'NO' && values?.USGREENCARD === 'NO' ? null : <>
                                                    <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">US Tax Identification Number</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold">
                                                            {values?.USTIN}
                                                        </p>
                                                    </div>
                                                    {values?.USGREENCARD !== 'NO' &&
                                                        <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                            <p className=" fw-600 fs16 tc-grey mb-0"> US Green Card Number</p>
                                                            <p className=" fw-700 fs16 tc-plum Bold">
                                                                {values?.USGREENCARDNum}
                                                            </p>
                                                        </div>
                                                    }
                                                    <div className="col-lg-3 col-md-12 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">Overseas Contact Number</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold">
                                                            {values?.frgnNumber}
                                                        </p>
                                                    </div>

                                                    <div className="col-lg-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">Overseas Address</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold">
                                                            {values?.OverseasAddress}
                                                        </p>
                                                    </div>
                                                    <div className="col-lg-3 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">Have you Given Any Power of Attorney</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold">
                                                            {values?.PWRAttorney}
                                                        </p>
                                                    </div>
                                                    {values?.PWRAttorney === "YES" &&
                                                        <div className="col-lg-3 col-12 mb-3">
                                                            <p className=" fw-600 fs16 tc-grey mb-0">Attorney Address</p>
                                                            <p className=" fw-700 fs16 tc-plum Bold">
                                                                {values?.AttorneyAddress}
                                                            </p>
                                                        </div>
                                                    }
                                                    <div className="col-lg-3 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">Have you Renounced Foreign Citizenship</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold">
                                                            {values?.renouncedCitizenchip}
                                                        </p>
                                                    </div>
                                                    <div className="col-lg-3 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0"> W8BEN / W9USA Tax forms submitted</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold">
                                                            {values?.taxformSubmit}
                                                        </p>
                                                    </div>
                                                    {values?.taxformSubmit === 'YES' && <div className="col-lg-3 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0"> Date of Submittion</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold">
                                                            {values?.formSubmitDate}
                                                        </p>
                                                    </div>
                                                    }
                                                </>}






                                            </div>
                                        </div>


                                        <div className="col-12">
                                            <div className="col-2">
                                                <button
                                                    className="LogoutBtn tc-blue bg-white w-100"

                                                    onClick={() => handleDrctChange("step", 2)}
                                                >Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed accordion-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Joint
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body px-0 col-lg-12 col-md-12 col-12 ">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-6 col-12">
                                                <p className=" fw-600 fs16 tc-grey mb-0">Account Operating Instruction</p>
                                                <p className=" fw-700 fs16 tc-plum Bold">{values?.AccountOperatingInstruction?.children} Number</p>
                                            </div>

                                            <div className="col-lg-3 col-md-6 col-12">
                                                <p className=" fw-600 fs16 tc-grey mb-0">Tax Exemption</p>
                                                <p className=" fw-700 fs16 tc-plum Bold">
                                                    {values.TaxExemption == "YES" ? 'Yes' : 'No'}
                                                </p>
                                            </div>


                                            <div className="col-lg-3 col-md-6 col-12">
                                                <p className=" fw-600 fs16 tc-grey mb-0">
                                                    Mode of Transaction
                                                </p>
                                                <p className=" fw-700 fs16 tc-plum Bold">
                                                    {values.TransactionMode == "Cheque" ? 'Cheque' : 'RTGS(Prism)'}
                                                </p>
                                            </div>





                                        </div>



                                        <div className="col-12">
                                            <div className="col-2">
                                                <button
                                                    className="LogoutBtn tc-blue bg-white w-100"

                                                    onClick={() => handleDrctChange("step", 4)}
                                                >Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}







                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed accordion-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Next to Kin
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body px-0 col-lg-12 col-md-12 col-12 ">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-6 col-12">
                                                <p className=" fw-600 fs16 tc-grey mb-0">Full Name</p>
                                                <p className=" fw-700 fs16 tc-plum Bold">{values?.KinName}</p>
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-12">
                                                <p className=" fw-600 fs16 tc-grey mb-0">Father’s or Husband’s Name</p>
                                                <p className=" fw-700 fs16 tc-plum Bold">
                                                    {values?.KinFthrName}
                                                </p>
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-12">


                                                <p className="fw-600 fs16 tc-grey mb-0">
                                                    Email
                                                </p>
                                                <p className=" fw-700 fs16 tc-plum Bold" style={{ overflowWrap: 'break-word' }} >

                                                    {values?.KinEmail}

                                                </p>
                                            </div>


                                            <div className="col-lg-3 col-md-6 col-12">
                                                <p className=" fw-600 fs16 tc-grey mb-0">
                                                    Phone Number
                                                </p>
                                                <p className=" fw-700 fs16 tc-plum Bold">
                                                    {values?.KinPhoneNumber}
                                                </p>
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-12">
                                                <p className="fw-600 fs16 tc-grey mb-0">Relationship with Account Holder</p>
                                                <p className=" fw-700 fs16 tc-plum Bold">
                                                    {values?.KinRelation}
                                                </p>
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-12">
                                                <p className="fw-600 fs16 tc-grey mb-0">Landline Number</p>
                                                <p className=" fw-700 fs16 tc-plum Bold">
                                                    {values?.KinNumber}
                                                </p>
                                            </div>

                                            <div className="col-md-6 col-12">
                                                <p className=" fw-600 fs16 tc-grey mb-0">
                                                    Street Address
                                                </p>
                                                <p className=" fw-700 fs16 tc-plum Bold">
                                                    {values?.KinMailstreet}
                                                </p>
                                            </div>

                                        </div>


                                        <>
                                            <div className="accordion-body px-0 col-lg-12 col-md-12 col-12 ">
                                                <div className="row">
                                                    {/* <div className="col-lg-3 col-md-6 col-12">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">
                                                            Resident
                                                        </p>
                                                        <p className=" fw-700 fs16 tc-plum Bold">
                                                        </p>
                                                    </div> */}
                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">
                                                            Country
                                                        </p>
                                                        <p className=" fw-700 fs16 tc-plum Bold">
                                                            {values?.KinMailCountry?.label}
                                                        </p>
                                                    </div>

                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">
                                                            Province / State
                                                        </p>
                                                        <p className=" fw-700 fs16 tc-plum Bold">
                                                            {values?.KinMailProvinces?.label}
                                                        </p>
                                                    </div>




                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">
                                                            City
                                                        </p>
                                                        <p className=" fw-700 fs16 tc-plum Bold">
                                                            {values?.KinMailCity?.label}
                                                        </p>
                                                    </div>
                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">ID type</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold">
                                                            {values?.KinIDType}
                                                        </p>
                                                    </div>


                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">
                                                            Identity Document Number
                                                        </p>
                                                        <p className=" fw-700 fs16 tc-plum Bold">
                                                            {values?.KinCNIC}
                                                        </p>
                                                    </div>
                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">Account Operating Instruction</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold">
                                                            {values?.AccountOperatingInstruction?.children}
                                                        </p>
                                                    </div>


                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">
                                                            Tax Exemption
                                                        </p>
                                                        <p className=" fw-700 fs16 tc-plum Bold">
                                                            {values.TaxExemption == "YES" ? 'Yes' : 'No'}
                                                        </p>
                                                    </div>
                                                    {/* <div className="col-lg-3 col-md-6 col-12">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">Mode of Transaction</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold">
                                                            {values.TransactionMode == "Cheque" ? 'Cheque' : 'RTGS(Prism)'}
                                                        </p>
                                                    </div> */}

                                                    {/* <div className="col-lg-3 col-md-6 col-12">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">Zakat Exemption</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold">
                                                            {values.ZakatExemption == "YES" ? 'Yes' : "No"}
                                                        </p>
                                                    </div> */}
                                                </div>
                                            </div>

                                        </>

                                        <div className="col-12">
                                            <div className="col-2">
                                                <button
                                                    className="LogoutBtn tc-blue bg-white w-100"

                                                    onClick={() => handleDrctChange("step", 3)}
                                                >Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>




                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed accordion-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        Required Documents
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                    <div className="accordion-body px-0 col-lg-12 col-md-12 col-12 ">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-6 col-12">
                                                <p className=" fw-600 fs16 tc-grey mb-0">Id Document (Front)</p>
                                                <p className=" fw-700 fs16 tc-plum Bold">{values?.CNICFrontFile?.name}</p>
                                            </div>

                                            <div className="col-lg-3 col-md-6 col-12">
                                                <p className=" fw-600 fs16 tc-grey mb-0">Id Document (Back)</p>
                                                <p className=" fw-700 fs16 tc-plum Bold">
                                                    {values?.CNICBackFile?.name}
                                                </p>
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-12">


                                                <p className="fw-600 fs16 tc-grey mb-0">
                                                    Proof of Income
                                                </p>
                                                <p className=" fw-700 fs16 tc-plum Bold">

                                                    {values?.IncomeProof?.name}

                                                </p>
                                            </div>


                                            <div className="col-lg-3 col-md-6 col-12">
                                                <p className=" fw-600 fs16 tc-grey mb-0">
                                                    Proof of Mailing Address
                                                </p>
                                                <p className=" fw-700 fs16 tc-plum Bold">
                                                    {values?.MailingAddProof?.name}
                                                </p>
                                            </div>




                                            <div className="col-lg-3 col-md-6 col-12">
                                                <p className=" fw-600 fs16 tc-grey mb-0">
                                                    Next to Kin CNIC Front
                                                </p>
                                                <p className=" fw-700 fs16 tc-plum Bold">
                                                    {values?.kinCNICFrontFile?.name}
                                                </p>
                                            </div>

                                            <div className="col-lg-3 col-md-6 col-12">
                                                <p className=" fw-600 fs16 tc-grey mb-0">
                                                    Next to Kin CNIC Back
                                                </p>
                                                <p className=" fw-700 fs16 tc-plum Bold">
                                                    {values?.kinCNICBackFile?.name}
                                                </p>
                                            </div>
                                            {/* <div className="col-lg-3 col-md-6 col-12">
                                                <p className="fw-600 fs16 tc-grey mb-0">Bank Account Maintenance Certificate</p>
                                                <p className=" fw-700 fs16 tc-plum Bold">
                                                    {values?.AccMaintCertificate?.name}
                                                </p>
                                            </div> */}




                                        </div>



                                        <div className="col-12">
                                            <div className="col-2">
                                                <button
                                                    className="LogoutBtn tc-blue bg-white w-100"

                                                    onClick={() => handleDrctChange("step", 4)}
                                                >Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>











                        </div>
                    </div>

                </div>



                <form onSubmit={handleSubmit}>
                    <BottomNavigation first="Save & Exit" second="Submit" Nextdisabled={false} Loading={Loading} />
                </form>
            </div>




            {/*     <Modal
               
                visible={isConfirmModalVisible}
                onOk={handleConfirmOk}
                onCancel={handleConfirmCancel}
                footer={<>
                  <Button key="submit" type="primary" onClick={handleConfirmOk}>
                        Yes
                    </Button>
                    <Button key="submit" type="primary" onClick={handleConfirmCancel}>
                        Cancel
                    </Button>
                </>
                  
                    
                }
            >
                <h1 className="fs24 ls4 fw-800 t-grey-800 mb-3">Are you sure?</h1>

                <p className="fw-500 fs16 ms-auto">
                Do you want to save and exit the form. Are you sure you wish to proceed?
                </p>
           
           
            </Modal>
         */}
        </div>
    );
};

export default ReviewApplication;
