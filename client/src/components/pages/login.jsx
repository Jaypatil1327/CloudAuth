import { useForm } from "react-hook-form";
import CommonForm from "../Form/common-form";
import { login } from "../Form/formConfig";
import Logo from "../miniComponents/logo";
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
    <div className="w-full h-full flex flex-col justify-center items-center space-y-12">
      <Logo></Logo>
      <CommonForm
        formName="Login Form"
        form={form}
        onSubmit={onSubmit}
        formConfig={login}
        btnTxt="Login"
        href="/signup"
        switchTo="to register switch to sign"
      ></CommonForm>
    </div>
  );
}

export default Login;
