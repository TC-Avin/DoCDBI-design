import React, { useContext, useEffect, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import AddTaskIcon from "@mui/icons-material/AddTask";
import PopUpModel from "../../../../componants/comman/PopUpModel";
import { CheckoutForm } from "./CheckoutForm";
import subscription from "../../../../Data/subscription.json";
import {
    BUY_PLAN,
    GET_SUBSCRIPTION,
} from "../../../../componants/Context/Types";
import { AuthContext } from "../../../../componants/Context/AuthContext";

const VerifyManagement = () => {
    const { dispatch } = useContext(AuthContext);
    const [tab, settab] = useState(0);
    const [CheckOutModel, setCheckOutModel] = useState(false);
    const [modelData, setModelData] = useState({});
    const [upgradebtn, setupgradebtn] = useState(false);

    const [allPlans, setAllPlans] = useState();
    const [isLoading, setIsLoading] = useState({
        value: false,
        message: "",
    });
    const handlemodel = () => {
        setCheckOutModel("");
    };
    const list = [
        { title: "Silver Package" },
        { title: "Gold Package" },
        { title: "Platinum Package" },
        // { title: "enterprise" },
    ];

    const setModelCheckOut = (tab) => {
        setModelData(subscription.subscription[tab]);
        setCheckOutModel(true);
    };

    const handleUpgrade = (sub_id) => {
        dispatch({ type: BUY_PLAN, payload: sub_id, setIsLoading: setIsLoading });
    };

    const getSubscription = () => {
        dispatch({
            type: GET_SUBSCRIPTION,
            upDateState: setAllPlans,
        });
    };

    useEffect(() => {
        getSubscription();
    }, []);

    return (
        <>
            <div className="d-flex flex-row justify-content-around  upgrade-color   subscripton-header">
                {list.map((data, index) => {
                    return (
                        <>
                            <div
                                variant="contained"
                                className={`${tab == index && "selected-tab"
                                    } p-2 pointer subscription-hover`}
                                onClick={() => {
                                    // role == "admin"  && setprofile(!profile)
                                    // role == "user" && navigate(data.link, { replace: true });
                                    settab(index);
                                }}
                            >
                                {" "}
                                <div color="secondary">
                                    <div className="mx-1">{data.title}</div>{" "}
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
            <hr class="m-0"></hr>

            {allPlans ? (
                <div className="d-flex subscripton-content">
                    <div className="d-flex w-50 flex-column p-4 justify-content-between">
                        <div className="d-flex flex-column">
                            <div className="d-flex justify-content-between">
                                <h1 className="d-flex ">
                                    ${allPlans[tab].amount}
                                    <h6 className="d-flex align-items-end">/month</h6>
                                </h1>
                                {tab == "essentials" && <p className="popular">Most Popular</p>}
                            </div>
                            <h5 className="text-primary">
                                {allPlans[tab].credits} Credits{" "}
                                <span className="mx-2 text-black">Anually</span>
                            </h5>
                            <h6 className="text-primary">
                                <span className=" text-black">Users:{allPlans[tab].no_of_user}</span>
                            </h6>
                            <h6 className="text-primary">
                                <span className=" text-black">Validity:{allPlans[tab].validity_days}</span>
                            </h6>
                            <h6 className="text-secondary">
                                {/* {subscription.subscription[tab].additional_Credits} */}
                            </h6>
                            <h5 className="text-primary m-0">
                                {/* {subscription.subscription[tab].annualy} */}
                            </h5>
                            <div className="">{allPlans[tab].desc}</div>
                            <div className="text-primary">Description:</div>
                        </div>
                        <div className="mt-4">
                            {/* <div className="d-flex flex-column mt-5"></div> */}
                            <div className="subscription-upgrade">
                                <p className=" d-flex justify-content-between upgrade-p">
                                    <div className=" d-flex justify-content-between ">
                                        <input
                                            type="radio"
                                            id="html"
                                            name="Plan"
                                            value="Monthly"
                                            className="m-1 upgrade-radio pointer"
                                            onClick={() => {
                                                setupgradebtn(true);
                                            }}
                                        />
                                        <h6 className="radio-size mx-1">Monthly</h6>
                                    </div>

                                    <div className=" d-flex justify-content-between ">
                                        <input
                                            type="radio"
                                            id="html"
                                            name="Plan"
                                            value="Annualy"
                                            className="m-1 upgrade-radio pointer"
                                            onClick={() => {
                                                setupgradebtn(true);
                                            }}
                                        />
                                        <h6 className="radio-size mx-1">Annualy</h6>
                                    </div>
                                </p>
                            </div>
                            <p class="mb-0 d-flex justify-content-center w-100 ">
                                <Button
                                    variant="contained"
                                    className=" upgrade w-100"
                                    onClick={() => {
                                        upgradebtn &&
                                            // handleUpgrade(allPlans[tab]._id);
                                            setCheckOutModel(true);
                                    }}
                                >
                                    {isLoading.value ? (
                                        <CircularProgress sx={{ fontSize: 10, color: "white" }} />
                                    ) : (
                                        "Upgrade Now!"
                                    )}
                                </Button>
                            </p>
                            <PopUpModel
                                open={CheckOutModel}
                                close={handlemodel}
                                title={"Billing Information"}
                                className="checkout-model-width"
                            >
                                <CheckoutForm modelData={allPlans[tab]} />
                            </PopUpModel>
                        </div>
                    </div>
                    <div className="w-50 d-flex flex-column p-4 justify-content-between bg-light">
                        <h4>Features:</h4>
                        {subscription.subscription[tab].features.map((d) => {
                            return (
                                <h6>
                                    <AddTaskIcon className="fill-blue mr-3" />
                                    {d}
                                </h6>
                            );
                        })}
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default VerifyManagement;
