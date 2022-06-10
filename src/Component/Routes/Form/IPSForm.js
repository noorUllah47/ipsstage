import React, { Component } from "react";
import SelectType from "./SelectType";
import PersonalDetails from "./PersonalDetails";
import SourceIncome from "./SourceIncome";
import ForiegnAccount from "./ForiegnAccount";
import NextToKin from "./NextToKin";
import BankMandate from "./BankMandate";
import IBAN from 'iban'
import NavigationBar from "../../Atoms/NavgationBar";
import AccInstruct from "./AccInstruct";
import Guardian from "./Guardian";
import JointApplication from "./JointApplication";
import SampleState from '../../../Assets/filledState'
import FileUploading from "./FileUploading";
import UnderTaking from "./UnderTaking";
import ReviewApplication from "./ReviewApplication";
import TermsAndConditions from "./TermsAndConditions";
import GetData from "../../../API/GetData"
import { Navigate } from "react-router-dom"


export default class IPSForm extends Component {




  componentDidMount() {
    this.setState({ Loading: true });
    // Runs after the first render() lifecycle
    const response = GetData.getEditCorrectionData();
    response.then((value) => {
      // console.log({ value })
      // console.log(value?.data?.data.status)
      // alert('1')
      if (value?.data?.data.status == 'Correction Required') {

        // console.log(value?.data?.data?.BirthDay, 'componentDidMount  is==================>>>>>>>>>>>>>>>>>>>>>>>>', value?.data?.data)
        this.setState({

          uid: localStorage.getItem('uid'),
          AccountType: 'Individual',
          firstName: value?.data?.data?.firstName,
          RelativeName: value?.data?.data?.RelativeName,
          email: value?.data?.data?.email,
          phoneNumber: value?.data?.data?.phoneNumber,
          BirthDay: value?.data?.data?.BirthDay,
          BirthCountry: value?.data?.data?.BirthCountry,
          BirthCity: value?.data?.data?.BirthCity,

          Nationality: {

            label: value?.data?.data?.Nationality
          },
          Resident: {
            key: value?.data?.data?.Resident,
            value: value?.data?.data?.Resident,
            children: value?.data?.data?.Resident
          },

          // Resident: value?.data?.data?.Resident,
          IDType: value?.data?.data?.IDType,
          CNIC: value?.data?.data?.CNIC,
          IssueDate: value?.data?.data?.IssueDate,
          ExpiryDate: value?.data?.data?.ExpiryDate,
          lifeTimeExpiry: value?.data?.data?.lifeTimeExpiry,

          Gender: value?.data?.data?.Gender == 'Male' ? 'Male' : 'Female',
          Street: value?.data?.data?.Street,
          country: {

            label: value?.data?.data?.Country,
          },



          Provinces: {

            label: value?.data?.data?.Provinces,
          },


          City: {

            label: value?.data?.data?.City,
          },


          MailingAddress: value?.data?.data?.MailingAddress,
          MailStreet: value?.data?.data?.MailStreet,
          mailCountry: {
            label: value?.data?.data?.MailCountry
          },
          MailProvinces: {
            label: value?.data?.data?.MailProvinces,
          },
          MailCity: {
            label: value?.data?.data?.MailCity,
          },
          BussType: {

            children: value?.data?.data?.BussType,
            value: value?.data?.data?.BussType,
            key: value?.data?.data?.BussType,
          },


          IncomeSource: {

            children: value?.data?.data?.IncomeSource,
            value: value?.data?.data?.IncomeSource,
            key: value?.data?.data?.IncomeSource,
          },


          CompName: value?.data?.data?.CompName,
          AnnualIncome: value?.data?.data?.AnnualIncome,
          OtherIncome: value?.data?.data?.OtherIncome,
          TaxFiler: value?.data?.data?.TaxFiler,
          NTN: value?.data?.data?.NTN,
          PoliticalExpose: value?.data?.data?.PoliticalExpose,
          USCitizen: value?.data?.data?.USCitizen,
          USGREENCARD: value?.data?.data?.GCard,
          USTIN: value?.data?.data?.USTIN,
          USGREENCARDNum: value?.data?.data?.USGREENCARD,
          OverseasAddress: value?.data?.data?.OverseasAddress,
          frgnNumber: value?.data?.data?.frgnNumber,
          PWRAttorney: value?.data?.data?.PWRAttorney,
          AttorneyAddress: value?.data?.data?.AttorneyAddress,
          renouncedCitizenchip: value?.data?.data?.renouncedCitizenchip,
          taxformSubmit: value?.data?.data?.taxformSubmit,
          formSubmitDate: value?.data?.data?.formSubmitDate,
          KinName: value?.data?.data?.KinName,
          KinFthrName: value?.data?.data?.KinFthrName,
          KinIDType: value?.data?.data?.KinIDType,
          KinCNIC: value?.data?.data?.KinCNIC,
          KinRelation: value?.data?.data?.KinRelation,
          KinMailstreet: value?.data?.data?.KinMailstreet,
          KinMailCountry: {
            label: value?.data?.data?.KinMailCountry
          },
          KinMailProvinces: {
            label: value?.data?.data?.KinMailProvinces,
          },
          KinMailCity: {
            label: value?.data?.data?.KinMailCity,
          },
          KinNumber: value?.data?.data?.KinNumber,
          KinPhoneNumber: value?.data?.data?.KinPhoneNumber,
          KinFax: value?.data?.data?.KinFax,
          KinEmail: value?.data?.data?.KinEmail,
          BankTitle: value?.data?.data?.BankTitle,
          BankNum: value?.data?.data?.BankNum,
          // BankBranch: value?.data?.data?.,
          BankAddress: value?.data?.data?.BankAddress,
          AccountOperatingInstruction: {
            key: value?.data?.data?.AccountOperatingInstruction,
            value: value?.data?.data?.AccountOperatingInstruction,
            children: value?.data?.data?.AccountOperatingInstruction
          },
          AccountOperatingInstructionOtherDetails: value?.data?.data?.AccountOperatingInstructionOtherDetails,
          // ZakatExemption: value?.data?.data?.,
          // ReasonZakat: value?.data?.data?.,
          // otherZakatReason: value?.data?.data?.,
          TaxExemption: value?.data?.data?.TaxExemption,
          // TransactionMode: value?.data?.data?.,
          Minnorrelation: value?.data?.data?.Minnorrelation,
          MinnorRelationDetails: value?.data?.data?.MinnorRelationDetails,
          JointAccountTitle: value?.data?.data?.JointAccountTitle,
          JointRelativeName: value?.data?.data?.JointRelativeName,
          Jointemail: value?.data?.data?.Jointemail,
          JointPhoneNumber: value?.data?.data?.JointPhoneNumber,
          JointNumber: value?.data?.data?.JointNumber,
          JointFaxNumber: value?.data?.data?.JointFaxNumber,
          Jointstreet: value?.data?.data?.Jointstreet,
          Jointcountry: value?.data?.data?.Jointcountry,
          JointProvinces: value?.data?.data?.JointProvinces,
          JointCity: value?.data?.data?.JointCity,
          JointMailingAddress: value?.data?.data?.JointMailingAddress,
          JointMailstreet: value?.data?.data?.JointMailstreet,
          JointmailCountry: value?.data?.data?.JointmailCountry,
          JointMailProvinces: value?.data?.data?.JointMailProvinces,
          JointMailCity: value?.data?.data?.JointMailCity,
          JointBirthDay: value?.data?.data?.JointBirthDay,
          JointBirthCountry: value?.data?.data?.JointBirthCountry,
          JointBirthCity: value?.data?.data?.JointBirthCity,
          JointNationality: value?.data?.data?.JointNationality,
          JointResident: value?.data?.data?.JointResident,
          JointCNIC: value?.data?.data?.JointCNIC,
          JointIDType: value?.data?.data?.JointIDType,
          JointIssueDate: value?.data?.data?.JointIssueDate,
          JointExpiryDate: value?.data?.data?.JointExpiryDate,
          JointlifeTimeExpiry: value?.data?.data?.JointlifeTimeExpiry,
          JointGender: value?.data?.data?.JointGender,
          JointProfession: value?.data?.data?.JointProfession,
          JointIncomeSource: value?.data?.data?.JointIncomeSource,
          JointCompName: value?.data?.data?.JointCompName,
          JointAnnualIncome: value?.data?.data?.JointAnnualIncome,
          JointOtherIncome: value?.data?.data?.JointOtherIncome,
          JointTaxFiler: value?.data?.data?.JointTaxFiler,
          JointNTN: value?.data?.data?.JointNTN,
          JointPoliticalExpose: value?.data?.data?.JointPoliticalExpose,
          JointUSCitizen: value?.data?.data?.JointUSCitizen,
          JointUSGREENCARD: value?.data?.data?.JointGCard,
          JointUSTIN: value?.data?.data?.JointUSTIN,
          JointUSGREENCARDNum: value?.data?.data?.JointUSGREENCARD,
          JointOverseasAddress: value?.data?.data?.JointOverseasAddress,
          JointfrgnNumber: value?.data?.data?.JointfrgnNumber,
          JointPWRAttorney: value?.data?.data?.JointPWRAttorney,
          JointAttorneyAddress: value?.data?.data?.JointAttorneyAddress,
          JointRenouncedCitizenchip: value?.data?.data?.JointRenouncedCitizenchip,
          JointTaxformSubmit: value?.data?.data?.JointTaxformSubmit,
          JointformSubmitDate: value?.data?.data?.JointformSubmitDate,
          CNICFrontFile: value?.data?.data?.cnicfront,
          CNICBackFile: value?.data?.data?.cnicback,
          kinCNICFrontFile: value?.data?.data?.kinCNIC_front,
          kinCNICBackFile: value?.data?.data?.kinCNIC_back,
          MailingAddProof: value?.data?.data?.MailingAddProof,
          IncomeProof: value?.data?.data?.IncomeProof,
          // AccMaintCertificate: value?.data?.data?.,
          Signatures: "",
          undertakingAccepted: value?.data?.data?.tradingAgreement,
          giftAccepted: value?.data?.data?.giftAgreement,
          retirementAccepted: value?.data?.data?.retirementAgreement,
          termsandConditions: true,
          accountOpeningtermsandConditions: true,
          aggrementtermsandConditions: value?.data?.data?.tripartiteAgreement,
          Loading: false,
        })
      }
      else if (value?.data?.data.status == 'Submitted' || value?.data?.data.status == 'Approved' || value?.data?.data.status == 'submitted') {
        this.setState({
          redirect: true
        })
      }
      else {
        this.setState({
          Loading: false
        })
      }
    })

  }

