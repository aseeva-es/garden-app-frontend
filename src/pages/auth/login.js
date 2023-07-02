import Head from "next/head";
import Form from "@/components/form/form";
import LayoutLeftImage from "../../../components/layoutLeftImage";
import Button from "@/components/button/button";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/images/logo-box.png";

export default function Login() {
  const doSubmit = (formValue) => {
    console.warn(formValue);
  };
const title = 'Sign in to PlantApp'
  return (
    <LayoutLeftImage>
      <Head>
        <title>Login</title>
      </Head>
      <div className="card relative px-10 py-16 shadow-xl min-w-[70%]">
      
      <Image
            src={logo}
            alt="logo image"
            priority
            className="mb-14 mx-auto"
            width={150}
          />
        <div className="form ">
          <p className="text-xl mb-6">{title}</p>
          <div className="flex flex-col w-full component-preview items-center gap-4 font-roboto">
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
              <div className="w-full items-end text-xs">
                <a className="link text-[#5850EC]">Forgot your password?</a>
              </div>
              <div className="w-full">
                <Button>SIGN IN</Button>      
              </div>
            </Form>

            <div className="w-full ">
              <span className="flex flex-row justify-normal text-xs gap-2">
                <p>Have you not an account</p> <Link href = '/auth/signup' className="link text-[#5850EC]">Sign up</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </LayoutLeftImage>
  );
}

// Login.getLayout = function getLayout(page) {
//   return (
//     <Layout>
//       <Head>
//         <title>Login</title>
//       </Head>
//       <LayoutLeftImage>{page}</LayoutLeftImage>
//     </Layout>
//   );
// };
