import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Link, useNavigate } from "react-router-dom";

function CommonForm({
  formName,
  form,
  onSubmit,
  formConfig,
  btnTxt,
  href,
  switchTo,
}) {
  const nav = useNavigate();
  return (
    <Card className="w-8/10 md:w-md h-fit shadow-2xl transition transition-transform duration-1000 ease-in">
      <CardHeader>
        <CardTitle>{formName}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            {formConfig.map((value) => {
              return (
                <FormField
                  name={value.name}
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{value.label}</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder={value.placeholder}
                          type={value.type}
                        ></Input>
                      </FormControl>
                    </FormItem>
                  )}
                ></FormField>
              );
            })}

            <Button type="submit">{btnTxt}</Button>
            <p
              onClick={() => nav(href)}
              className="inline-block text-sm underline-offset-4 hover:underline text-center  opacity-80 cursor-context-menu"
            >
              {switchTo}
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default CommonForm;
