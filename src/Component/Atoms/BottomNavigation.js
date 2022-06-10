const BottomNavigation = (props) => {
    return (
        <>
            <div className="mb-3 row mt-40">
                <div className="col-sm-8">
                </div>
                <div className="col-sm-4 text-end">
                    {/* <button className="btn-outlined fs16 px-3 py-1 mx-1">
                        {props.first}
                    </button> */}
                    <button
                        className="btn-filled fs16 px-3 py-1 mx-1"
                        type="submit"
                        disabled={props.Nextdisabled}
                        style={{ width: "111px", height: "44px" }}
                    >

                        {props.Loading ? (
                            // <div className="spinner-border text-light" role="status">
                            //     <span className="visually-hidden">Loading...</span>
                            // </div>
                            <div className="whitespinner">
                                <div className="bounce1"></div>
                                <div className="bounce2"></div>
                                <div className="bounce3"></div>
                            </div>
                        ) : (
                            <>{props.second}</>
                        )}

                    </button>
                </div>
            </div>
        </>
    );
}

export default BottomNavigation;