  state = {
    Loading: false,
    redirect: false,
    uid: localStorage.getItem('uid'),
    step: 1,
    AccountType: 'Individual',
    firstName: "",
    RelativeName: "",
    email: "",
    phoneNumber: "",
    BirthDay: "",
    BirthCountry: "",
    BirthCity: "",
    Nationality: "",
    Resident: "",
    IDType: "CNIC",
    CNIC: "",
    IssueDate: "",
    ExpiryDate: "",
    lifeTimeExpiry: false,
    Gender: "",
    Street: "",
    country: "",
    Provinces: "",
    City: "",
    MailingAddress: true,
    MailStreet: "",
    mailCountry: "",
    MailProvinces: "",
    MailCity: "",
    BussType: "",
    IncomeSource: "",
    CompName: "",
    AnnualIncome: "",
    OtherIncome: "",
    TaxFiler: "",
    NTN: "",
    PoliticalExpose: "",
    USCitizen: "NO",
    USGREENCARD: "NO",
    USTIN: "",
    USGREENCARDNum: "",
    OverseasAddress: "",
    frgnNumber: "",
    PWRAttorney: "",
    AttorneyAddress: "",
    renouncedCitizenchip: "",
    taxformSubmit: "",
    formSubmitDate: "",
    KinName: "",
    KinFthrName: "",
    KinIDType: "",
    KinCNIC: "",
    KinRelation: "",
    KinMailstreet: "",
    KinMailCountry: "",
    KinMailProvinces: "",
    KinMailCity: "",
    KinNumber: "",
    KinPhoneNumber: "",
    KinFax: "",
    KinEmail: "",
    BankTitle: "",
    BankNum: "",
    // BankBranch: "",
    BankAddress: "",
    AccountOperatingInstruction: "",
    AccountOperatingInstructionOtherDetails: "",
    // ZakatExemption: "",
    // ReasonZakat: "",
    // otherZakatReason: "",
    TaxExemption: "",
    // TransactionMode: "",
    Minnorrelation: "",
    MinnorRelationDetails: "",
    JointAccountTitle: "",
    JointRelativeName: "",
    Jointemail: "",
    JointPhoneNumber: "",
    JointNumber: "",
    JointFaxNumber: "",
    Jointstreet: "",
    Jointcountry: "",
    JointProvinces: "",
    JointCity: "",
    JointMailingAddress: false,
    JointMailstreet: "",
    JointmailCountry: "",
    JointMailProvinces: "",
    JointMailCity: "",
    JointBirthDay: "",
    JointBirthCountry: "",
    JointBirthCity: "",
    JointNationality: "",
    JointResident: "",
    JointCNIC: "",
    JointIDType: "",
    JointIssueDate: "",
    JointExpiryDate: "",
    JointlifeTimeExpiry: true,
    JointGender: "",
    JointProfession: "",
    JointIncomeSource: "",
    JointCompName: "",
    JointAnnualIncome: "",
    JointOtherIncome: "",
    JointTaxFiler: "",
    JointNTN: "",
    JointPoliticalExpose: "",
    JointUSCitizen: "",
    JointUSGREENCARD: "",
    JointUSTIN: "",
    JointUSGREENCARDNum: "",
    JointOverseasAddress: "",
    JointfrgnNumber: "",
    JointPWRAttorney: "",
    JointAttorneyAddress: "",
    JointRenouncedCitizenchip: "",
    JointTaxformSubmit: "",
    JointformSubmitDate: "",
    CNICFrontFile: "",
    CNICBackFile: "",
    kinCNICFrontFile: '',
    kinCNICBackFile: '',
    MailingAddProof: "",
    IncomeProof: "",
    AccMaintCertificate: "",
    Signatures: "",
    undertakingAccepted: false,
    giftAccepted: false,
    retirementAccepted: false,
    termsandConditions: false,
    accountOpeningtermsandConditions: false,
    aggrementtermsandConditions: false,
    residentiaProvinceList: [],
    residentialCitiesList: [],
    mailProvinceList: [],
    mailCitiesList: [],
    KinmailProvinceList: [],
    KinmailCitiesList: [],
    JointresidentiaProvinceList: [],
    JointresidentialCitiesList: [],
    JointmailProvinceList: [],
    JointmailCitiesList: [],
  };

