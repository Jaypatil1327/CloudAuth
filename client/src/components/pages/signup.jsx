import { useForm } from "react-hook-form";
import CommonForm from "../Form/common-form";
import { signup } from "../Form/formConfig";
import Logo from "../miniComponents/logo";

function SignUp() {
  const form = useForm({
    defaultValues: {
      name: "",
      phone_number: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(data) {
    console.log(data);
    form.reset();
  }
  return (
    <div className="w-full h-full flex  flex-col justify-center items-center space-y-6.5">
      <Logo></Logo>
      <CommonForm
        btnTxt="Sign up"
        form={form}
        formConfig={signup}
        onSubmit={onSubmit}
        formName="Sign Up"
        href="/login"
        switchTo="already register switch to login"
      ></CommonForm>
    </div>
  );
}

export default SignUp;
