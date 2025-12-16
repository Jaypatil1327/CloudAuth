import { useForm } from "react-hook-form";
import CommonForm from "../Form/common-form";
import { login } from "../Form/formConfig";
function Login() {
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
        formName="Login Form"
        form={form}
        onSubmit={onSubmit}
        formConfig={login}
        btnTxt="Login"
      ></CommonForm>
    </div>
  );
}

export default Login;
