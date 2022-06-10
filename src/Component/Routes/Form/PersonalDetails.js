import React, { useState, useEffect } from "react";
import Select1 from "react-select";
import ReactPhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import { Select, Form, Tooltip, Button, Divider } from 'antd';
import countriesStateCities from '../../../Assets/Data/countries_states_cities.json'
import { DatePicker } from 'antd';
import moment from "moment";
import RequiredFeild from "../../Atoms/RequiredFeild";
import UpperNavigation from "../../Atoms/UpperNavigation";
import BottomNavigation from "../../Atoms/BottomNavigation";


const { Option, OptGroup, } = Select;
const PersonalDetails = ({
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

  const hanldeResendentialCountries = (e) => {
    hanldeResidentailProvincesAndCities('')
    handleDrctChange("City", '')
    handleDrctChange("country", e)
    handleDrctChange("residentiaProvinceList", e.states)

  }

  const hanldeResidentailProvincesAndCities = (e) => {

    handleDrctChange("Provinces", e)
    handleDrctChange("residentialCitiesList", e.cities)

    handleDrctChange("City", '')

  }

  const hanldeMailCountries = (e) => {
    handleDrctChange("mailProvinceList", e.states)
    handleDrctChange("mailCountry", e)
    hanldeMailProvincesAndCities('')
    handleDrctChange("MailCity", '')
  }

  const hanldeMailProvincesAndCities = (e) => {
    handleDrctChange("MailProvinces", e)
    handleDrctChange("mailCitiesList", e?.cities)
    handleDrctChange("MailCity", '')
    // setMailCity(e.cities)
  }




  const Months = [
    { value: "January", label: "January" },
    { value: "Febuary", label: "Febuary" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ];
  const IncomeSources = [
    { value: "P001", label: "Salaried" },
    { value: "P002", label: "Business" },
    { value: "P003", label: "Inheritance" },
    { value: "P005", label: "Gift" },
    { value: "P006", label: "Retired" },
    { value: "P007", label: "Other" },
  ];
  // var signedEmail = JSON.parse(localStorage.getItem("user")).email;


  const Residents = [
    { value: "Resident", label: "Resident" },
    { value: "Non-Resident", label: "Non-Resident" },
  ];


  const IDTypes = [
    { value: "CNIC", label: "CNIC" },
    { value: "SNIC", label: "SNIC" },
    { value: "Passport", label: "Passport" },
    { value: "NICOP", label: "NICOP" },
    { value: "POC", label: "POC" },
    { value: "ARC", label: "ARC" },

  ];

  const format = (date) => {
    return moment(date, "DD-MM-YYYY")
  }

  return (
    <>
      <div className="container-fluid pb-3">
        <div className="container">
          <div className="mt-3">
            <div className="">
              <UpperNavigation
                Title="Personal Details"
                prevSec="account selection"
                prevStep={prevStep} />
              <form className="mt-40" onSubmit={nextStep}>
                <div className="row mb-5">
                  <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                    <label
                      htmlFor="first Name"
                      className="col-12 col-form-label fw-500"
                    >
                      Full Legal Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-control mt-auto"
                      placeholder="Sehrish Ahmed Khan"
                      value={values?.firstName}
                      onChange={handleChange}
                      id="first Name"
                      required={true}
                      title="Only Alphabets are allowed"
                    />
                    {/* {!values.firstName && values.continues ? <span className="text-danger fs10"  >Please provide first name</span> : ""} */}
                  </div>

                  <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                    <label
                      htmlFor="RelativeName"
                      className="col-form-label fw-500"
                    >

                      Father's or Husband's Full Name
                      {/* {values.Gender == 'Male' ? "Father Full Name" : 'Father/Husband Full Name' } */}

                    </label>
                    <input
                      type="text"
                      name="RelativeName"
                      className="form-control mt-auto"
                      placeholder="Ajmal Ali"
                      onChange={handleChange}
                      value={values?.RelativeName}
                      id="RelativeName"
                      required={true}
                    />
                    {/* {!values.RelativeName ? <span id="relativename" className="text-danger fs10" style={{ display: "none" }} >Realitive Name Required</span> : ""} */}
                  </div>

                  <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                    <label htmlFor="email" className="col-form-label fw-500">
                      Email Address
                    </label>
                    <div className="col-12 mt-auto">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="some@domain.com"
                        onChange={handleChange}
                        value={values.email}
                        id="email"
                        required={true}
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
                        id="phone"
                        countryCodeEditable={false}
                        containerclassName=""
                        value={values.phoneNumber}
                        // value={ 92 + values.phoneNumber.substr(1)}
                        onChange={(text) => handleDrctChange("phoneNumber", text)}
                        specialLabel={false}

                        inputclassName="form-control p10"
                      />
                      {values.phoneNumber.length < 5 && <RequiredFeild />}
                      {/* {!values?.phoneNumber && values.continues ? <span id="MailCountry" className="text-danger fs10" >Please provide Number</span> : ""} */}
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                    <label
                      htmlFor="BirthDay"
                      className="col-12 col-form-label fw-500"
                    >
                      Date of Birth
                    </label>
                    <div className="mt-auto">
                      <DatePicker
                        className="form-control"
                        onChange={(date, dateString) => { handleDrctChange('BirthDay', dateString) }}
                        defaultPickerValue={moment(new Date().setFullYear(new Date().getFullYear() - 18))}
                        format="DD-MM-YYYY"
                        showToday={false}
                        disabledDate={d => !d || d.isAfter(moment(new Date().setFullYear(new Date().getFullYear() - 18)))}
                        value={values?.BirthDay ? format(values?.BirthDay) : undefined}
                        defaultValue={values?.BirthDay ? format(values?.BirthDay) : undefined} />
                      {values.BirthDay === "" && <RequiredFeild />}
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                    <label
                      htmlFor="BirthCountry"
                      className="col-form-label fw-500"
                    >
                      Country of Birth
                    </label>
                    <input
                      type="text"
                      name="BirthCountry"
                      className="form-control mt-auto"
                      placeholder="Pakistan"
                      onChange={handleChange}
                      value={values.BirthCountry}
                      id="BirthCountry"
                      required={true}
                    />
                  </div>
                  <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                    <label
                      htmlFor="BirthCity"
                      className="col-form-label fw-500"
                    >
                      City of Birth
                    </label>
                    <input
                      type="text"
                      name="BirthCity"
                      className="form-control mt-auto"
                      placeholder="Pakistan"
                      onChange={handleChange}
                      value={values.BirthCity}
                      id="BirthCity"
                      required={true}
                    />
                    {/* {!values.Street ? <span id="area" className="text-danger fs10" style={{ display: "none" }} >Please fill Street</span> : ""} */}

                  </div>

                  <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                    <label
                      htmlFor="Nationality"
                      className="col-form-label fw-500"
                    >
                      Nationality
                    </label>
                    <div className="mt-auto">

                      <Select1
                        styles={customStyle}
                        onChange={(e) => handleDrctChange("Nationality", e)}
                        placeholder="Select any one"
                        id="Nationality"
                        options={countriesStateCities}
                        defaultInputValue={values?.Nationality?.label ? values?.Nationality?.label : undefined}
                        defaultValue={values?.Nationality?.label ? values?.Nationality?.label : undefined}
                        value={values?.Nationality}

                      />

                      {!values.Nationality?.label && <RequiredFeild />}
                    </div >
                    {/* {!values.Nationality?.value ? <span id="Nationality" className="text-danger fs10" style={{ display: "none" }} >Please select Nationality</span> : ""} */}
                  </div >

                  <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                    <label
                      htmlFor="Resident"
                      className="col-form-label fw-500"
                    >
                      Resident
                    </label>
                    <div className="mt-auto">
                      <Select defaultValue={values.Resident?.children ? values.Resident?.children : undefined} value={values?.Resident?.children} placeholder="Select any one" onSelect={(value, event) => handleDrctChange("Resident", event)} rules={[{ required: true }]}>

                        {Residents.map(residents => (
                          <Option key={residents.value}>{residents.label}</Option>
                        ))}

                      </Select>
                      {!values.Resident?.value && <RequiredFeild />}
                    </div >
                    {/* {!values.Resident ? <span id="Resident" className="text-danger fs10" style={{ display: "none" }} >Please select Resident</span> : ""} */}


                  </div >

                  <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                    <label
                      htmlFor="IDType"
                      className="col-12 col-form-label fw-500"
                    >
                      Choose Identity Document
                    </label>

                    <>

                      <div className="mt-auto">
                        <Select defaultValue={values?.IDType ? values?.IDType : undefined} placeholder="ID Type" onSelect={(value, event) => handleDrctChange("IDType", event.value)} rules={[{ required: true }]}>

                          {IDTypes.map(idType => (
                            <Option key={idType?.value}>{idType?.label}</Option>
                          ))}

                        </Select>
                      </div>
                      {values.IDType == "" && <RequiredFeild />}
                      {/* {!values.IDType && values.continues ? <span id="IDType" className="text-danger fs10" >Please Select IDType</span> : ""} */}

                    </>


                  </div>

                  <div className="col-12 mb-3 col-sm-6 col-lg-4 d-flex flex-column">
                    <label
                      htmlFor="CNIC"
                      className="col-12 col-form-label fw-500"
                    >
                      Identity Document Number
                    </label>

                    <input
                      type='text'
                      name="CNIC"
                      className="form-control mt-auto"
                      placeholder="44444-2223334-7"
                      value={values.CNIC}
                      onChange={handleChange}
                      id="CNIC"
                      minLength={values.IDType == 'Passport' ? '0' : '13'}
                      maxLength={values.IDType == 'Passport' ? '30' : '13'}
                      required
                    />
                    {/* {values.CNIC == "" && <RequiredFeild />}
                  {!values.CNIC && values.continues ? <span id="IDType" className="text-danger fs10" >Please fill CNIC</span> : ""} */}
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
                        onChange={(date, dateString) => { handleDrctChange('IssueDate', dateString) }}
                        format="DD-MM-YYYY"
                        disabledDate={d => !d || d.isBefore(format(values?.BirthDay)) || d.isAfter(format(values?.ExpiryDate)) || d.isAfter(format(new Date()))}
                        defaultValue={values?.IssueDate ? format(values?.IssueDate) : undefined}
                        value={values?.IssueDate ? format(values?.IssueDate) : undefined}

                      />
                      {values?.IssueDate == "" && <RequiredFeild />}
                    </div>
                    {/* {!values.IssueDate && values.continues ? <span className="text-danger fs10" >Please select Issue Date</span> : ""} */}
                  </div>

                  {!values?.lifeTimeExpiry && (
                    <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">

                      {/* {values?.IssueDate && <> */}


                      <label
                        htmlFor="expiryDay"
                        className="col-12 col-form-label fw-500"
                      >
                        Expiry Date (e.g. 28-02-1995)
                      </label>
                      <div className="mt-auto">

                        <DatePicker
                          className="form-control"
                          onChange={(date, dateString) => { handleDrctChange('ExpiryDate', dateString) }}
                          format="DD-MM-YYYY"
                          disabledDate={d => !d || d.isBefore(format(values?.IssueDate)) || d.isBefore(format(values?.BirthDay))}
                          defaultValue={values?.ExpiryDate ? format(values?.ExpiryDate) : undefined} />
                        {values.ExpiryDate === "" && !values.lifeTimeExpiry && <RequiredFeild />}
                        {/* {!values.ExpiryDate && !values.lifeTimeExpiry && values.continues ? <span className="text-danger fs10" >Please select Expiry Date</span> : ""} */}

                      </div>


                    </div>
                  )}


                  <div className="col-12 col-sm-6 my-auto col-lg-4 d-flex flex-column mb-3">
                    <label
                      htmlFor="lifeTimeExpiry"
                      className="col-12 pb-3 pt-0 col-form-label fw-500"
                    >
                      Expiry Limit
                    </label>
                    <div className="mt-auto">
                      <input
                        className="form-check-input me-1"
                        type="checkbox"
                        defaultChecked={values.lifeTimeExpiry}
                        onChange={handleChange}
                        name="lifeTimeExpiry"
                        id="lifeTimeExpiry"
                      />
                      <label
                        className="form-check-label lifetimeexpirylabel ps-3"
                        htmlFor="lifeTimeExpiry"
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
                      Gender {values.Gender}
                    </label>
                    <div className="mt-auto">
                      <ul className="text-center combineButton RadioToButton px-0 d-flex justify-content-center">
                        <li className="w-50">
                          <input
                            type="radio"
                            id="Male"
                            name="Gender"
                            value={"Male"}
                            defaultChecked={values.Gender == "Male"}

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
                            name="Gender"
                            value="Female"
                            defaultChecked={values.Gender == "Female"}
                            onChange={handleChange}
                          />
                          <label htmlFor="Female" className="py-1 mb-0">
                            Female
                          </label>
                        </li>
                      </ul>
                      {values.Gender === "" && <RequiredFeild />}
                    </div>
                  </div>
                  <div className='mt-40'>
                    <hr className="t-grey-200 mt-40 mb-40"></hr>
                  </div>

                  <div className="d-inline-flex w-100 mt-40 d-flex flex-column mb-3">
                    <h2 className="fs18 fw-800 t-grey-800">Permanent Address</h2>
                  </div>

                  <div className="col-12 mb-3 d-flex flex-column">
                    <label
                      htmlFor="Address"
                      className="col-form-label fw-500"
                    >
                      Street Address
                    </label>
                    <input
                      type="text"
                      name="Street"
                      className="form-control mt-auto"
                      placeholder="H# 12 Block A, PECHS"
                      onChange={handleChange}
                      value={values.Street}
                      id="Street"
                      required
                    />
                    {/* {!values.Street ? <span id="area" className="text-danger fs10" style={{ display: "none" }} >Please fill Street</span> : ""} */}

                  </div>

                  <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                    <label
                      htmlFor="country"
                      className="col-form-label fw-500"
                    >
                      Country
                    </label>


                    <div className="mt-auto">


                      <Select1
                        onChange={(e) => hanldeResendentialCountries(e)}
                        // onChange={(e) => handleDrctChange("country", e)}
                        placeholder="Select any one"
                        id="country"
                        styles={customStyle}
                        options={countriesStateCities}
                        defaultInputValue={values?.country?.label ? values?.country?.label : undefined}
                        defaultValue={values?.country?.label ? values?.country?.label : undefined}
                        value={values?.country}
                      />

                      {!values.country?.label && <RequiredFeild />}
                      {/* {!values.country?.label && values.continues ? <span id="country" className="text-danger fs10" >Please select Country</span> : ""} */}
                    </div >
                  </div >


                  <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                    <label
                      htmlFor="Provinces"
                      className="col-form-label fw-500"
                    >
                      Province/State
                    </label>
                    <div className="mt-auto">

                      <Select1
                        styles={customStyle}
                        onChange={(e) => hanldeResidentailProvincesAndCities(e)}
                        placeholder="Select any one"
                        id="Provinces"
                        options={values?.residentiaProvinceList}
                        defaultValue={values.Provinces.label ? values.Provinces.label : undefined}
                        value={values.Provinces}

                      />
                      {!values?.Provinces?.label && <RequiredFeild />}
                      {/* {!values?.Provinces?.label && values.continues ? <span id="province" className="text-danger fs10" >Please select Province</span> : ""} */}
                    </div >
                  </div >

                  <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                    <label htmlFor="City" className="col-form-label fw-500">
                      City
                    </label>

                    <div className="mt-auto">
                      <Select1
                        styles={customStyle}
                        onChange={(e) => handleDrctChange("City", e)}
                        placeholder="Select any one"
                        id="City"
                        options={values?.residentialCitiesList}
                        defaultValue={values.City.label ? values.City.label : undefined}
                        value={values.City}
                      />
                      {!values.City?.label && <RequiredFeild />}
                      {/* {!values?.City?.label && values.continues ? <span id="city" className="text-danger fs10" >Please select City</span> : ""} */}
                    </div >
                  </div >


                  <div>
                    <div className="col-sm-9 col-md-10 my-auto mt-auto d-flex">
                      <input
                        className="form-check-input me-1 mb-3"
                        type="checkbox"
                        defaultChecked={values.MailingAddress}
                        onChange={handleChange}
                        name="MailingAddress"
                        id="MailingAddress"
                      />
                      <label
                        className="form-check-label fw-500 fs16 mailing-checkbox-label Bold ps-3"
                        htmlFor="MailingAddress"
                      >
                        My permanent and mailing addresses are the same
                      </label>
                    </div>
                    {!values.MailingAddress && (
                      <div className="d-inline-flex w-100 mailing-address-container mb-3">
                        <h2 className="fs18 fw-800 t-grey-800">Mailing Address

                        </h2>
                      </div>
                    )}
                    <div className="col-12">
                      <div className="row">
                        {!values.MailingAddress ? (
                          <>


                            <div className="col-12 d-flex flex-column mb-3">
                              <label
                                htmlFor="MailStreet"
                                className="col-form-label fw-500"
                              >
                                Street Address
                              </label>
                              <input
                                type="text"
                                name="MailStreet"
                                className="form-control mt-auto"
                                placeholder="H# 12 Block A, PECHS"
                                onChange={handleChange}
                                value={values.MailStreet}
                                id="MailStreet"
                                required
                              />
                              {/* {!values.MailStreet && <RequiredFeild />}
                              {!values?.MailStreet && values.continues ? <span id="MailStreet" className="text-danger fs10" >Please fill Street</span> : ""} */}
                            </div>

                            <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                              <label
                                htmlFor="mailCountry"
                                className="col-form-label fw-500"
                              >
                                Country
                              </label>
                              <div className="mt-auto">
                                <Select1
                                  styles={customStyle}
                                  onChange={(e) => hanldeMailCountries(e)}
                                  placeholder="Select any one"
                                  id="mailCountry"
                                  options={countriesStateCities}
                                  defaultValue={values.mailCountry?.label ? values.mailCountry?.label : undefined}
                                  defaultInputValue={values?.mailCountry?.label ? values?.mailCountry?.label : undefined}
                                  value={values?.mailCountry}

                                />
                                {!values.mailCountry?.label && <RequiredFeild />}

                              </div >
                            </div >


                            {/* {values?.mailCountry?.label == 'Pakistan' ? ( */}
                            <>
                              <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                                <label
                                  htmlFor="MailProvinces"
                                  className="col-form-label fw-500"
                                >
                                  Province/State
                                </label>

                                <div className="mt-auto">
                                  <Select1
                                    styles={customStyle}
                                    onChange={(e) => hanldeMailProvincesAndCities(e)}
                                    placeholder="Select any one"
                                    id="MailProvinces"
                                    options={values?.mailProvinceList}
                                    defaultValue={values?.MailProvinces?.label ? values?.MailProvinces?.label : undefined}
                                    value={values?.MailProvinces}
                                  />
                                  {!values?.MailProvinces?.label && <RequiredFeild />}

                                </div >


                              </div >

                              <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                                <label
                                  htmlFor="MailCity"
                                  className="col-form-label fw-500"
                                >
                                  City
                                </label>
                                <div className="mt-auto">
                                  <Select1
                                    styles={customStyle}
                                    onChange={(e) =>
                                      handleDrctChange("MailCity", e)
                                    }
                                    placeholder="Select any one"
                                    id="MailCity"

                                    options={values?.mailCitiesList}
                                    defaultValue={values?.MailCity?.label ? values?.MailCity?.label : undefined}
                                    value={values?.MailCity}
                                  />
                                  {!values?.MailCity?.label && <RequiredFeild />}
                                </div >
                              </div >
                            </>
                          </>
                        ) : (
                          <></>
                        )}
                      </div >
                    </div >

                  </div >
                </div>
                <BottomNavigation first="Save & Exit" second="Next" Nextdisabled={false} Loading={false} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;
