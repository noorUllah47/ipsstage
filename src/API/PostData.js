import axios from "axios";

class PostData {
    constructor() {
        this.result = [];
    }

    SubmitDocument = (data) => {
        // console.log({ data })
        const res = async () => {

            let formData = new FormData()
            formData.append('uid', data.uid);
            typeof data.CNICFrontFile !== 'string' && formData.append('cnic_front', data.CNICFrontFile);
            typeof data.CNICBackFile !== 'string' && formData.append('cnic_back', data.CNICBackFile);
            typeof data.IncomeProof !== 'string' && formData.append('IncomeProof', data.IncomeProof);
            typeof data.kinCNICFrontFile !== 'string' && formData.append('kinCNIC_front', data.kinCNICFrontFile);
            typeof data.kinCNICBackFile !== 'string' && formData.append('kinCNIC_back', data.kinCNICBackFile);
            typeof data.MailingAddProof !== 'string' && formData.append('MailingAddProof', data.MailingAddProof);
            // formData.append('AccMaintCertificate', data.AccMaintCertificate);
            const resp = await axios
                .post("https://ips-multinet-staging.finqalab.com/v1/doc/upload", formData)
                .then(async (response) => {
                    // console.log(response)
                })
                .catch(function (error) {
                    // alert(error.response.data.message);
                    console.log('errrro', error);
                });
            return resp;
        };
        return res();
    };

