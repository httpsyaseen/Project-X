import LoginBG from "@/public/images/login-bg.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-[91dvh]">
      <div className="hidden lg:block w-7/12 relative">
        <Image
          src={LoginBG}
          alt="Login Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <span className="absolute top-[50%] inset-0 text-center text-white text-5xl">
          Lets Create the Future
          <span className="font-bold">Together</span>
        </span>
      </div>

      <div className="w-full lg:w-5/12 flex items-center justify-center bg-background px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground">
              Create an account
            </h1>
            <p className="text-muted-foreground mt-2">
              Fill in the details below to create a new account.
            </p>
          </div>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                // value={formData.name}
                // onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-primary focus:border-primary focus:outline-primary sm:text-sm"
              />
              {/* {error?.name && (
                <p className="text-red-500 ps-1 text-sm">{error.name}</p>
              )} */}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                // value={formData.email}
                // onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-primary focus:border-primary focus:outline-primary sm:text-sm"
              />
              {/* {error?.email && (
                <p className="text-red-500 ps-1 text-sm">{error.email}</p>
              )} */}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-foreground"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                // value={formData.password}
                // onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-primary focus:border-primary focus:outline-primary sm:text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-md font-medium hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Sign up
            </button>
          </form>
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-primary hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
