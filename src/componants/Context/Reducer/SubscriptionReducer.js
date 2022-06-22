import { buySubscription, getPlans } from "../APIs";

export const getSubscriptionPlans = async (upDateState) => {
  try {
    const res = await getPlans();
    console.log(res.data);
    upDateState(res.data.data);
  } catch (e) {
    console.log(e);
  }
};

export const buyPLan = async (sub_id, navigate, setIsLoading) => {
  setIsLoading({
    value: true,
    message: "",
  });
  try {
    const res = await buySubscription(sub_id);
    if (res.data) {
      window.location = res.data.link;
    }
  } catch (e) {
    console.log(e);
    setIsLoading({
      value: false,
      message: e.response.data,
    });
  } finally {
    setTimeout(() => {
      setIsLoading({
        value: false,
        message: "",
      });
    }, 5000);
  }
};