    SubmitForm = (data, func) => {
        // console.log({ data })
        const res = async () => {
            const resp = await axios

                .post("https://ips-multinet-staging.finqalab.com/v1/form/submit", {
                    uid: data.uid,
                    AccountType: data?.AccountType === 'Joint' ? 'Joint' : 'Single',
                    CustomerType: data?.AccountType,
                    firstName: data?.firstName,
                    RelativeName: data?.RelativeName,
                    email: data?.email,
                    phoneNumber: data?.phoneNumber,
                    BirthDay: data?.BirthDay,
                    BirthCountry: data.BirthCountry,
                    BirthCity: data.BirthCity,
                    Resident: data?.Resident?.children,
                    Nationality: data?.Nationality.label,
                    otherNationality: " ",
                    IDType: data?.IDType,
                    CNIC: data?.CNIC,
                    IssueDate: data?.IssueDate,
                    ExpiryDate: data?.ExpiryDate,
                    lifeTimeExpiry: data?.lifeTimeExpiry,
                    Gender: data?.Gender,
                    Street: data?.Street,
                    Country: data?.country?.label,
                    Provinces: data?.Provinces?.label,
                    City: data?.City?.label,
                    MailingAddress: data?.MailingAddress,
                    MailStreet: data?.MailingAddress ? data?.Street : data?.MailStreet,
                    MailCountry: data?.MailingAddress ? data?.country?.label : data?.mailCountry?.label,
                    MailProvinces: data?.MailingAddress ? data?.Provinces?.label : data?.MailProvinces?.label,
                    MailCity: data?.MailingAddress ? data?.City?.label : data?.MailCity?.label,
                    BussType: data?.BussType?.children,
                    IncomeSource: data?.IncomeSource?.children,
                    CompName: data?.CompName,
                    AnnualIncome: data?.AnnualIncome,
                    OtherIncome: data?.OtherIncome,
                    TaxFiler: data?.TaxFiler,
                    NTN: data?.NTN,
                    PoliticalExpose: data?.PoliticalExpose,
                    USCitizen: data?.USCitizen,
                    GCard: data?.USGREENCARD,
                    USTIN: data?.USCitizen == 'YES' || data?.USGREENCARD == 'YES' ? data?.USTIN : '',
                    USGREENCARD: data?.USGREENCARD == 'YES' ? data?.USGREENCARDNum : '',
                    OverseasAddress: data?.USCitizen == 'YES' || data?.USGREENCARD == 'YES' ? data?.OverseasAddress : '',
                    frgnNumber: data?.USCitizen == 'YES' || data?.USGREENCARD == 'YES' ? data?.frgnNumber : '',
                    PWRAttorney: data?.USCitizen == 'YES' || data?.USGREENCARD == 'YES' ? data?.PWRAttorney : '',
                    AttorneyAddress: data?.USCitizen == 'YES' || data?.USGREENCARD == 'YES' ? data?.AttorneyAddress : '',
                    renouncedCitizenchip: data?.USCitizen == 'YES' || data?.USGREENCARD == 'YES' ? data?.renouncedCitizenchip : '',
                    taxformSubmit: data?.USCitizen == 'YES' || data?.USGREENCARD == 'YES' ? data?.taxformSubmit : '',
                    formSubmitDate: (data?.USCitizen == 'YES' || data?.USGREENCARD == 'YES') && data.taxformSubmit == 'YES' ? data?.formSubmitDate : '',
                    KinName: data?.KinName,
                    KinFthrName: data?.KinFthrName,
                    KinIDType: data?.KinIDType,
                    KinCNIC: data?.KinCNIC,
                    KinRelation: data?.KinRelation,
                    KinMailstreet: data?.KinMailstreet,
                    KinMailCountry: data?.KinMailCountry?.label || "",
                    KinMailProvinces: data?.KinMailProvinces?.label || "",
                    KinMailCity: data?.KinMailCity?.label || "",
                    KinNumber: data?.KinNumber,    //KinNumber to be Added ==>Added
                    KinPhoneNumber: data?.KinPhoneNumber,
                    KinFax: '',
                    KinEmail: data?.KinEmail,
                    BankTitle: data?.BankTitle,
                    BankNum: data?.BankNum,
                    // BankBranch: data?.BankBranch,
                    BankAddress: data?.BankAddress,
                    AccountOperatingInstruction: data?.AccountOperatingInstruction.children,   //feild to be Added ==>Added
                    AccountOperatingInstructionOtherDetails: data?.AccountOperatingInstructionOtherDetails,   //feild to be Added ==> Added
                    // ZakatExemption: data?.ZakatExemption,
                    // ReasonZakat: data?.ReasonZakat?.children,
                    // otherZakatReason: data?.otherZakatReason,
                    TaxExemption: data?.TaxExemption,
                    TransactionMode: data?.TransactionMode,
                    Minnorrelation: data?.Minnorrelation,
                    MinnorRelationDetails: data?.MinnorRelationDetails,
                    JointAccountTitle: data?.JointAccountTitle,
                    JointRelativeName: data?.JointRelativeName,
                    Jointemail: data?.Jointemail,
                    JointPhoneNumber: data?.JointPhoneNumber,
                    JointNumber: data?.JointNumber, //to be added ==>Added
                    JointFaxNumber: '', //to be added ==>Added
                    Jointstreet: data?.Jointstreet,
                    Jointcountry: data?.Jointcountry?.label,
                    JointProvinces: data?.JointProvinces?.label,
                    JointCity: data?.JointCity?.label,
                    JointMailingAddress: data?.JointMailingAddress,
                    JointMailstreet: data?.JointMailingAddress ? data?.Jointstreet : data?.JointMailstreet,
                    JointmailCountry: data?.JointMailingAddress ? data?.JointCountry?.label : data?.JointmailCountry?.label,
                    JointMailProvinces: data?.JointMailingAddress ? data?.JointProvinces?.label : data?.JointMailProvinces?.label,
                    JointMailCity: data?.JointMailingAddress ? data?.JointCity?.label : data?.JointMailCity?.label,
                    JointBirthDay: data?.JointBirthDay,
                    JointBirthCountry: data?.JointBirthCountry, //to be added ==>Added
                    JointBirthCity: data?.JointBirthCity, //to be added ==>Added
                    JointNationality: data?.JointNationality?.label,
                    JointotherNationality: " ",
                    JointResident: data?.JointResident?.children, //to be added ==>Added
                    JointCNIC: data?.JointCNIC,
                    JointIDType: data?.JointIDType,
                    JointIssueDate: data?.JointIssueDate,
                    JointExpiryDate: data?.JointExpiryDate,
                    JointlifeTimeExpiry: data?.JointlifeTimeExpiry,
                    JointGender: data?.JointGender,
                    JointProfession: data?.JointProfession?.children,
                    JointIncomeSource: data?.JointIncomeSource?.children,
                    JointCompName: data?.JointCompName,
                    JointAnnualIncome: data?.JointAnnualIncome,
                    JointOtherIncome: data?.JointOtherIncome,
                    JointTaxFiler: data?.JointTaxFiler,
                    JointNTN: data?.JointNTN,
                    JointPoliticalExpose: data?.JointPoliticalExpose,
                    JointUSCitizen: data?.JointUSCitizen,
                    JointGCard: data?.JointUSGREENCARD,
                    JointUSTIN: data?.JointUSTIN,
                    JointUSGREENCARD: data?.JointUSGREENCARDNum,
                    JointOverseasAddress: data?.JointOverseasAddress,
                    JointfrgnNumber: data?.JointfrgnNumber,
                    JointPWRAttorney: data?.JointPWRAttorney,
                    JointAttorneyAddress: data?.JointAttorneyAddress,
                    JointRenouncedCitizenchip: data?.JointRenouncedCitizenchip,
                    JointTaxformSubmit: data?.JointTaxformSubmit,
                    JointformSubmitDate: data?.JointformSubmitDate,
                    signature: data?.Signatures,
                    retirementAgreement: data?.retirementAccepted,
                    giftAgreement: data?.giftAccepted,
                    tradingAgreement: data?.undertakingAccepted,
                    tripartiteAgreement: data?.aggrementtermsandConditions,
                    status: 'Submitted',

                },
                    {
                        validateStatus: (s) => s <= 500,
                        responseType: 'blob',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/pdf'
                        }
                    })
                .then(async (response) => {
                    if (response.status !== 200) {
                        // error handling
                        const error = JSON.parse(await response.data.text());
                        console.log('error: ', error);
                        alert(error?.error.error);
                    } else {
                        func()
                        // console.log('agj', response)
                        // const url = window.URL.createObjectURL(new Blob([response.data]));
                        // const link = document.createElement('a');
                        // link.href = url;
                        // link.setAttribute('download', 'file.pdf'); //or any other extension
                        // document.body.appendChild(link);
                        // link.click();
                    }
                })
                .catch(function (error) {
                    // alert(error.response.data.message);
                    console.log('errrro', error);
                });
            return resp;
        };
        return res();
    };

    Return() {
        return this.result;
    }
}
export default new PostData();