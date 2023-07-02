import Head from "next/head";
import Image from "next/image";
import pic from "/public/images/left-box.jpg";
import Layout from "../../../components/layout";
import Form from "@/components/form/form";

export default function Login() {
  const doSubmit = (formValue) => {
    console.warn(formValue);
  };

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      <div className="flex h-screen w-screen">
        <div className="relative flex w-1/2">
          <Image
            src={pic}
            alt="bacground image wth flower"
            priority
            style={{ objectFit: "cover" }}
          />
        </div>


        <div className="relative flex items-center justify-center w-1/2 p-4">

        <div className="card px-10 py-20 shadow-xl min-w-[70%]">
        <div className="form ">
          <p className="text-xl mb-6">Sign in to PlantApp</p>
          <div className="flex flex-col w-full component-preview items-center gap-4 font-sans">
            <Form
              onSubmit={doSubmit}
              fields={[
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
              <div className="form-control w-full items-end text-xs">
                <a className="link">Forgot your password?</a>
              </div>
              <div className="form-control w-full">
                <button className="bg-[#B58D63] text-white " type="submit">
                  SIGN IN
                </button>
              </div>
            </Form>

            <div className="form-control w-full ">
              <span className="flex flex-row justify-normal text-xs gap-2">
                <p>Have you not an account</p> <a className="link">Sign up</a>
              </span>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </Layout>
  );
}
