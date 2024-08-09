import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-muted py-12 md:py-16 lg:py-20 border-b">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <Image
                  src={"/images/react.jpg"}
                  width={800}
                  height={600}
                  alt="Featured"
                  className="rounded-lg object-cover aspect-[4/3]"
                />
              </div>
              <div className="space-y-4 align-middle">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    The Ultimate Guide to Mastering React Hooks
                  </h1>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                      <AvatarFallback>JP</AvatarFallback>
                    </Avatar>
                    <span>Jared Palmer</span>
                    <span>•</span>
                    <span>May 1, 2023</span>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Dive deep into the world of React Hooks and learn how to build
                  powerful, reusable components. From useState to useEffect,
                  this comprehensive guide covers it all.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Recent Blog Posts
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out our latest blog posts and stay up-to-date with the
                  latest trends and insights.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
              {[1, 2, 3, 4, 5, 6].map((_, i) => {
                return (
                  <>
                    <Card>
                      <img
                        src="/images/react.jpg"
                        width="550"
                        height="310"
                        alt="Blog Post"
                        className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                      />
                      <CardContent className="p-4">
                        <h3 className="text-xl font-bold">
                          The Future of Web Development
                        </h3>
                        <p className="text-muted-foreground mt-2 line-clamp-3">
                          Explore the latest trends and technologies shaping the
                          future of web development. From AI-powered tools to
                          serverless architectures, learn how to stay ahead of
                          the curve.
                        </p>
                        <Link
                          href="#"
                          className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mt-4"
                          prefetch={false}
                        >
                          Read More
                        </Link>
                      </CardContent>
                    </Card>
                  </>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
