import Head from "next/head";
import Form from "@/components/form/form";
import LayoutLeftImage from "../../../components/layoutLeftImage";
import Button from "@/components/button/button";

export default function SignUp() {
  const doSubmit = (formValue) => {
    console.warn(formValue);
  };

  return (
    <LayoutLeftImage>
      <Head>
        <title>Signup</title>
      </Head>

      <div className="card px-10 py-20 shadow-xl min-w-[70%]">
        <div className="form ">
          <p className="text-xl mb-6">Sign up for PlantApp</p>
          <div className="flex flex-col w-full component-preview items-center gap-4 font-roboto">
            <Form
              onSubmit={doSubmit}
              fields={[
                {
                  type: "text",
                  placeholder: "Your Full Name",
                  name: "name",
                  label: "Name",
                  required: true,
                },
                {
                  type: "email",
                  placeholder: "Email",
                  name: "email",
                  label: "E-mail address",
                  required: true,
                },
                {
                  type: "password",
                  placeholder: "Password",
                  name: "password",
                  label: "Password",
                  required: true,
                },
              ]}
            >
              <div className=" w-full items-end text-xs">
                <a className="link">Forgot your password?</a>
              </div>
              <div className=" w-full">
                <Button >SIGN UP</Button>
              </div>
            </Form>

            <div className=" w-full ">
              <span className="flex flex-row justify-normal text-xs gap-2">
                <p>Have you not an account</p> <a className="link">Sign up</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </LayoutLeftImage>
  );
}
