import React from "react";
import Image from "next/image";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Code from "@/components/tutorial/Code";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const data = ` const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };`;

function Path() {
  return (
    <Breadcrumb className="self-start text-xl">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="text-white font-semibold">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/blog" className="text-white font-semibold">
            IT
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-white  font-bold">
            Breadcrumb
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default function Page() {
  return (
    <main className="md:bg-blog md:bg-no-repeat md:bg-contain ">
      <section className="bg-blog bg-cover bg-no-repeat md:bg-none text-white md:pt-24 pb-4 md:pb-0">
        <div className="container mx-auto flex items-center justify-center gap-5 flex-col pt-14 md:px-40">
          <Path />
          <h1 className="text-white text-5xl font-bold py-10 self-start">
            How to become an AI expert with no experience
          </h1>
          <h3 className="text-lg text-white">
            Award-winning AI/ML leader and AWS Machine Learning Hero Kesha
            Williams shares how you can successfully enter the AI industry as
            someone new to the field.
          </h3>
          <div className="flex md:justify-between min-w-full items-center flex-col md:flex-row gap-2 mb-10 md:mb-2 ">
            <div className="flex gap-3 items-center ">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
              <span>
                by
                <span className="text-[#FF5297]"> Yaseen Nazir</span>
              </span>
            </div>
            <div>Aug 5, 2024 • 7 Minute Read</div>
          </div>
          <Image
            src={"/images/main.png"}
            alt={"How you can get started in AI"}
            width={1000}
            height={600}
            className=" rounded-2xl "
          />
        </div>
      </section>

      <section className="container mx-auto md:px-40 md:mt-20 text-black min-h-screen">
        <h2 className="main-heading">
          The key steps I took to get my start in AI
        </h2>

        <h4 className="sub-heading">1. Getting hands-on practice</h4>
        <p className="paragraph ">
          Artificial intelligence (AI) and machine learning (ML) are
          transforming industries and creating new opportunities every day. If
          you're passionate about entering this exciting field but have no prior
          experience, don't worry—you can absolutely get there with
          determination and the right approach. In this post, I'll share
          practical advice on how to get started in{" "}
          <Link
            href={"/"}
            className="font-medium text-pink-500 underline decoration-1.5"
          >
            AI/ML
          </Link>
          , outline different pathways into the field, and offer insights from
          my journey.
        </p>
        <p className="paragraph">
          This project was intriguing and provided a practical and challenging
          application of ML techniques. It pushed me to dive deep into data
          analysis, feature engineering, and model evaluation, ultimately
          helping me understand the core principles of machine learning and the
          machine learning lifecycle. Understanding the machine learning
          lifecycle is crucial because it provides a structured approach to
          solving problems and addresses each project stage methodicall
        </p>

        <h2 className="main-heading">
          The key steps I took to get my start in AI
        </h2>

        <h4 className="sub-heading">1. Getting hands-on practice</h4>
        <p className="paragraph">
          This project was intriguing and provided a practical and challenging
          application of ML techniques. It pushed me to dive deep into data
          analysis, feature engineering, and model evaluation, ultimately
          helping me understand the core principles of machine learning and the
          machine learning lifecycle. Understanding the machine learning
          lifecycle is crucial because it provides a structured approach to
          solving problems and addresses each project stage methodicall
        </p>

        {/* <Code code={data} /> */}
        <p className="paragraph">
          This project was intriguing and provided a practical and challenging
          application of ML techniques. It pushed me to dive deep into data
          analysis, feature engineering, and model evaluation, ultimately
          helping me understand the core principles of machine learning and the
          machine learning lifecycle. Understanding the machine learning
          lifecycle is crucial because it provides a structured approach to
          solving problems and addresses each project stage methodicall
        </p>
      </section>
    </main>
  );
}
