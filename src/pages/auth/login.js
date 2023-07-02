import Head from "next/head";
import Image from "next/image";
import pic from "/public/images/left-box.jpg";
import Layout from "../../../components/layout";

export default function Login() {
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      <div className="flex h-screen w-screen">
        <div className="relative flex flex-1">
          <Image
            src={pic}
            alt="bacground image wth flower"
            priority
            style={{ objectFit: "cover" }}
          />
        </div>


        <div className="relative flex items-center justify-center flex-1 p-4">

              <div className="card px-10 py-20 shadow-xl min-w-[70%]">
            <div className="form ">
            <p className="text-xl mb-6">
              Sign in to PlantApp
            </p>
            <div className="flex flex-col w-full component-preview items-center gap-4 font-sans">
             
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">E-mail address</span>
                </label>
                <input />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" />
              </div>
              <div className="form-control w-full items-end text-xs">
              <a className="link">Forgot your password?</a>
              </div>
              <div className="form-control w-full">
                <button className="bg-[#B58D63] text-white ">SIGN IN</button> 
              </div>
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
