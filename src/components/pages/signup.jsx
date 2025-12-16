import { useForm } from "react-hook-form";
import CommonForm from "../Form/common-form";
import { signup } from "../Form/formConfig";

function SignUp() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data) {
    console.log(data);
    form.reset();
  }
  return (
    <div className="w-full h-full flex justify-center items-center">
      <CommonForm
        btnTxt="Sign up"
        form={form}
        formConfig={signup}
        onSubmit={onSubmit}
        formName="Sign Up"
      ></CommonForm>
    </div>
  );
}

export default SignUp;
