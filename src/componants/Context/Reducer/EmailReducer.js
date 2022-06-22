import { forgetPassword, resendEmail } from "../APIs";

export const handleEmail = async (email, setIsLoading) => {
  setIsLoading(true);
  try {
    const res = await resendEmail(email);
  } catch (e) {
    console.log(e);
  } finally {
    setIsLoading(false);
  }
};

export const handleForgetPassword = async (email, setResetPassword) => {
  try {
    const res = await forgetPassword(email);
    if (res.data) {
      setResetPassword({
        value: true,
        message: res.data,
        severity: "success",
      });
    }
  } catch (e) {
    console.log(e);
    setResetPassword({
      value: true,
      message: e.response.data,
      severity: "error",
    });
  }
};
