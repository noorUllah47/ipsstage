import { Select, Tooltip } from 'antd';



const { Option } = Select;

const BankMandate = ({
    handleDrctChange,
    prevStep,
    nextStep,
    handleChange,
    values,
}) => {

    return (

        <div className="row mt-40">

            <div className="col-12 col-sm-6 col-lg-4  d-flex flex-column mb-3">
                <label
                    htmlFor="BankTitle"
                    className="col-12 col-form-label fw-500"
                >
                    Bank Title
                </label>
                <input
                    type="text"
                    name="BankTitle"
                    className="form-control mt-auto"
                    placeholder="Bank Title"
                    value={values.BankTitle}
                    onChange={handleChange}
                    id="BankTitle"
                    required
                />
            </div>

            <div className="col-12  col-sm-6 col-lg-4 d-flex flex-column mb-3">
                <label
                    htmlFor="BankNum"
                    className="col-12 col-form-label fw-500"
                >
                    Bank Account Number
                </label>
                <input
                    type="text"
                    name="BankNum"
                    className="form-control mt-auto"
                    placeholder="Account Number"
                    value={values.BankNum}
                    onChange={handleChange}
                    id="BankNum"
                    maxLength="24"
                    required
                />
            </div>
            {/* <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
            <label
                htmlFor="BankBranch"
                className="col-12 col-form-label fw-500"
            >
                Bank and Branch Name with Code
            </label>
            <input
                type="text"
                name="BankBranch"
                className="form-control mt-auto"
                placeholder="Bank Branch"
                value={values.BankBranch}
                onChange={handleChange}
                id="BankBranch"
                required
            />
        </div> */}
            <div className="col-12 col-lg-8  d-flex flex-column mb-3">
                <label
                    htmlFor="BankAddress"
                    className="col-12 col-form-label fw-500"
                >
                    Bank Branch Address Name
                    <Tooltip overlayStyle={{ maxWidth: '350px' }} title={<>Please provide the address for your bank branch. For your convenience we have included an official list from various banks below. Please note that this list is only updated periodically and not maintained by Next Capital Limited.
                        Standard Chartered: https://www.sc.com/pk/atm-branch-locator/
                        Bank Alfalah: https://www.bankalfalah.com/branch-atm-locator/
                        Meezan Bank: https://www.meezanbank.com/branch-locator/
                        HBL: https://www.hbl.com/branch-locator
                        UBL: https://www.ubldigital.com/Branches
                        MCB: https://www.mcb.com.pk/branch-locator/branch
                        Allied Bank: https://www.abl.com/services/branch-network/
                        Habib Metro: https://www.habibmetro.com/atm-branch-locator/
                        Bank Al Habib: https://www.bankalhabib.com/locate-us
                        Bank of Punjab: https://www.bop.com.pk/Branch-Network
                        National Bank of Pakistan: https://www.nbp.com.pk/brntwrk/OnlineBrFinder.aspx
                        Askari Bank: https://askaribank.com/find-us/
                        Al Baraka: https://www.albaraka.com.pk/store-locator/bank-and-atm/index.php
                        BankIslami Pakistan: https://bankislami.com.pk/atm-branch-locator/
                        Dubai Islamic Bank: https://www.dibpak.com/wp-content/uploads/2020/03/DIBPL-OPEN-BRANCH-LIST.pdf
                        Faysal Bank: https://www.faysalbank.com/en/branch-locator/</>}
                    >
                        <span className="ms-3">
                            <HelpIcon />
                        </span>
                    </Tooltip>
                </label>
                <input
                    type="text"
                    name="BankAddress"
                    className="form-control mt-auto"
                    placeholder="Address"
                    value={values.BankAddress}
                    onChange={handleChange}
                    id="BankAddress"
                    required
                />
            </div>


        </div>
    );
};

export default BankMandate;



const HelpIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 15C9.45 15 9 14.55 9 14V10C9 9.45 9.45 9 10 9C10.55 9 11 9.45 11 10V14C11 14.55 10.55 15 10 15ZM11 7H9V5H11V7Z" fill="#D2D6DC" />
    </svg>

)