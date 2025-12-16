import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function CommonForm({ formName, form, onSubmit, formConfig, btnTxt }) {
  console.log(formConfig);
  console.log(form);
  return (
    <Card className="w-80 md:w-md h-fit">
      <CardHeader>
        <CardTitle>{formName}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
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
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default CommonForm;
