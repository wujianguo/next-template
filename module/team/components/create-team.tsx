"use client"

import { FormError } from "@/components/form/form-error";
import { FormSuccess } from "@/components/form/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TeamCreateSchema, TeamSchema } from "../dto/team.dto";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { request } from "@/lib/request";
// import { SmartFormDialog } from "@/components/form/form-dialog";

export function CreateAppForm() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, setIsPending] = useState<boolean>(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof TeamCreateSchema>>({
    resolver: zodResolver(TeamCreateSchema),
    defaultValues: {
      name: "",
      slug: "",
    },
  });

  const onSubmit = (values: z.infer<typeof TeamCreateSchema>) => {
    setError("");
    setSuccess("");
    setIsPending(true);

    // startTransition(() => {
      request("/api/apps", TeamSchema, { method: "POST", body: JSON.stringify(values) }).then((response) => {
        setIsPending(false);
        form.reset();
        setError("");
        setSuccess("");
        router.push(`/apps/${response.slug}`);
      }).catch((error) => {
        setIsPending(false);
        console.error(error);
        setError(error.message);
      });
    // });
  };
  return (
    <Card className="mx-auto w-[400px] max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Add new app</CardTitle>
        {/* <CardDescription>
          Add new app
        </CardDescription> */}
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <div className="space-y-4">
                <>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={isPending}
                            placeholder="Enter an app name"
                            type="text"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Slug</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={isPending}
                            placeholder="Enter an app slug"
                            type="text"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              </div>
              <FormError message={error} />
              <FormSuccess message={success} />
              <Button
                disabled={isPending}
                loading={isPending}
                type="submit"
                className="w-full"
              >
                Confirm
              </Button>
            </form>
          </Form>
        </div>

      </CardContent>
    </Card>
  )
}

export function CreateTeamButton() {
  return (
    <div>

    {/* <SmartFormDialog trigger={<Button variant="default" size={"sm"} className="ml-auto h-8">Add new app</Button>} title={"Add new app"} cancelButton formSchema={AppCreateSchema} okButton={{label: 'Submit'}} onSubmit={async (values) => {
      console.log(values);
      console.log('=======');
      await request("/api/apps", AppResponseSchema, { method: "POST", body: JSON.stringify(values) });
    }} /> */}
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" size={"sm"} className="ml-auto h-8">Add new app</Button>
      </DialogTrigger>
      <DialogContent className="w-auto border-none bg-transparent p-0">
        <CreateAppForm />
      </DialogContent>
    </Dialog>
    </div>

  )
}
