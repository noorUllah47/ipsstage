import { Select, DatePicker } from 'antd';
import moment from "moment";
import ReactPhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import Select1 from "react-select";
import countriesStateCities from '../../../Assets/Data/countries_states_cities.json'
import RequiredFeild from '../../Atoms/RequiredFeild';



const { Option } = Select;

const JointApplication = ({
    handleDrctChange,
    prevStep,
    nextStep,
    handleChange,
    values,
}) => {

    const customStyle = {

        control: (base, state) => ({
            ...base,
            '&:hover': { borderColor: '#E5E7EB' }, // border style on hover
            border: '1px solid #E5E7EB', // default border color
            height: "47px",
            borderRadius: "0.5rem ",
            boxShadow: 'none', // no box-shadow
        }),
    }

    const ZakatExemptionReason = [
        // { value: "01", label: "Self" },
        { value: "02", label: "Non-Muslim" },
        { value: "03", label: "Foriegn National" },
        { value: "04", label: "Due to Fiqah" },
        { value: "05", label: "Other" },
    ];

    const AnualIncomes = [
        { value: "J07", label: "Up to 100,000" },
        { value: "J08", label: "100,001 - 250,000" },
        { value: "J09", label: "250,001 - 500,000" },
        { value: "J10", label: "Above 500,000" },
    ];

    const AnualIncomesNormal = [
        { value: "J01", label: "Up to 100,000" },
        { value: "J02", label: "100,001 - 250,000" },
        { value: "J03", label: "250,001 - 500,000" },
        { value: "J04", label: "500,001 - 1,000,000" },
        { value: "J05", label: "1,000,001 - 2,500,000" },
        { value: "J06", label: "Above 2,500,000" },
    ];

    const JointProfession = [
        { value: "P001", label: "Agriculturist" },
        { value: "P002", label: "Business" },
        { value: "P003", label: "Business Executive" },
        { value: "P005", label: "House Hold" },
        { value: "P006", label: "House Wife" },
        { value: "P007", label: "Industrialist" },
        { value: "P012", label: "Professional" },
        { value: "P013", label: "Retired Person" },
        { value: "P014", label: "Service" },
        { value: "P015", label: "Student" },
        { value: "P019", label: "Govt / Public Sector" },
        { value: "P999", label: "Other" },
    ];


    const JointResidents = [
        { value: "01", label: "Resident" },
        { value: "02", label: "Non-Resident" },
    ];

    const JointIncomeSources = [
        { value: "P001", label: "Salaried" },
        { value: "P002", label: "Business" },
        { value: "P003", label: "Inheritance" },
        { value: "P005", label: "Gift" },
        { value: "P006", label: "Retired" },
        { value: "P007", label: "Other" },
    ];

    const JointIDTypes = [
        { value: "CNIC", label: "CNIC" },
        { value: "SNIC", label: "SNIC" },
        { value: "Passport", label: "Passport" },
        { value: "NICOP", label: "NICOP" },
        { value: "POC", label: "POC" },
        { value: "ARC", label: "ARC" },

    ];

    const hanldeResendentialCountries = (e) => {
        hanldeResidentailProvincesAndCities('')
        handleDrctChange("JointCity", '')
        handleDrctChange("Jointcountry", e)
        handleDrctChange("JointresidentiaProvinceList", e.states)
    }


    const hanldeResidentailProvincesAndCities = (e) => {
        handleDrctChange("JointProvinces", e)
        handleDrctChange("JointresidentialCitiesList", e.cities)
        handleDrctChange("JointCity", '')
    }


    const hanldeMailCountries = (e) => {
        handleDrctChange("JointmailProvinceList", e.states)
        handleDrctChange("JointmailCountry", e)
        hanldeJointMailProvincesAndCities('')
        handleDrctChange("JointMailCity", '')
    }



    const hanldeJointMailProvincesAndCities = (e) => {
        handleDrctChange("JointMailProvinces", e)
        handleDrctChange("JointmailCitiesList", e?.cities)
        handleDrctChange("JointMailCity", '')
        // setJointMailCity(e.cities)
    }



    const format = (date) => {
        return moment(date, "DD-MM-YYYY")
    }



    return (
        <div className="container-fluid pb-3">
            <div className="container">
                <div className="mt-3">
                    <div className="">
                        <div className="d-inline-flex w-100">
                            <h1 className="fs24 ls4 fw-800 t-grey-800">Joint Applicant</h1>
                            <p
                                className="fw-500 fs16 ms-auto t-grey-400 cursorPointer"
                                onClick={prevStep}
                            >
                                Back to Bank Mandate
                            </p>
                        </div>
                        <form onSubmit={nextStep}>
                            <div className="row">

                                <div className="col-12 col-sm-6 col-lg-4  d-flex flex-column mb-3">
                                    <label
                                        htmlFor="JointAccountTitle"
                                        className="col-12 col-form-label fw-500"
                                    >
                                        Joint Account Title
                                    </label>
                                    <input
                                        type="text"
                                        name="JointAccountTitle"
                                        className="form-control mt-auto"
                                        placeholder="Account Title"
                                        value={values.JointAccountTitle}
                                        onChange={handleChange}
                                        id="JointAccountTitle"
                                        required
                                    />
                                </div>

                                <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                    <label
                                        htmlFor="JointRelativeName"
                                        className="col-12 col-form-label fw-500"
                                    >
                                        Father / Husband's Name
                                    </label>
                                    <input
                                        type="text"
                                        name="JointRelativeName"
                                        className="form-control mt-auto"
                                        placeholder="Realitive Name"
                                        value={values.JointRelativeName}
                                        onChange={handleChange}
                                        id="JointRelativeName"
                                        required
                                    />
                                </div>

                                <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                    <label htmlFor="email" className="col-form-label fw-500">
                                        Email Address
                                    </label>
                                    <div className="col-12 mt-auto">
                                        <input
                                            type="email"
                                            name="Jointemail"
                                            className="form-control"
                                            placeholder="joe@company.com"
                                            onChange={handleChange}
                                            value={values.Jointemail}
                                            // value={values.email ? values?.email : signedEmail}
                                            id="email"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                    <label htmlFor="phone" className="col-form-label fw-500">
                                        Phone Number
                                    </label>
                                    <div className="mt-auto">
                                        <ReactPhoneInput
                                            country={"pk"}

                                            inputExtraProps={{
                                                name: "JointPhoneNumber",
                                                required: true,
                                                autoFocus: true,

                                            }}

                                            id="phone"
                                            countryCodeEditable={false}

                                            containerclassName=""

                                            // defaultCountry={"sg"}


                                            value={values.JointPhoneNumber}
                                            // value={ 92 + values.JointPhoneNumber.substr(1)}
                                            onChange={(text) => handleDrctChange("JointPhoneNumber", text)}
                                            specialLabel={false}

                                            inputclassName="form-control p10"
                                        />
                                        {values.JointPhoneNumber.length < 5 && <RequiredFeild />}
                                        {/* {!values?.JointPhoneNumber && values.continues ? <span id="MailCountry" className="text-danger fs10" >Please provide JointPhoneNumber</span> : ""} */}
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                    <label htmlFor="Number" className="col-form-label fw-500">
                                        Phone Number
                                    </label>
                                    <div className="col-12 mt-auto">
                                        <input
                                            type="phone"
                                            name="JointNumber"
                                            className="form-control"
                                            placeholder="(051) 12345678"
                                            onChange={handleChange}
                                            value={values.JointNumber}
                                            // value={values.Number ? values?.Number : signedNumber}
                                            id="Number"
                                            minlength="11"
                                            maxlength="11"
                                        />
                                    </div>
                                </div>
                                {/* <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                    <label htmlFor="FaxNumber" className="col-form-label fw-500">
                                        Fax Number
                                    </label>
                                    <div className="col-12 mt-auto">
                                        <input
                                            type="phone"
                                            name="JointFaxNumber"
                                            className="form-control"
                                            placeholder="12345678"
                                            onChange={handleChange}
                                            value={values.JointFaxNumber}
                                            // value={values.FaxNumber ? values?.FaxNumber : signedFaxNumber}
                                            id="FaxNumber"

                                        />
                                    </div>
                                </div> */}


                                <div className='mt-40'>
                                    <hr className="t-grey-200 mt-40 mb-40"></hr>
                                </div>

                                <div className="d-inline-flex w-100 mt-40 d-flex flex-column mb-3">
                                    <h2 className="fs18 fw-800 t-grey-800">Permanent Address



                                    </h2>
                                </div>

                                <div className="col-12 mb-3 d-flex flex-column">
                                    <label
                                        htmlFor="Jointstreet"
                                        className="col-form-label fw-500"
                                    >
                                        Street Address
                                    </label>
                                    <input
                                        type="text"
                                        name="Jointstreet"
                                        className="form-control mt-auto"
                                        placeholder="H# 12 Block A, PECHS"
                                        onChange={handleChange}
                                        value={values.Jointstreet}
                                        id="Jointstreet"
                                        required
                                        maxLength="40"
                                    />
                                    {/* {!values.Jointstreet ? <span id="area" className="text-danger fs10" style={{ display: "none" }} >Please fill Street</span> : ""} */}

                                </div>

                                <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                                    <label
                                        htmlFor="Jointcountry"
                                        className="col-form-label fw-500"
                                    >
                                        Country
                                    </label>


                                    <div className="mt-auto">


                                        <Select1
                                            styles={customStyle}
                                            onChange={(e) => hanldeResendentialCountries(e)}
                                            // onChange={(e) => handleDrctChange("Jointcountry", e)}
                                            placeholder="Select any one"
                                            id="Jointcountry"
                                            options={countriesStateCities}
                                            defaultInputValue={values?.Jointcountry?.label ? values?.Jointcountry?.label : undefined}
                                            defaultValue={values?.Jointcountry?.label ? values?.Jointcountry?.label : undefined}
                                            value={values?.Jointcountry}

                                        />

                                        {!values.Jointcountry?.label && <RequiredFeild />}
                                        {/* {!values.Jointcountry?.label && values.continues ? <span id="Jointcountry" className="text-danger fs10" >Please select Country</span> : ""} */}
                                    </div >
                                </div >


                                <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                                    <label
                                        htmlFor="JointProvinces"
                                        className="col-form-label fw-500"
                                    >
                                        Province/State
                                    </label>
                                    <div className="mt-auto">

                                        <Select1
                                            styles={customStyle}
                                            // onChange={(e) => handleDrctChange("JointProvinces", e)}
                                            onChange={(e) => hanldeResidentailProvincesAndCities(e)}
                                            placeholder="Select any one"
                                            id="JointProvinces"
                                            options={values?.JointresidentiaProvinceList}
                                            defaultValue={values?.JointProvinces?.label ? values?.JointProvinces?.label : undefined}
                                            value={values?.JointProvinces}

                                        />
                                        {!values?.JointProvinces?.label && <RequiredFeild />}
                                        {/* {!values?.JointProvinces?.label && values.continues ? <span id="province" className="text-danger fs10" >Please select Province</span> : ""} */}
                                    </div >
                                </div >

                                <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                                    <label htmlFor="JointCity" className="col-form-label fw-500">
                                        City
                                    </label>

                                    <div className="mt-auto">
                                        <Select1
                                            styles={customStyle}
                                            onChange={(e) => handleDrctChange("JointCity", e)}
                                            placeholder="Select any one"
                                            id="JointCity"
                                            options={values?.JointresidentialCitiesList}
                                            defaultValue={values.JointCity.label ? values.JointCity.label : undefined}
                                            value={values.JointCity}
                                        />
                                        {!values?.JointCity?.label && <RequiredFeild />}
                                        {/* {!values?.JointCity?.label && values.continues ? <span id="city" className="text-danger fs10" >Please select JointCity</span> : ""} */}
                                    </div >
                                </div >


                                <div className="col-sm-9 col-md-10 my-auto mt-auto d-flex">
                                    <input
                                        className="form-check-input me-1 mb-3"
                                        type="checkbox"
                                        defaultChecked={values.JointMailingAddress}
                                        onChange={handleChange}
                                        name="JointMailingAddress"
                                        id="JointMailingAddress"
                                    />
                                    <label
                                        className="form-check-label fw-500 fs16 mailing-checkbox-label Bold"
                                        htmlFor="JointMailingAddress"
                                    >
                                        My permanent and mailing addresses are the same
                                    </label>
                                </div>
                                {!values.JointMailingAddress && (
                                    <div className="d-inline-flex w-100 mailing-address-container mb-3">
                                        <h2 className="fs18 fw-800 t-grey-800">Mailing Address

                                        </h2>
                                    </div>
                                )}
                                <div className="col-12">
                                    <div className="row">
                                        {!values.JointMailingAddress ? (
                                            <>


                                                <div className="col-12 d-flex flex-column mb-3">
                                                    <label
                                                        htmlFor="JointMailstreet"
                                                        className="col-form-label fw-500"
                                                    >
                                                        Street Address
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="JointMailstreet"
                                                        className="form-control mt-auto"
                                                        placeholder="H# 12 Block A, PECHS"
                                                        onChange={handleChange}
                                                        value={values.JointMailstreet}
                                                        id="JointMailstreet"
                                                        required
                                                    />
                                                    {/* {!values.JointMailstreet && <RequiredFeild />}
                              {!values?.JointMailstreet && values.continues ? <span id="JointMailstreet" className="text-danger fs10" >Please fill Street</span> : ""} */}
                                                </div>

                                                <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                                                    <label
                                                        htmlFor="JointmailCountry"
                                                        className="col-form-label fw-500"
                                                    >
                                                        Country
                                                    </label>
                                                    <div className="mt-auto">

                                                        {/* {alert('2')} */}
                                                        <Select1
                                                            styles={customStyle}
                                                            onChange={(e) => hanldeMailCountries(e)}
                                                            placeholder="Select any one"
                                                            id="JointmailCountry"
                                                            options={countriesStateCities}
                                                            defaultValue={values.JointmailCountry?.label ? values.JointmailCountry?.label : undefined}
                                                            defaultInputValue={values?.JointmailCountry?.label ? values?.JointmailCountry?.label : undefined}
                                                            value={values?.JointmailCountry}
                                                        />
                                                        {!values?.JointmailCountry?.label && <RequiredFeild />}

                                                    </div >
                                                </div >


                                                {/* {values?.JointmailCountry?.label == 'Pakistan' ? ( */}
                                                <>
                                                    <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                                                        <label
                                                            htmlFor="JointMailProvinces"
                                                            className="col-form-label fw-500"
                                                        >
                                                            Province/State
                                                        </label>

                                                        <div className="mt-auto">
                                                            <Select1
                                                                styles={customStyle}
                                                                onChange={(e) => hanldeJointMailProvincesAndCities(e)}
                                                                placeholder="Select any one"
                                                                id="JointMailProvinces"
                                                                options={values?.JointmailProvinceList}
                                                                defaultValue={values.JointMailProvinces.label ? values.JointMailProvinces.label : undefined}
                                                                value={values?.JointMailProvinces}
                                                            />
                                                            {!values?.JointMailProvinces?.label && <RequiredFeild />}

                                                        </div >


                                                    </div >


                                                    <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                                                        <label
                                                            htmlFor="JointMailCity"
                                                            className="col-form-label fw-500"
                                                        >
                                                            City
                                                        </label>
                                                        <div className="mt-auto">
                                                            <Select1
                                                                styles={customStyle}
                                                                onChange={(e) =>
                                                                    handleDrctChange("JointMailCity", e)
                                                                }
                                                                placeholder="Select any one"
                                                                id="JointMailCity"

                                                                options={values?.JointmailCitiesList}
                                                                defaultValue={values.JointMailCity.label ? values.JointMailCity.label : undefined}
                                                                value={values?.JointMailCity}
                                                            />
                                                            {!values?.JointMailCity?.label && <RequiredFeild />}


                                                        </div >
                                                    </div >
                                                </>
                                            </>
                                        ) : (
                                            <></>
                                        )}
                                    </div >
                                </div >

                                <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                    <label
                                        htmlFor="JointBirthDay"
                                        className="col-form-label fw-500"
                                    >
                                        Date of Birth
                                    </label>
                                    <div className="mt-auto">
                                        <DatePicker
                                            className="form-control"
                                            onChange={(date, dateString) => { handleDrctChange('JointBirthDay', dateString) }}
                                            defaultPickerValue={moment(new Date().setFullYear(new Date().getFullYear() - 18))}
                                            disabledDate={d => !d || d.isAfter(moment(new Date().setFullYear(new Date().getFullYear() - 18)))}
                                            format="DD-MM-YYYY"
                                            defaultValue={values?.JointBirthDay ? format(values?.JointBirthDay) : undefined} />
                                        {!values?.JointBirthDay && <RequiredFeild />}
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                                    <label
                                        htmlFor="JointBirthCountry"
                                        className="col-form-label fw-500"
                                    >
                                        Country of Birth
                                    </label>
                                    <input
                                        type="text"
                                        name="JointBirthCountry"
                                        className="form-control mt-auto"
                                        placeholder="Pakistan"
                                        onChange={handleChange}
                                        value={values.JointBirthCountry}
                                        id="JointBirthCountry"
                                        required
                                    />
                                </div>
                                <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                                    <label
                                        htmlFor="JointBirthCity"
                                        className="col-form-label fw-500"
                                    >
                                        City of Birth
                                    </label>
                                    <input
                                        type="text"
                                        name="JointBirthCity"
                                        className="form-control mt-auto"
                                        placeholder="Pakistan"
                                        onChange={handleChange}
                                        value={values.JointBirthCity}
                                        id="JointBirthCity"
                                        required
                                    />
                                </div>

                                <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                                    <label
                                        htmlFor="JointNationality"
                                        className="col-form-label fw-500"
                                    >
                                        Nationality
                                    </label>
                                    <div className="mt-auto">

                                        <Select1
                                            onChange={(e) => handleDrctChange("JointNationality", e)}
                                            placeholder="Select any one"
                                            id="JointNationality"
                                            options={countriesStateCities}
                                            defaultInputValue={values?.JointNationality?.label ? values?.JointNationality?.label : undefined}
                                            defaultValue={values?.JointNationality?.label ? values?.JointNationality?.label : undefined}
                                            value={values?.JointNationality}
                                            styles={customStyle}

                                        />
                                        {!values?.JointNationality?.label && <RequiredFeild />}
                                    </div >

                                </div >

                                <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                    <label
                                        htmlFor="JointResident"
                                        className="col-form-label fw-500"
                                    >
                                        Resident Status in Pakistan
                                    </label>
                                    <div className="mt-auto">
                                        <Select defaultValue={values.JointResident ? values.JointResident : undefined} placeholder="Select any one" onSelect={(value, event) => handleDrctChange("JointResident", event)} rules={[{ required: true }]}>

                                            {JointResidents.map(residents => (
                                                <Option key={residents.value}>{residents.label}</Option>
                                            ))}

                                        </Select>
                                        {!values?.JointResident?.value && <RequiredFeild />}
                                    </div >
                                    {/* {!values.JointResident ? <span id="JointResident" className="text-danger fs10" style={{ display: "none" }} >Please select Resident</span> : ""} */}

                                </div >

                                <div className="col-12 col-sm-4 d-flex flex-column mb-3">
                                    <label
                                        htmlFor="JointIDType"
                                        className="col-12 col-form-label fw-500"
                                    >
                                        Choose Identity Document
                                    </label>

                                    <>

                                        <div className="mt-auto">
                                            <Select defaultValue={values?.JointIDType ? values?.JointIDType : undefined} placeholder="ID Type" onSelect={(value, event) => handleDrctChange("JointIDType", event.value)} rules={[{ required: true }]}>

                                                {JointIDTypes.map(idType => (
                                                    <Option key={idType?.value}>{idType?.label}</Option>
                                                ))}

                                            </Select>
                                            {values?.JointIDType === "" && <RequiredFeild />}
                                        </div>
                                        {/*{!values.JointIDType && values.continues ? <span id="JointIDType" className="text-danger fs10" >Please Select JointIDType</span> : ""} */}

                                    </>


                                </div>

                                <div className="col-12 mb-3 col-sm-8 d-flex flex-column">
                                    <label
                                        htmlFor="JointCNIC"
                                        className="col-12 col-form-label fw-500"
                                    >
                                        {/* JointCNIC */}
                                        {values?.JointIDType ? values.JointIDType : 'CNIC'} Number
                                    </label>

                                    <input
                                        type={values.JointIDType == 'Passport' ? 'text' : 'number'}
                                        name="JointCNIC"
                                        className="form-control"
                                        placeholder="44444-2223334-7"
                                        value={values.JointCNIC}
                                        onChange={handleChange}
                                        id="JointCNIC"
                                        minLength={values.JointIDType == 'Passport' ? '55' : '13'}
                                        maxLength={values.JointIDType == 'Passport' ? '55' : '13'}
                                        required
                                    />
                                    {/* {!values.JointCNIC && values.continues ? <span id="JointIDType" className="text-danger fs10" >Please fill CNIC</span> : ""} */}
                                </div>

                                <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                    <label
                                        htmlFor="issueDay"
                                        className="col-12 col-form-label fw-500"
                                    >
                                        Issue Date (e.g. 28-02-1995)
                                    </label>

                                    <div className="mt-auto">

                                        <DatePicker
                                            className="form-control"
                                            onChange={(date, dateString) => { handleDrctChange('JointIssueDate', dateString) }}
                                            format="DD-MM-YYYY"
                                            disabledDate={d => !d || d.isBefore(format(values?.JointBirthDay)) || d.isAfter(format(values?.JointExpiryDate))}
                                            defaultValue={values?.JointIssueDate ? moment(values?.JointIssueDate, "DD-MM-YYYY") : undefined} />
                                        {!values?.JointIssueDate && <RequiredFeild />}
                                    </div>
                                    {/* {!values.JointIssueDate && values.continues ? <span className="text-danger fs10" >Please select Issue Date</span> : ""} */}
                                </div>

                                {!values?.JointlifeTimeExpiry && (
                                    <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">

                                        {/* {values?.JointIssueDate && <> */}


                                        <label
                                            htmlFor="expiryDay"
                                            className="col-12 col-form-label fw-500"
                                        >
                                            Expiry Date (e.g. 28-02-1995)
                                        </label>
                                        <div className="mt-auto">

                                            <DatePicker
                                                className="form-control"
                                                onChange={(date, dateString) => { handleDrctChange('JointExpiryDate', dateString) }}
                                                format="DD-MM-YYYY"
                                                disabledDate={d => !d || d.isBefore(format(values?.JointIssueDate)) || d.isBefore(format(values?.JointBirthDay))}
                                                defaultValue={values?.JointExpiryDate ? format(values?.JointExpiryDate) : undefined} />
                                            {!values?.JointExpiryDate && <RequiredFeild />}
                                            {/*{!values.JointExpiryDate && !values.lifeTimeExpiry && values.continues ? <span className="text-danger fs10" >Please select Expiry Date</span> : ""} */}

                                        </div>


                                    </div>
                                )}


                                <div className="col-12 col-sm-6 my-auto col-lg-4 d-flex flex-column mb-3">
                                    <label
                                        htmlFor="JointlifeTimeExpiry"
                                        className="col-12 pb-1 pt-0 col-form-label fw-500"
                                    >
                                        Expiry Limit
                                    </label>
                                    <div className="mt-auto">
                                        <input
                                            className="form-check-input me-1"
                                            type="checkbox"
                                            defaultChecked={values.JointlifeTimeExpiry}
                                            onChange={handleChange}
                                            name="JointlifeTimeExpiry"
                                            id="JointlifeTimeExpiry"
                                        />
                                        <label
                                            className="form-check-label lifetimeexpirylabel"
                                            htmlFor="JointlifeTimeExpiry"
                                        >
                                            Life Time Expiry
                                        </label>
                                    </div>
                                </div>


                                <div className="col-12 col-sm-6 my-auto col-lg-4 d-flex flex-column mb-3">
                                    <label
                                        htmlFor="Male"
                                        className="col-12 col-form-label fw-500"
                                    >
                                        Gender
                                    </label>
                                    <div className="mt-auto">
                                        <ul className="text-center combineButton RadioToButton px-0 d-flex justify-content-center">
                                            <li className="w-50">
                                                <input
                                                    type="radio"
                                                    id="Male"
                                                    name="JointGender"
                                                    value="Male"
                                                    defaultChecked={values.JointGender == "Male"}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="Male" className="py-1 mb-0">
                                                    Male
                                                </label>
                                            </li>
                                            <li className="w-50">
                                                <input
                                                    type="radio"
                                                    id="Female"
                                                    name="JointGender"
                                                    value="Female"
                                                    defaultChecked={values.JointGender == "Female"}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="Female" className="py-1 mb-0">
                                                    Female
                                                </label>
                                            </li>
                                        </ul>
                                        {!values?.JointGender && <RequiredFeild />}
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                                    <label
                                        htmlFor="JointProfession"
                                        className="col-12 col-form-label fw-500"
                                    >
                                        Profession
                                    </label>

                                    <div className="mt-auto">
                                        <Select defaultValue={values.JointProfession ? values.JointProfession : undefined} placeholder="Type of Business" onSelect={(value, event) => handleDrctChange("JointProfession", event)} rules={[{ required: true }]} >

                                            {JointProfession?.map(optn => (
                                                <Option key={optn?.value}>{optn?.label}</Option>
                                            ))}

                                        </Select>
                                        {!values?.JointProfession && <RequiredFeild />}
                                    </div>
                                    {/*{!values.JointProfession.value && values.continues ? <span className="text-danger fs10" >Please Select Occupation</span> : ""} */}
                                </div>

                                <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                                    <label
                                        htmlFor="JointIncomeSource "
                                        className="col-12 col-form-label fw-500"
                                    >
                                        Source of Income
                                    </label>

                                    <div className="mt-auto">
                                        <Select defaultValue={values.JointIncomeSource ? values.JointIncomeSource : undefined} placeholder="Source of Income" onSelect={(value, event) => handleDrctChange("JointIncomeSource", event)} rules={[{ required: true }]} >

                                            {JointIncomeSources.map(JointIncomeSource => (
                                                <Option key={JointIncomeSource.value}>{JointIncomeSource.label}</Option>
                                            ))}

                                        </Select>
                                        {!values?.JointIncomeSource && <RequiredFeild />}
                                    </div>
                                    {/*  {!values.BussType.value && values.continues ? <span className="text-danger fs10" >Please Select Occupation</span> : ""} */}
                                </div>

                                <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                    <label
                                        htmlFor="JointCompName"
                                        className="col-12 col-form-label fw-500"
                                    >
                                        Business / Employer Name
                                    </label>
                                    <input
                                        type="text"
                                        name="JointCompName"
                                        className="form-control mt-auto"
                                        placeholder="Google Inc"
                                        value={values.JointCompName}
                                        onChange={handleChange}
                                        id="JointCompName"
                                        maxLength="80"
                                        required
                                    />
                                </div>

                                <div className="col-12 col-sm-6 mb-3 col-lg-4 d-flex flex-column">
                                    <label
                                        htmlFor="JointAnnualIncome"
                                        className="col-12 col-form-label fw-500"
                                    >
                                        Gross Annual Income (PKR)
                                    </label>

                                    <div className="mt-auto">

                                        <input
                                            type="text"
                                            name="JointAnnualIncome"
                                            className="form-control mt-auto"
                                            placeholder="100000"
                                            value={values.JointAnnualIncome}
                                            onChange={handleChange}
                                            id="JointAnnualIncome"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                    <label
                                        htmlFor="JointOtherIncome"
                                        className="col-12 col-form-label fw-500"
                                    >
                                        Other Income
                                    </label>
                                    <input
                                        type="text"
                                        name="JointOtherIncome"
                                        className="form-control mt-auto"
                                        placeholder="12345"
                                        value={values.JointOtherIncome}
                                        onChange={handleChange}
                                        id="JointOtherIncome"
                                        maxLength="80"
                                    />
                                </div>


                                <div className="col-12 col-sm-6 my-auto col-lg-4 d-flex flex-column mb-3">
                                    <label
                                        htmlFor="JointTaxYES"
                                        className="col-12 col-form-label fw-500"
                                    >
                                        Tax Filer
                                    </label>
                                    <div className="mt-auto">
                                        <ul className="text-center combineButton RadioToButton px-0 d-flex justify-content-center">
                                            <li className="w-50">
                                                <input
                                                    type="radio"
                                                    id="JointTaxYES"
                                                    name="JointTaxFiler"
                                                    value="YES"
                                                    defaultChecked={values.JointTaxFiler == "YES"}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="JointTaxYES" className="py-1 mb-0">
                                                    YES
                                                </label>
                                            </li>
                                            <li className="w-50">
                                                <input
                                                    type="radio"
                                                    id="JointTaxNO"
                                                    name="JointTaxFiler"
                                                    value="NO"
                                                    defaultChecked={values.JointTaxFiler == "NO"}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="JointTaxNO" className="py-1 mb-0">
                                                    NO
                                                </label>
                                            </li>
                                        </ul>
                                        {!values?.JointTaxFiler && <RequiredFeild />}
                                    </div>
                                </div>

                                {values?.JointTaxFiler === "YES" && <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                    <label
                                        htmlFor="JointNTN"
                                        className="col-12 col-form-label fw-500"
                                    >
                                        Tax Number
                                    </label>
                                    <input
                                        type="text"
                                        name="JointNTN"
                                        className="form-control mt-auto"
                                        placeholder="12345"
                                        value={values.JointNTN}
                                        onChange={handleChange}
                                        id="JointNTN"
                                        // maxLength="80"
                                        required
                                    />
                                </div>}

                                <div className="col-12 col-sm-6 my-auto col-lg-4 d-flex flex-column mb-3">
                                    <label
                                        htmlFor="JointPoliticalYES"
                                        className="col-12 col-form-label fw-500"
                                    >
                                        Politically Exposed
                                    </label>
                                    <div className="mt-auto">
                                        <ul className="text-center combineButton RadioToButton px-0 d-flex justify-content-center">
                                            <li className="w-50">
                                                <input
                                                    type="radio"
                                                    id="JointPoliticalYES"
                                                    name="JointPoliticalExpose"
                                                    value="YES"
                                                    defaultChecked={values.JointPoliticalExpose == "YES"}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="JointPoliticalYES" className="py-1 mb-0">
                                                    YES
                                                </label>
                                            </li>
                                            <li className="w-50">
                                                <input
                                                    type="radio"
                                                    id="JointPoliticalNO"
                                                    name="JointPoliticalExpose"
                                                    value="NO"
                                                    defaultChecked={values.JointPoliticalExpose == "NO"}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="JointPoliticalNO" className="py-1 mb-0">
                                                    NO
                                                </label>
                                            </li>
                                        </ul>
                                        {!values?.JointPoliticalExpose && <RequiredFeild />}
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 my-auto col-lg-4 d-flex flex-column mb-3">
                                    <label
                                        htmlFor="JointUSYES"
                                        className="col-12 col-form-label fw-500"
                                    >
                                        Are you an American Citizen
                                    </label>
                                    <div className="mt-auto">
                                        <ul className="text-center combineButton RadioToButton px-0 d-flex justify-content-center">
                                            <li className="w-50">
                                                <input
                                                    type="radio"
                                                    id="JointUSYES"
                                                    name="JointUSCitizen"
                                                    value="YES"
                                                    defaultChecked={values.JointUSCitizen == "YES"}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="JointUSYES" className="py-1 mb-0">
                                                    YES
                                                </label>
                                            </li>
                                            <li className="w-50">
                                                <input
                                                    type="radio"
                                                    id="JointUSNO"
                                                    name="JointUSCitizen"
                                                    value="NO"
                                                    defaultChecked={values.JointUSCitizen == "NO"}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="JointUSNO" className="py-1 mb-0">
                                                    NO
                                                </label>
                                            </li>
                                        </ul>
                                        {!values?.JointUSCitizen && <RequiredFeild />}
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 my-auto col-lg-4 d-flex flex-column mb-3">
                                    <label
                                        htmlFor="JointUSGREENCARDYES"
                                        className="col-12 col-form-label fw-500"
                                    >
                                        US Green Card Holder
                                    </label>
                                    <div className="mt-auto">
                                        <ul className="text-center combineButton RadioToButton px-0 d-flex justify-content-center">
                                            <li className="w-50">
                                                <input
                                                    type="radio"
                                                    id="JointUSGREENCARDYES"
                                                    name="JointUSGREENCARD"
                                                    value="YES"
                                                    defaultChecked={values.JointUSGREENCARD == "YES"}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="JointUSGREENCARDYES" className="py-1 mb-0">
                                                    YES
                                                </label>
                                            </li>
                                            <li className="w-50">
                                                <input
                                                    type="radio"
                                                    id="JointUSGREENCARDNO"
                                                    name="JointUSGREENCARD"
                                                    value="NO"
                                                    defaultChecked={values.JointUSGREENCARD == "NO"}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="JointUSGREENCARDNO" className="py-1 mb-0">
                                                    NO
                                                </label>
                                            </li>
                                        </ul>
                                        {!values?.JointUSGREENCARD && <RequiredFeild />}
                                    </div>
                                </div>
                                {values?.JointUSCitizen === 'NO' && values?.JointUSGREENCARD === 'NO' ? null : <>
                                    <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                        <label
                                            htmlFor="JointUSTIN"
                                            className="col-12 col-form-label fw-500"
                                        >
                                            US Tax Identification Number
                                        </label>
                                        <input
                                            type="text"
                                            name="JointUSTIN"
                                            className="form-control mt-auto"
                                            placeholder="12345"
                                            value={values.JointUSTIN}
                                            onChange={handleChange}
                                            id="JointUSTIN"
                                            maxLength="9"
                                            required
                                        />
                                    </div>
                                    <div className="col-12 col-lg-8  d-flex flex-column mb-3">
                                        <label
                                            htmlFor="JointOverseasAddress"
                                            className="col-12 col-form-label fw-500"
                                        >
                                            Overseas Address
                                        </label>
                                        <input
                                            type="text"
                                            name="JointOverseasAddress"
                                            className="form-control mt-auto"
                                            placeholder="Address"
                                            value={values.JointOverseasAddress}
                                            onChange={handleChange}
                                            id="JointOverseasAddress"
                                            required
                                        />
                                    </div>

                                    <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                        <label htmlFor="phone" className="col-form-label fw-500">
                                            Overseas Contact Number
                                        </label>
                                        <div className="mt-auto">
                                            <ReactPhoneInput
                                                country={"us"}

                                                inputExtraProps={{
                                                    name: "JointfrgnNumber",
                                                    required: true,
                                                    autoFocus: true,

                                                }}

                                                id="phone"
                                                countryCodeEditable={false}

                                                containerclassName=""

                                                // defaultCountry={"sg"}


                                                value={values.JointfrgnNumber}
                                                // value={ 92 + values.JointfrgnNumber.substr(1)}
                                                onChange={(text) => handleDrctChange("JointfrgnNumber", text)}
                                                specialLabel={false}

                                                inputclassName="form-control p10"
                                            />
                                            {values?.JointfrgnNumber.length < 5 && <RequiredFeild />}
                                            {/*{!values?.JointfrgnNumber && values.continues ? <span id="MailCountry" className="text-danger fs10" >Please provide JointfrgnNumber</span> : ""} */}
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6 my-auto col-lg-4 d-flex flex-column mb-3">
                                        <label
                                            htmlFor="JointPWRYES"
                                            className="col-12 col-form-label fw-500"
                                        >
                                            Have you Given Any Power of Attorney
                                        </label>
                                        <div className="mt-auto">
                                            <ul className="text-center combineButton RadioToButton px-0 d-flex justify-content-center">
                                                <li className="w-50">
                                                    <input
                                                        type="radio"
                                                        id="JointPWRYES"
                                                        name="JointPWRAttorney"
                                                        value="YES"
                                                        defaultChecked={values.JointPWRAttorney == "YES"}
                                                        onChange={handleChange}
                                                    />
                                                    <label htmlFor="JointPWRYES" className="py-1 mb-0">
                                                        YES
                                                    </label>
                                                </li>
                                                <li className="w-50">
                                                    <input
                                                        type="radio"
                                                        id="JointPWRNO"
                                                        name="JointPWRAttorney"
                                                        value="NO"
                                                        defaultChecked={values.JointPWRAttorney == "NO"}
                                                        onChange={handleChange}
                                                    />
                                                    <label htmlFor="JointPWRNO" className="py-1 mb-0">
                                                        NO
                                                    </label>
                                                </li>
                                            </ul>
                                            {!values?.JointPWRAttorney && <RequiredFeild />}
                                        </div>
                                    </div>

                                    {values?.JointPWRAttorney === "YES" && <div className="col-12 col-lg-8 d-flex flex-column mb-3">
                                        <label
                                            htmlFor="JointAttorneyAddress"
                                            className="col-12 col-form-label fw-500"
                                        >
                                            Attorney Address
                                        </label>
                                        <input
                                            type="text"
                                            name="JointAttorneyAddress"
                                            className="form-control mt-auto"
                                            placeholder="Address"
                                            value={values.JointAttorneyAddress}
                                            onChange={handleChange}
                                            id="JointAttorneyAddress"
                                            required
                                        />
                                    </div>}

                                    <div className="col-12 col-sm-6 my-auto col-lg-4 d-flex flex-column mb-3">
                                        <label
                                            htmlFor="JointRenouncedYES"
                                            className="col-12 col-form-label fw-500"
                                        >
                                            Have you Renounced Foreign Citizenship
                                        </label>
                                        <div className="mt-auto">
                                            <ul className="text-center combineButton RadioToButton px-0 d-flex justify-content-center">
                                                <li className="w-50">
                                                    <input
                                                        type="radio"
                                                        id="JointRenouncedYES"
                                                        name="JointRenouncedCitizenchip"
                                                        value="YES"
                                                        defaultChecked={values.JointRenouncedCitizenchip == "YES"}
                                                        onChange={handleChange}
                                                    />
                                                    <label htmlFor="JointRenouncedYES" className="py-1 mb-0">
                                                        YES
                                                    </label>
                                                </li>
                                                <li className="w-50">
                                                    <input
                                                        type="radio"
                                                        id="JointRenouncedNO"
                                                        name="JointRenouncedCitizenchip"
                                                        value="NO"
                                                        defaultChecked={values.JointRenouncedCitizenchip == "NO"}
                                                        onChange={handleChange}
                                                    />
                                                    <label htmlFor="JointRenouncedNO" className="py-1 mb-0">
                                                        NO
                                                    </label>
                                                </li>
                                            </ul>
                                            {!values?.JointRenouncedCitizenchip && <RequiredFeild />}
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6 my-auto col-lg-4 d-flex flex-column mb-3">
                                        <label
                                            htmlFor="JointTaxformYES"
                                            className="col-12 col-form-label fw-500"
                                        >
                                            W8BEN / W9USA Tax forms submitted
                                        </label>
                                        <div className="mt-auto">
                                            <ul className="text-center combineButton RadioToButton px-0 d-flex justify-content-center">
                                                <li className="w-50">
                                                    <input
                                                        type="radio"
                                                        id="JointTaxformYES"
                                                        name="JointTaxformSubmit"
                                                        value="YES"
                                                        defaultChecked={values.JointTaxformSubmit == "YES"}
                                                        onChange={handleChange}
                                                    />
                                                    <label htmlFor="JointTaxformYES" className="py-1 mb-0">
                                                        YES
                                                    </label>
                                                </li>
                                                <li className="w-50">
                                                    <input
                                                        type="radio"
                                                        id="JointTaxformNO"
                                                        name="JointTaxformSubmit"
                                                        value="NO"
                                                        defaultChecked={values.JointTaxformSubmit == "NO"}
                                                        onChange={handleChange}
                                                    />
                                                    <label htmlFor="JointTaxformNO" className="py-1 mb-0">
                                                        NO
                                                    </label>
                                                </li>
                                            </ul>
                                            {!values?.JointTaxformSubmit && <RequiredFeild />}
                                        </div>
                                    </div>
                                    {values?.JointTaxformSubmit === 'YES' &&

                                        <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                            <label
                                                htmlFor="JointformSubmitDate"
                                                className="col-form-label fw-500"
                                            >
                                                Date of Submittion
                                            </label>
                                            <div className="mt-auto">
                                                <DatePicker
                                                    className="form-control"
                                                    onChange={(date, dateString) => { handleDrctChange('JointformSubmitDate', dateString) }}
                                                    format="DD-MM-YYYY"
                                                    defaultValue={values?.JointformSubmitDate ? moment(values?.JointformSubmitDate, "DD-MM-YYYY") : undefined} />
                                                {!values?.JointformSubmitDate && <RequiredFeild />}
                                            </div>
                                        </div>
                                    }
                                </>}


                            </div>

                            <hr />

                            <div className="mb-3 row">
                                <div className="col-sm-8">
                                </div>
                                <div className="col-sm-4 text-end">
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
                            </  div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JointApplication;
