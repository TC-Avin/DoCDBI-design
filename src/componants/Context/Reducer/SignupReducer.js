import { signUp } from "../APIs";

  //signup
  export const handleSignup = async (values, resetForm,setIsLoading,navigate) => {
    setIsLoading(true);
    try {
      const res = await signUp(values);
      if (res.data === "Account Activation Mail Sent!") {
        resetForm({ values: "" });
        navigate("/email", {
          state: {
            email: values.email,
          },
        });
      }
    } catch (e) {
      console.log(e);
    }
    finally{
      setIsLoading(false);
    }
  };