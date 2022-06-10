import React from "react";
import icon from "../../../Assets/Img/DoubleTriangle.png";

const SelectType = ({ handleDrctChange, nextStep, handleChange, values }) => {
  return (
    <>
      <div className="container-fluid pb-3">
        <div className="container">
          <div className="justify-content-center align-items-center d-flex centerParent">
            <div className="py-3 MainAcc">
              <h1 className="fs24 ls4 fw-800 t-grey-800">Welcome to Investor Portfolio Securities (IPS) Account</h1>
              <p className="fs16 fw-400 t-grey-400">
                To get started please select any one of the account types below
                and process to your IPS account opening form.
              </p>

              <ul className="list-group">
                <li className="list-group-item">
                  <div className={`itemm ${values.AccountType == 'Individual' ? 'Selected' : ''}`}>
                    <input
                      type="radio"
                      className="form-check-input me-3 ms-0 my-0 "
                      id="Individual"
                      value="Individual"
                      name="AccountType"
                      onChange={handleChange}
                      defaultChecked={values.AccountType == 'Individual'}
                      aria-label="..." />
                    <label className="fs16 fw-600 pb-0" htmlFor="Individual">
                      Individual Account</label>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className={`itemm ${values.AccountType == 'Joint' ? 'Selected' : ''}`}>
                    <input
                      type="radio"
                      className="form-check-input me-3 ms-0 my-0 "
                      id="Joint"
                      value="Joint"
                      name="AccountType"
                      onChange={handleChange}
                      defaultChecked={values.AccountType == 'Joint'}
                      aria-label="..." />
                    <label className="fs16 fw-600 pb-0" htmlFor="Joint">
                      Joint Account</label>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className={`itemm ${values.AccountType == 'Minor' ? 'Selected' : ''}`}>
                    <input className="form-check-input me-3 ms-0 my-0 "
                      type="radio"
                      id="Minor"
                      value="Minor"
                      name="AccountType"
                      onChange={handleChange}
                      defaultChecked={values.AccountType == 'Minor'}
                      aria-label="..." />
                    <label className="fs16 fw-600 pb-0" htmlFor="Minor">
                      Minor Account</label>
                  </div>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectType;
