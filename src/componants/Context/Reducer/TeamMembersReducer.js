import { getTeamMembers, inviteTeamMembers } from "../APIs";

export const getMembers = async (upDateState) => {
  try {
    const res = await getTeamMembers();
    upDateState(res.data);
  } catch (e) {
    console.log(e);
  }
};

export const inviteMember = async (values, resetForm, setIsLoading) => {
  setIsLoading({
    value: true,
  });
  try {
    const res = await inviteTeamMembers(values);
    if (res.data) {
      resetForm({ values: "" });
      setIsLoading({
        value: false,
        message: res.data,
        severity: "success",
      });
    }
  } catch (e) {
    console.log(e);
    setIsLoading({
      value: false,
      message: e.response.data,
      severity: "error",
    });
  } finally {
    setTimeout(() => {
      setIsLoading({
        value: false,
      });
    }, 5000);
  }
};