  // go back to previous step

  // state = SampleState


  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  goToPersonal = () => {
    this.setState({ step: 2 });
  };
  goToIdentity = () => {
    this.setState({ step: 3 });
  };

  // handle field change
  handleChange = (e) => {

    const { name, value, type, checked, files } = e.target;
    // console.log({ name, value, type, checked, files })
    if (name === 'AccountType') {
      this.nextStep()
      if (value !== 'Joint') {
        this.setState({
          JointAccountTitle: "",
          JointRelativeName: "",
          Jointemail: "",
          JointPhoneNumber: "",
          JointNumber: "",
          JointFaxNumber: "",
          Jointstreet: "",
          Jointcountry: "",
          JointProvinces: "",
          JointCity: "",
          JointMailingAddress: "",
          JointMailstreet: "",
          JointmailCountry: "",
          JointMailProvinces: "",
          JointMailCity: "",
          JointBirthDay: "",
          JointBirthCountry: "",
          JointBirthCity: "",
          JointNationality: "",
          JointResident: "",
          JointCNIC: "",
          JointIDType: "",
          JointIssueDate: "",
          JointExpiryDate: "",
          JointlifeTimeExpiry: true,
          JointGender: "",
          JointProfession: "",
          JointIncomeSource: "",
          JointCompName: "",
          JointAnnualIncome: "",
          JointOtherIncome: "",
          JointTaxFiler: "",
          JointNTN: "",
          JointPoliticalExpose: "",
          JointUSCitizen: "",
          JointUSGREENCARD: "",
          JointUSTIN: "",
          JointUSGREENCARDNum: "",
          JointOverseasAddress: "",
          JointfrgnNumber: "",
          JointPWRAttorney: "",
          JointAttorneyAddress: "",
          JointRenouncedCitizenchip: "",
          JointTaxformSubmit: "",
          JointformSubmitDate: "",
        })
      }
      if (value !== 'Minor') {
        this.setState({
          Minnorrelation: "",
          MinnorRelationDetails: "",
        })
      }
      this.setState({ [name]: value })
    }
    else if (type === "checkbox") {
      this.setState({
        [name]: checked,
      });
    }
    else if (type === "file") {
      this.setState({ [name]: files[0] });
    }
    else if ((name === "CNIC" && this.state.IDType !== 'Passport') || name === "KinFax" || name === "KinNumber" || (name === "KinCNIC" && this.state.KinIDType !== 'Passport') || name === "USGREENCARDNum" || name === "USTIN" || (name === "JointCNIC" && this.state.JointIDType !== 'Passport')) {
      this.setState({ [name]: value.replace(/[^0-9]/gi, "") });
    }
    else {
      this.setState({ [name]: value });
    }

    if (name == 'lifeTimeExpiry') {
      this.setState({ ExpiryDate: '' });
    }
    if (name == 'JointlifeTimeExpiry') {
      this.setState({ JointExpiryDate: '' });
    }
  };

