import { Select } from 'antd';
import ReactPhoneInput from "react-phone-input-2";
import Select1 from "react-select";
import 'react-phone-input-2/lib/style.css'
import countriesStateCities from '../../../Assets/Data/countries_states_cities.json'
import UpperNavigation from '../../Atoms/UpperNavigation';
import BottomNavigation from '../../Atoms/BottomNavigation';
import AccInstruct from './AccInstruct';
// import RequiredFeild from '../../Atoms/RequiredFeild';



const { Option } = Select;

const NextToKin = ({
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

    const KinIDTypes = [
        { value: "CNIC", label: "CNIC" },
        { value: "SNIC", label: "SNIC" },
        { value: "Passport", label: "Passport" },
        { value: "NICOP", label: "NICOP" },
        { value: "POC", label: "POC" },
        { value: "ARC", label: "ARC" },

    ];

    const KinRealitiveRelation = [
        // { value: "01", label: "Self" },
        { value: "02", label: "Father" },
        { value: "03", label: "Mother" },
        { value: "04", label: "Son" },
        { value: "05", label: "Daughter" },

        { value: "07", label: "Company" },
        { value: "06", label: "Husband" },
        // { value: "06", label: "Husband" },
    ];

    const hanldeMailCountries = (e) => {
        handleDrctChange("KinmailProvinceList", e.states)
        handleDrctChange("KinMailCountry", e)
        hanldeKinMailProvincesAndCities('')
        handleDrctChange("KinMailCity", '')
    }

    const hanldeKinMailProvincesAndCities = (e) => {
        handleDrctChange("KinMailProvinces", e)
        handleDrctChange("KinmailCitiesList", e?.cities)
        handleDrctChange("KinMailCity", '')
        // setKinMailCity(e.cities)
    }

    return (
        <div className="container-fluid pb-3">
            <div className="container">
                <div className="mt-3">
                    <div className="">
                        <UpperNavigation
                            Title="Next To Kin (optional)"
                            prevSec="Financial Details"
                            prevStep={prevStep} />
                        <form onSubmit={nextStep}>
                            <div className="row mt-40">

                                <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                    <label
                                        htmlFor="KinName"
                                        className="col-12 col-form-label fw-500"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="KinName"
                                        className="form-control mt-auto"
                                        placeholder="Abdul"
                                        value={values.KinName}
                                        onChange={handleChange}
                                        id="KinName"
                                    // required
                                    />
                                </div>

                                <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                    <label
                                        htmlFor="KinFthrName"
                                        className="col-12 col-form-label fw-500"
                                    >
                                        Father / Husband's Name
                                    </label>
                                    <input
                                        type="text"
                                        name="KinFthrName"
                                        className="form-control mt-auto"
                                        placeholder="Atta-Ullah"
                                        value={values.KinFthrName}
                                        onChange={handleChange}
                                        id="KinFthrName"
                                    // required
                                    />
                                </div>

                                <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                    <label
                                        htmlFor="KinEmail"
                                        className="col-12 col-form-label fw-500"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        name="KinEmail"
                                        className="form-control mt-auto"
                                        placeholder="someone@domain.com"
                                        value={values.KinEmail}
                                        onChange={handleChange}
                                        id="KinEmail"
                                    // required
                                    />
                                </div>

                                <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                    <label htmlFor="phone" className="col-form-label fw-500">
                                        Mobile Number
                                    </label>
                                    <div className="mt-auto">
                                        <ReactPhoneInput
                                            country={"pk"}

                                            inputExtraProps={{
                                                name: "KinPhoneNumber",
                                                required: true,
                                                autoFocus: true,

                                            }}

                                            id="phone"
                                            countryCodeEditable={false}

                                            containerclassName=""

                                            // defaultCountry={"sg"}


                                            value={values.KinPhoneNumber}
                                            // value={ 92 + values.KinPhoneNumber.substr(1)}
                                            onChange={(text) => handleDrctChange("KinPhoneNumber", text)}
                                            specialLabel={false}

                                            inputclassName="form-control p10"
                                        />
                                        {/* {values.KinPhoneNumber.length < 5 && <RequiredFeild />} */}
                                        {/* {!values?.KinPhoneNumber && values.continues ? <span id="MailCountry" className="text-danger fs10" >Please provide KinPhoneNumber</span> : ""} */}
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                    <label
                                        htmlFor="KinNumber"
                                        className="col-12 col-form-label fw-500"
                                    >
                                        Landline Number
                                    </label>
                                    <input
                                        type="text"
                                        name="KinNumber"
                                        className="form-control mt-auto"
                                        placeholder="(051) 1212123"
                                        value={values.KinNumber}
                                        onChange={handleChange}
                                        id="KinNumber"
                                    />
                                </div>

                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-12 d-flex flex-column mb-3">
                                            <label
                                                htmlFor="KinMailstreet"
                                                className="col-form-label fw-500"
                                            >
                                                Street Address
                                            </label>
                                            <input
                                                type="text"
                                                name="KinMailstreet"
                                                className="form-control mt-auto"
                                                placeholder="H# 12 Block A, PECHS"
                                                onChange={handleChange}
                                                value={values.KinMailstreet}
                                                id="KinMailstreet"
                                            // required
                                            />
                                            {/* {/* {!values.KinMailstreet && <RequiredFeild />} */}
                                            {/* {!values?.KinMailstreet && values.continues ? <span id="KinMailstreet" className="text-danger fs10" >Please fill Street</span> : ""} */}
                                        </div>

                                        <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label
                                                htmlFor="KinMailCountry"
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
                                                    id="KinMailCountry"
                                                    options={countriesStateCities}
                                                    defaultValue={values?.KinMailCountry?.label ? values?.KinMailCountry?.label : undefined}
                                                    defaultInputValue={values?.KinMailCountry?.label ? values?.KinMailCountry?.label : undefined}
                                                    value={values?.KinMailCountry}
                                                />
                                                {/* {!values?.KinMailCountry?.label && <RequiredFeild />} */}

                                            </div >
                                        </div >

                                        <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label
                                                htmlFor="KinMailProvinces"
                                                className="col-form-label fw-500"
                                            >
                                                Province/State
                                            </label>

                                            <div className="mt-auto">
                                                <Select1
                                                    styles={customStyle}
                                                    onChange={(e) => hanldeKinMailProvincesAndCities(e)}
                                                    placeholder="Select any one"
                                                    id="KinMailProvinces"
                                                    options={values?.KinmailProvinceList}
                                                    defaultValue={values?.KinMailProvinces?.label ? values?.KinMailProvinces?.label : undefined}
                                                    value={values?.KinMailProvinces}
                                                />
                                                {/* {!values?.KinMailProvinces?.label && <RequiredFeild />} */}

                                            </div >


                                        </div >

                                        <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label
                                                htmlFor="KinMailCity"
                                                className="col-form-label fw-500"
                                            >
                                                City
                                            </label>
                                            <div className="mt-auto">
                                                <Select1
                                                    styles={customStyle}
                                                    onChange={(e) =>
                                                        handleDrctChange("KinMailCity", e)
                                                    }
                                                    placeholder="Select any one"
                                                    id="KinMailCity"

                                                    options={values?.KinmailCitiesList}
                                                    defaultValue={values?.KinMailCity?.label ? values?.KinMailCity?.label : undefined}
                                                    value={values?.KinMailCity}
                                                />
                                                {/* {!values?.KinMailCity?.label && <RequiredFeild />} */}


                                            </div >
                                        </div >

                                    </div >
                                </div >

                                <div className="col-12 col-sm-4 d-flex flex-column mb-3">
                                    <label
                                        htmlFor="KinIDType"
                                        className="col-12 col-form-label fw-500"
                                    >
                                        ID Type
                                    </label>

                                    <>

                                        <div className="mt-auto">
                                            <Select defaultValue={values?.KinIDType ? values?.KinIDType : undefined} placeholder="ID Type" onSelect={(value, event) => handleDrctChange("KinIDType", event.value)} rules={[{ required: true }]}>

                                                {KinIDTypes.map(KinidType => (
                                                    <Option key={KinidType?.value}>{KinidType?.label}</Option>
                                                ))}

                                            </Select>
                                            {/* {values.KinIDType == "" && <RequiredFeild />} */}
                                        </div>
                                        {/* {!values.KinIDType && values.continues ? <span id="KinIDType" className="text-danger fs10" >Please Select KinIDType</span> : ""} */}

                                    </>

                                </div>

                                <div className="col-12 mb-3 col-sm-4 d-flex flex-column">
                                    <label
                                        htmlFor="KinCNIC"
                                        className="col-12 col-form-label fw-500"
                                    >
                                        {/* CNIC */}
                                        {values?.KinIDType ? values.KinIDType : 'CNIC'} Number
                                    </label>

                                    <input
                                        type='text'
                                        name="KinCNIC"
                                        className="form-control"
                                        placeholder="44444-2223334-7"
                                        value={values.KinCNIC}
                                        onChange={handleChange}
                                        id="KinCNIC"
                                        minLength={values.KinIDType == 'Passport' ? '0' : '13'}
                                        maxLength={values.KinIDType == 'Passport' ? '30' : '13'}
                                    // required
                                    />
                                    {/* {/* {values.CNIC == "" && <RequiredFeild />} */}
                                    {/* {!values.CNIC && values.continues ? <span id="KinIDType" className="text-danger fs10" >Please fill CNIC</span> : ""} */}
                                </div>

                                <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column mb-3">
                                    <label
                                        htmlFor="KinRelation"
                                        className="col-12 col-form-label fw-500"
                                    >
                                        Relationship with Account Holder
                                    </label>

                                    <div className="mt-auto">

                                        <input
                                            type="text"
                                            name="KinRelation"
                                            className="form-control"
                                            placeholder="Cousin"
                                            value={values.KinRelation}
                                            onChange={handleChange}
                                            id="KinRelation"
                                        // required
                                        />



                                    </div>

                                </div>




                            </div>

                            <hr className="mt-40" />

                            <h1 className="fs24 ls4 fw-700 tc-plum mt-40">Account Operating Instructions</h1>
                            <AccInstruct

                                handleDrctChange={handleDrctChange}
                                prevStep={prevStep}
                                nextStep={nextStep}
                                handleChange={handleChange}
                                values={values} />

                            <BottomNavigation first="Save & Exit" second="Next" Nextdisabled={false} Loading={false} />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NextToKin;