  handleDrctChange = (name, e) => {
    // console.log({ name, e })
    this.setState({ [name]: e });
    if (name == 'IBAN') {
      this.setState({ IBANError: !IBAN.isValid(e['iban']) });
    }
  };

  render() {
    const { step } = this.state;
    const {
      uid,
      AccountType,
      firstName,
      RelativeName,
      email,
      phoneNumber,
      BirthDay,
      BirthCountry,
      BirthCity,
      Nationality,
      Resident,
      IDType,
      CNIC,
      IssueDate,
      ExpiryDate,
      lifeTimeExpiry,
      Gender,
      Street,
      country,
      Provinces,
      City,
      MailingAddress,
      MailStreet,
      mailCountry,
      MailProvinces,
      MailCity,
      BussType,
      IncomeSource,
      CompName,
      AnnualIncome,
      OtherIncome,
      TaxFiler,
      NTN,
      PoliticalExpose,
      USCitizen,
      USGREENCARD,
      USTIN,
      USGREENCARDNum,
      OverseasAddress,
      frgnNumber,
      PWRAttorney,
      AttorneyAddress,
      renouncedCitizenchip,
      taxformSubmit,
      formSubmitDate,
      KinName,
      KinFthrName,
      KinIDType,
      KinCNIC,
      KinRelation,
      KinMailstreet,
      KinMailCountry,
      KinMailProvinces,
      KinMailCity,
      KinNumber,
      KinPhoneNumber,
      KinFax,
      KinEmail,
      BankTitle,
      BankNum,
      // BankBranch,
      BankAddress,
      AccountOperatingInstruction,
      AccountOperatingInstructionOtherDetails,
      // ZakatExemption,
      // ReasonZakat,
      // otherZakatReason,
      TaxExemption,
      // TransactionMode,
      Minnorrelation,
      MinnorRelationDetails,
      JointAccountTitle,
      JointRelativeName,
      Jointemail,
      JointPhoneNumber,
      JointNumber,
      JointFaxNumber,
      Jointstreet,
      Jointcountry,
      JointProvinces,
      JointCity,
      JointMailingAddress,
      JointMailstreet,
      JointmailCountry,
      JointMailProvinces,
      JointMailCity,
      JointBirthDay,
      JointBirthCountry,
      JointBirthCity,
      JointNationality,
      JointResident,
      JointCNIC,
      JointIDType,
      JointIssueDate,
      JointExpiryDate,
      JointlifeTimeExpiry,
      JointGender,
      JointProfession,
      JointIncomeSource,
      JointCompName,
      JointAnnualIncome,
      JointOtherIncome,
      JointTaxFiler,
      JointNTN,
      JointPoliticalExpose,
      JointUSCitizen,
      JointUSGREENCARD,
      JointUSTIN,
      JointUSGREENCARDNum,
      JointOverseasAddress,
      JointfrgnNumber,
      JointPWRAttorney,
      JointAttorneyAddress,
      JointRenouncedCitizenchip,
      JointTaxformSubmit,
      JointformSubmitDate,
      CNICFrontFile,
      CNICBackFile,
      kinCNICFrontFile,
      kinCNICBackFile,
      MailingAddProof,
      IncomeProof,
      AccMaintCertificate,
      Signatures,
      undertakingAccepted,
      giftAccepted,
      retirementAccepted,
      termsandConditions,
      accountOpeningtermsandConditions,
      aggrementtermsandConditions,
      residentiaProvinceList,
      residentialCitiesList,
      mailProvinceList,
      mailCitiesList,
      KinmailProvinceList,
      KinmailCitiesList,
      JointresidentiaProvinceList,
      JointresidentialCitiesList,
      JointmailProvinceList,
      JointmailCitiesList,
    } = this.state;
    const values = {
      uid,
      AccountType,
      firstName,
      RelativeName,
      email,
      phoneNumber,
      BirthDay,
      BirthCountry,
      BirthCity,
      Nationality,
      Resident,
      IDType,
      CNIC,
      IssueDate,
      ExpiryDate,
      lifeTimeExpiry,
      Gender,
      Street,
      country,
      Provinces,
      City,
      MailingAddress,
      MailStreet,
      mailCountry,
      MailProvinces,
      MailCity,
      BussType,
      IncomeSource,
      CompName,
      AnnualIncome,
      OtherIncome,
      TaxFiler,
      NTN,
      PoliticalExpose,
      USCitizen,
      USGREENCARD,
      USTIN,
      USGREENCARDNum,
      OverseasAddress,
      frgnNumber,
      PWRAttorney,
      AttorneyAddress,
      renouncedCitizenchip,
      taxformSubmit,
      formSubmitDate,
      KinName,
      KinFthrName,
      KinIDType,
      KinCNIC,
      KinRelation,
      KinMailstreet,
      KinMailCountry,
      KinMailProvinces,
      KinMailCity,
      KinNumber,
      KinPhoneNumber,
      KinFax,
      KinEmail,
      BankTitle,
      BankNum,
      // BankBranch,
      BankAddress,
      AccountOperatingInstruction,
      AccountOperatingInstructionOtherDetails,
      // ZakatExemption,
      // ReasonZakat,
      // otherZakatReason,
      TaxExemption,
      // TransactionMode,
      Minnorrelation,
      MinnorRelationDetails,
      JointAccountTitle,
      JointRelativeName,
      Jointemail,
      JointPhoneNumber,
      JointNumber,
      JointFaxNumber,
      Jointstreet,
      Jointcountry,
      JointProvinces,
      JointCity,
      JointMailingAddress,
      JointMailstreet,
      JointmailCountry,
      JointMailProvinces,
      JointMailCity,
      JointBirthDay,
      JointBirthCountry,
      JointBirthCity,
      JointNationality,
      JointResident,
      JointCNIC,
      JointIDType,
      JointIssueDate,
      JointExpiryDate,
      JointlifeTimeExpiry,
      JointGender,
      JointProfession,
      JointIncomeSource,
      JointCompName,
      JointAnnualIncome,
      JointOtherIncome,
      JointTaxFiler,
      JointNTN,
      JointPoliticalExpose,
      JointUSCitizen,
      JointUSGREENCARD,
      JointUSTIN,
      JointUSGREENCARDNum,
      JointOverseasAddress,
      JointfrgnNumber,
      JointPWRAttorney,
      JointAttorneyAddress,
      JointRenouncedCitizenchip,
      JointTaxformSubmit,
      JointformSubmitDate,
      CNICFrontFile,
      CNICBackFile,
      kinCNICFrontFile,
      kinCNICBackFile,
      MailingAddProof,
      IncomeProof,
      AccMaintCertificate,
      Signatures,
      undertakingAccepted,
      giftAccepted,
      retirementAccepted,
      termsandConditions,
      accountOpeningtermsandConditions,
      aggrementtermsandConditions,
      residentiaProvinceList,
      residentialCitiesList,
      mailProvinceList,
      mailCitiesList,
      KinmailProvinceList,
      KinmailCitiesList,
      JointresidentiaProvinceList,
      JointresidentialCitiesList,
      JointmailProvinceList,
      JointmailCitiesList,
    };

    // alert(this.state.Loading)

    // console.log("state", this.state);
    if (this.state.redirect) {
      return (

        <Navigate to='/FormSubmitted' replace={true} />
      )
    }
    else if (!this.state.Loading) {
      switch (step) {
        case 0:
          return (
            <>
              <NavigationBar step={this.state.step} />
              <SelectType
                handleDrctChange={this.handleDrctChange}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </>
          );
        case 1:
          return (
            <>
              <NavigationBar step={this.state.step} />
              <PersonalDetails
                handleDrctChange={this.handleDrctChange}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </>
          );
        case 2:
          return (
            <>
              <NavigationBar step={this.state.step} />
              <SourceIncome
                handleDrctChange={this.handleDrctChange}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </>
          );
        // case 3:
        //   return (
        //     <>
        //       <NavigationBar step={this.state.step} />
        //       <ForiegnAccount
        //         handleDrctChange={this.handleDrctChange}
        //         prevStep={this.prevStep}
        //         nextStep={this.nextStep}
        //         handleChange={this.handleChange}
        //         values={values}
        //       />
        //     </>
        //   );
        case 3:
          return (
            <>
              <NavigationBar step={this.state.step} />
              <NextToKin
                handleDrctChange={this.handleDrctChange}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </>
          );
        // case 5:
        //   return (
        //     <>
        //       <NavigationBar step={this.state.step} />
        //       <BankMandate
        //         handleDrctChange={this.handleDrctChange}
        //         prevStep={this.prevStep}
        //         nextStep={this.nextStep}
        //         handleChange={this.handleChange}
        //         values={values}
        //       />
        //     </>
        //   );
        case this.state.AccountType === 'Joint' && 4:
          return (
            <>
              <NavigationBar step={this.state.step} Acc={this.state.AccountType} />

              <JointApplication
                handleDrctChange={this.handleDrctChange}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </>
          );
        case this.state.AccountType === 'Minor' && 4:
          return (
            <>
              <NavigationBar step={this.state.step} Acc={this.state.AccountType} />
              <Guardian
                handleDrctChange={this.handleDrctChange}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </>
          );
        // case this.state.AccountType === 'Individual' && 4 || 5:
        //   return (
        //     <>
        //       <NavigationBar step={this.state.step} Acc={this.state.AccountType} />
        //       <AccInstruct
        //         handleDrctChange={this.handleDrctChange}
        //         prevStep={this.prevStep}
        //         nextStep={this.nextStep}
        //         handleChange={this.handleChange}
        //         values={values}
        //       />
        //     </>
        //   );
        case this.state.AccountType === 'Individual' && 4 || 5:
          return (
            <>
              <NavigationBar step={this.state.step} Acc={this.state.AccountType} />
              <FileUploading
                handleDrctChange={this.handleDrctChange}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </>
          );


        case this.state.AccountType === 'Individual' && 5 || 6:
          return (
            <>
              <NavigationBar step={this.state.step} Acc={this.state.AccountType} />
              <UnderTaking
                handleDrctChange={this.handleDrctChange}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </>
          );



        case this.state.AccountType === 'Individual' && 6 || 7:
          return (
            <>
              <NavigationBar step={this.state.step} Acc={this.state.AccountType} />
              <TermsAndConditions
                handleDrctChange={this.handleDrctChange}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </>
          );

        case this.state.AccountType === 'Individual' && 7 || 8:
          return (
            <>
              <NavigationBar step={this.state.step} Acc={this.state.AccountType} />
              <ReviewApplication
                handleDrctChange={this.handleDrctChange}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </>
          );



        // never forget the default case, otherwise VS code would be mad!
        default:
        // do nothing
      }
    }
    else {
      return (
        <p>Loading</p>
      )
    }
  }
}




